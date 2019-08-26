import React from 'react';
import LinkIcon from '../LinkIcon/LinkIcon'


const LinkInFolder: React.FC = () => {
  return (
    <li>
        <button className='flex items-center ml-6'>
            <LinkIcon/> 
            <div className='ml-2'>
                Link name
            </div>  
        </button>
    </li>
  );
}

export default LinkInFolder;
