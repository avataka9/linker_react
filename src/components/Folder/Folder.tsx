import React from 'react';
import LinkInFolder from '../LinkInFolder/LinkInFolder'
import FolderIcon from '../FolderIcon/FolderIcon'

const Folder: React.FC = () => {
  return (
    <div className=''>
        <div className='flex items-center'>
            <FolderIcon/>
            <div>Folder Name</div>
        </div>
        <LinkInFolder/>
    </div>
  );
}

export default Folder;
