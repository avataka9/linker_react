import React from 'react';

import Header from './Header/Header';
import Body from './Body/Body';
import Footer from './Footer/Footer';

import './MainPage.css';

interface IProps {}

interface IState {}

class MainPage extends React.Component<IProps, IState> {
    render() {
        return (
            <div className='MainPage'>
                <div className='MainPage__header'>
                    <Header/>
                </div>  
                <div className='MainPage__content'>
                    <Body/>
                </div>
                <div className='MainPage__footer'>
                    <Footer/>   
                </div>       
            </div>
          );
    }
}

export default MainPage;
