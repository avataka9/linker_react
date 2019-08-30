import React from 'react'
import User from '../User/User'
import Add from '../Add/Add'
import Search from '../Search/Search'

import './Header.css'

const Header: React.FC = () => {
  return (
    <div className='px-12 h-10 flex items-center border-b-2 border-gray-200 hover:border-orange-200 opacity-50 hover:opacity-100'>
      <User username='username'/>
      <div className='px-4 w-8/12 h-full flex justify-center items-center'>
        <Search/>
        <Add/>
      </div>
    </div>
  );
}

export default Header;
