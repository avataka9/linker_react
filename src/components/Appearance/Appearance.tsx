import React from 'react'
import AppearanceTree from './AppearanceTree';
import AppearanceWrong from './AppearanceWrong';


interface IProps {
  folders: object,
  view: string,
  order: string,
  isReverse: boolean
}

const Appearance: React.FC<IProps> = ({folders, view, order, isReverse}) => {
  switch (view) {
    case "tree":
      return <AppearanceTree folders={folders}/>
    default:
      return <AppearanceWrong/>
  }

  
}

export default Appearance;
