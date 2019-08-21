import React from 'react'
import Icon from '../Icon/Icon'

import searchIcon from './search button.svg'

interface IProps {}

const Search: React.FC<IProps> = () => {
  return (
    <Icon src={searchIcon} alt='search-icon'/>
  );
}

export default Search;
