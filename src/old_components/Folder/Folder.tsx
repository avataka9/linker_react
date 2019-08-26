import React from 'react';
import LinkInFolder from '../LinkInFolder/LinkInFolder'
import FolderIcon from '../FolderIcon/FolderIcon'

interface IProps {
    isOpened: boolean
}

const Folder: React.FC<IProps> = ({isOpened}) => {
  return (
    <li className=''>
        <button className='flex items-center'>
            <FolderIcon isOpened={isOpened}/>
            <div>Folder Name</div>
        </button>
        <ul className={isOpened?'':'h-0 overflow-y-hidden'}>
            <LinkInFolder/>
        </ul>
    </li>
  );
}

export default Folder;
