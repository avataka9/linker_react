import React from 'react'
import Appearance from '../Appearance/Appearance';

interface IChildren {
  children?:object[],
  type: string
}

interface IProps {
folders: {
    children:IChildren[]
}
}

const Contents: React.FC<IProps> = ({folders}) => {
  return (
    <div className='pr-4 w-2/12 py-4'>
      <Appearance folders={folders} view="tree" order="alphabet" isReverse={false} />
    </div>
  );
}

export default Contents;
