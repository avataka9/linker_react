import React from 'react'
import Icon from '../Icon/Icon'

import addIcon from './add button.svg'

interface IProps {}

const Add: React.FC<IProps> = () => {
  return (
    <Icon src={addIcon} alt='add-icon'/>
  );
}

export default Add;
