import React from 'react'
import Icon from '../Icon/Icon'

interface IProps {
    icon: string,
    alt: string
}

const SearchAddBase: React.FC<IProps> = ({icon,alt}) => {
  return (
    <div className='flex w-1/4 mx-4 border border-orange-300 rounded-lg focus-within:border-orange-400 focus-within:shadow'>
      <input type='text' className='rounded-lg outline-none'/>
      <button className='hover:bg-teal-300 focus:bg-teal-300 rounded-lg flex-grow flex items-center justify-center outline-none focus:outline-none active:bg-orange-300'>
        <Icon src={icon} alt={alt}/>
      </button>
    </div>
  );
}

export default SearchAddBase;
