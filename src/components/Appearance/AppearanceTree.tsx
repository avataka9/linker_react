import React from 'react'

interface IProps {
  folders: any
}

const AppearanceTree: React.FC<IProps> = ({folders}) => {
  
    if (folders.children)
  return ( 
    <div className=''>
      AppearanceTree
    </div>
  );
}

export default AppearanceTree;
