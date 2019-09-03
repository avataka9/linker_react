import React from 'react'
import Link from '../Link/Link';
import FolderIcon from '../FolderIcon/FolderIcon';


interface IChildren {
    children?:IChildren[],
    type: string,
    isOpen: boolean
    name: string,
    description: string,
    nameEdited?: string,
    descriptionEdited?: string,
}

interface IProps {
    folder: any,
    isOpen: boolean,
    name: string,
    description: string,
}

const Folder: React.FC<IProps> = ({folder, isOpen, name, description}) => {
    console.log(folder)
    
  return (
    <li className='pl-4'>
        <button className='flex items-center'>
            <FolderIcon isOpen={isOpen}/>
            <div>{name}</div>
        </button>
        <ul className={isOpen?'':'h-0 overflow-y-hidden'}>
            {folder.map((item:IChildren,index:number) => { 
                if (item.type === "folder") {
                    return <Folder folder={item.children} isOpen={item.isOpen} name={item.name} description={item.description} key={index}/> 
                } else if (item.type === "link") {
                    return <Link link={item} key={index}/>
                }
                return "you send me wrong type of children"
            })}
        </ul>
    </li>     
  );
}

export default Folder;
