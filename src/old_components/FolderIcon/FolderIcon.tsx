import React from 'react';
import iconOpened from './folder-opened.svg'
import iconClosed from './folder-closed.svg'

interface IProps {
    isOpened: boolean
}

const FolderIcon: React.FC<IProps> = ({isOpened}) => {
    console.log(isOpened)
  return (
    <div className=''>
        <img src={isOpened?iconOpened:iconClosed} alt={isOpened?'folder-opened':'folder-closed'}/>
    </div>
  );
}

export default FolderIcon;