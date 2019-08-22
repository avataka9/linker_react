import React from 'react';
import CentralContainer from '../CentralContainer/CentralContainer'
import LeftAside from '../LeftAside/LeftAside'
import RightAside from '../RightAside/RightAside'

const Body: React.FC = () => {
  return (
    <div className='flex items-stretch px-12 min-h-full min-w-full'>
      <LeftAside/>
      <CentralContainer/>
      <RightAside/>
    </div>
  );
}

export default Body;
