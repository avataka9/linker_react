import React from 'react';
import iconOpened from './folder-opened.svg'
import iconClosed from './folder-closed.svg'

const FolderIcon: React.FC = () => {
  return (
    <div className=''>
        <img src={iconOpened} alt="folder-opened"/>
        <img src={iconClosed} alt="folder-closed"/>
    </div>
  );
}

export default FolderIcon;