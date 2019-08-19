import React from 'react';
import './Icon.css'

interface IProps {
    src: 'string',
    alt: 'string'
}

const Header: React.FC<IProps> = () => {
  return (
    <div className='Icon'>
       <img src="" alt="Icon"/>     
    </div>
  );
}

export default Header;
