import React from 'react';
import Appearance from '../Appearance/Appearance';

interface IProps {
  folders: object
}

const Main: React.FC<IProps> = ({folders}) => {
  return (
    <div className='px-4 w-8/12 border-l-2 border-r-2 border-gray-100 py-4'>
      <Appearance folders={folders} view="tree" order="alphabet" isReverse={false} />
    </div>
  );
}


export default Main;
