import React from 'react'

interface IProps {
    src: string,
    alt: string
}

const Icon: React.FC<IProps> = ({src, alt}) => {
  return (
    <div className='w-8'>
       <img className='block object-contain object-center' src={src} alt={alt}/>     
    </div>
  );
}

export default Icon;
