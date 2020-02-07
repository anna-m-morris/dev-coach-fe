import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Pagination from 'antd/lib/pagination';
import 'antd/lib/pagination/style/index.css';
import Loader from 'react-loader-spinner';
import CoachCard from '../../components/Cards/CoachCard';
import {
  getCoaches,
  searchForKeyword,
  searchForPrice,
  searchForExperience,
} from '../../state/actions/marketplaceActions';
import { saveCoach } from '../../state/actions/bookingActions';
import { getFeedback } from '../../state/actions/feedbackActions';
import { savePeer } from '../../state/actions/chatActions';
import SelectPrice from '../../components/Inputs/SelectPrice';
import SelectExperience from '../../components/Inputs/SelectExperience';
import SearchForKeyword from '../../components/Inputs/SearchForKeyword';
import devices from '../../utils/devices';

const StyledMarketplace = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  .top {
    display: flex;
    justify-content: space-around;
    align-items: center;

    .keyword {
      margin-top: 1rem;
    }

    @media ${devices.mobile} {
      flex-direction: column;
      align-items: center;
    }
  }

  .coaches {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: space-evenly;
    padding-top: 1rem;
  }

  .pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 2em;

    .ant-pagination-item-active {
      border-color: #4fad65;
    }

    .ant-pagination-item-active a {
      color: #4fad65;
    }
  }
  .loaderStyled {
    margin-top: 200px;
    margin-bottom: 200px;
  }
`;

const Marketplace = props => {
  const {
    searchForKeyword,
    getCoaches,
    coaches,
    searchForPrice,
    searchForExperience,
    saveCoach,
    getFeedback,
    feedback,
    savePeer,
    loadingCoaches,
  } = props;

  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(6);

  useEffect(() => {
    getCoaches();
  }, [getCoaches]);

  const handlePagination = value => {
    if (value <= 1) {
      setMinValue(0);
      setMaxValue(6);
    } else {
      setMinValue(value * 6 - 6);
      setMaxValue(value * 6);
    }
  };
  if (loadingCoaches) {
    return (
      <StyledMarketplace className='marketplace-container'>
        <div className='top'>
          <Loader
            type='TailSpin'
            color='#2BAD60'
            height={80}
            width={80}
          />
        </div>
      </StyledMarketplace>
    );
  }
  return (
    <StyledMarketplace className='marketplace-container'>
      <div className='top'>
        <SelectPrice searchForPrice={searchForPrice} />
        <SearchForKeyword
          searchForKeyword={e => searchForKeyword(e.target.value)}
        />
        <SelectExperience searchForExperience={searchForExperience} />
      </div>
      <div className='coaches'>
        {coaches &&
          coaches.slice(minValue, maxValue).map(coach => (
            <CoachCard
              key={coach.email}
              coach={coach}
              saveCoach={() => saveCoach(coach)}
              getFeedback={getFeedback}
              feedback={feedback}
              savePeer={() =>
                savePeer(
                  {
                    email: coach.email,
                    name: `${coach.first_name} ${coach.last_name}`,
                    avatar_url: coach.avatar_url,
                  },
                  props,
                )
              }
            />
          ))}
      </div>
      <div className='pagination'>
        <Pagination
          defaultCurrent={1}
          defaultPageSize={6}
          onChange={handlePagination}
          total={coaches && coaches.length}
        />
      </div>
    </StyledMarketplace>
  );
};
const mapStateToProps = state => {
  return {
    coaches: state.marketplaceReducer.coaches,
    loadingCoaches: state.marketplaceReducer.isLoading,
    feedback: state.feedbackReducer.feedback,
  };
};

export default connect(mapStateToProps, {
  getCoaches,
  searchForKeyword,
  searchForPrice,
  searchForExperience,
  saveCoach,
  getFeedback,
  savePeer,
})(Marketplace);
