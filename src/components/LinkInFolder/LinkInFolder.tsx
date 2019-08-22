import React from 'react';
import LinkIcon from '../LinkIcon/LinkIcon'


const LinkInFolder: React.FC = () => {
  return (
    <div className='flex items-center'>
        <LinkIcon/> 
        <div className='ml-2'>
            Link name
        </div>  
    </div>
  );
}

export default LinkInFolder;
