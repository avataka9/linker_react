import React from 'react';
import Folder from '../Folder/Folder'

interface IProps {}

interface IState {}

class LeftAside extends React.Component<IProps, IState> {

    

    render() {
        return (
            <div className='px-4 w-2/12 py-4'>
              <ul>
                <Folder isOpened={true}/>
                <Folder isOpened={false}/> 
              </ul> 
            </div>
        )
    }
}

export default LeftAside;
