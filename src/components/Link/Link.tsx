import React from 'react'

interface IProps {
  link: any
}

const Link: React.FC<IProps> = ({link}) => {
    console.log(link)
    
  return ( 
    <div className='ml-4'>
      link
    </div>
  );
}

export default Link;
