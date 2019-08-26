import React from 'react'

import UserIcon from '../UserIcon/UserIcon'
import dropDownArrow from './dropdown arrow.png'


interface IProps {
    username: string
}

interface IState {}

class User extends React.Component<IProps, IState> {
    render() {
        return (
            <div className='px-4 w-2/12 flex items-center justify-start hover:bg-orange-300 rounded-lg cursor-pointer'>
                <UserIcon/>
                <div className='pl-4 mr-2'>
                    {this.props.username}
                </div>
                <div>
                    <img src={dropDownArrow} alt="dropDownArrow"/>
                </div>
            </div>
          );
    }
}

export default User;
