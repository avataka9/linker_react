import React from 'react'
import Appearance from '../Appearance/Appearance';

interface IProps {
  folders: object
}

const Contents: React.FC<IProps> = ({folders}) => {
  return (
    <div className='px-4 w-2/12 py-4'>
      <Appearance folders={folders} view="tree" order="alphabet" isReverse={false} />
    </div>
  );
}

export default Contents;
