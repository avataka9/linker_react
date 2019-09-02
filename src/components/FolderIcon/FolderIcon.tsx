import React from 'react';
import iconOpened from './folder-opened.svg'
import iconClosed from './folder-closed.svg'

interface IProps {
    isOpen: boolean
}

const FolderIcon: React.FC<IProps> = ({isOpen}) => {
    console.log(isOpen)
  return (
    <div className=''>
        <img src={isOpen?iconOpened:iconClosed} alt={isOpen?'folder-opened':'folder-closed'}/>
    </div>
  );
}

export default FolderIcon;