import React from 'react';
import Input from '@material-ui/core/Input';
import styled from 'styled-components';
import devices from '../../utils/devices';

const SearchStyled = styled.div`
  @media ${devices.mobile} {
    width: 7.5rem;
  }
`;
const SearchForKeyword = props => {
  return (
    <SearchStyled>
      <Input
        placeholder='Keyword'
        className='keyword'
        inputProps={{ 'aria-label': 'description' }}
        onChange={props.searchForKeyword}
      />
    </SearchStyled>
  );
};

export default SearchForKeyword;
