import React from 'react'
import Link from '../Link/Link';
import FolderIcon from '../FolderIcon/FolderIcon';


interface IChildren {
    children?:IChildren[],
    type: string,
    isOpen: boolean
}

interface IProps {
  folder: any,
  isOpen: boolean
}

const Folder: React.FC<IProps> = ({folder, isOpen}) => {
    console.log(folder)
    
  return ( 
    <div className='ml-4'>
        <FolderIcon isOpen={isOpen}/>
        folder
      {folder.map((item:IChildren,index:number) => { 
          if (item.type === "folder") {
            console.log("folder")
            return <Folder folder={item.children} isOpen={item.isOpen} key={index}/>
          } else if (item.type === "link") {
            console.log("link")
            return <Link link={item} key={index}/>
          }
      })}
     
    </div>
  );
}

export default Folder;
