import React from 'react'
import User from '../User/User'
import Add from '../Add/Add'
import Search from '../Search/Search'

import './Header.css'

const Header: React.FC = () => {
  return (
    <div className='px-12 h-10 flex items-center'>
      <User username='username'/>
      <div className='px-4 w-8/12 h-full'>
        <Search/>
        <Add/>
      </div>
    </div>
  );
}

export default Header;
