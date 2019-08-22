import React from 'react'
import SearchAddBase from '../SearchAddBase/SearchAddBase'

import addIcon from './add button.svg'

interface IProps {}

const Add: React.FC<IProps> = () => {
  return (
    <SearchAddBase icon={addIcon} alt='add-icon'/>
  );
}

export default Add;
