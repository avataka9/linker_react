import React from 'react'
import Folder from '../Folder/Folder';

interface IChildren {
    children?:object[],
    type: string
}

interface IProps {
  folders: {
      children:IChildren[]
  }
}

const AppearanceTree: React.FC<IProps> = ({folders}) => {
  return ( 
    <ul className=''>
        AppearanceTree place for fast
        <Folder folder={folders.children} isOpen={true} name={"all"} description={"all description"}/>
    </ul>
  );
}

export default AppearanceTree;
