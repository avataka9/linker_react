import React from 'react'
import SearchAddBase from '../SearchAddBase/SearchAddBase'

import searchIcon from './search button.svg'

interface IProps {}

const Search: React.FC<IProps> = () => {
  return (
    <SearchAddBase icon={searchIcon} alt='search-icon'/>
  );
}

export default Search;
