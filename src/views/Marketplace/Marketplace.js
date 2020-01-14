import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Pagination } from 'antd';
// import devices from './devices';
// import pink from '../img/pink.jpg';
// import stare from '../img/stare.jpg';
// import mobileCard from '../img/mobileCard.jpg';
import CoachCard from '../../components/CoachCard';
import {
  getCoaches,
  searchForKeyword,
  searchForPrice,
} from '../../state/actions/marketplaceActions';
import SelectPrice from '../../components/Inputs/SelectPrice';
import SearchForKeyword from '../../components/Inputs/SearchForKeyword';

const StyledMarketplace = styled.div`
  display: flex;
  flex-direction: column;

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
    /* pointer-events: none; */
    &:hover {
      color: #4fad65;
    }

    .ant-pagination-item-active {
      border-color: #4fad65;
      /* pointer-events: none; */
      &:hover {
        color: #4fad65;
      }
    }

    .ant-pagination-item-active a {
      color: #4fad65;
      /* pointer-events: none; */
      /* cursor: pointer; */
      &:hover {
        color: #4fad65;
      }
    }

    .ant-pagination-item-active a:hover {
      color: #4fad65;

      &:hover {
        color: #4fad65;
      }
    }
  }
`;

const Marketplace = ({
  searchForKeyword,
  getCoaches,
  coaches,
  searchForPrice,
}) => {
  // const [searchTerm, setSearchTerm] = useState('');
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(6);

  useEffect(() => {
    getCoaches();
  }, [getCoaches]);

  // const handleChange = event => {
  //   setSearchTerm(event.target.value.toLowerCase());
  //   searchForKeyword(searchTerm);
  // };

  const handlePagination = value => {
    if (value <= 1) {
      setMinValue(0);
      setMaxValue(6);
    } else {
      setMinValue(value * 6 - 6);
      setMaxValue(value * 6);
    }
  };

  return (
    <StyledMarketplace>
      <SelectPrice searchForPrice={searchForPrice} />
      <SearchForKeyword
        searchForKeyword={e => searchForKeyword(e.target.value)}
      />
      <div className='coaches'>
        {coaches &&
          coaches
            .slice(minValue, maxValue)
            .map(coach => (
              <CoachCard key={coach.first_name} coach={coach} />
            ))}
      </div>
      <div className='pagination'>
        <Pagination
          defaultCurrent={1}
          defaultPageSize={6}
          onChange={handlePagination}
          total={coaches.length}
        />
      </div>
    </StyledMarketplace>
  );
};
const mapStateToProps = state => {
  return {
    coaches: state.marketplaceReducer.coaches,
  };
};

export default connect(mapStateToProps, {
  getCoaches,
  searchForKeyword,
  searchForPrice,
})(Marketplace);
