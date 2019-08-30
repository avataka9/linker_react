import React from 'react'
import Header from '../../components/Header/Header'
import Body from '../../components/Body/Body'
import Footer from '../../components/Footer/Footer'

import './MainPage.css'

interface IProps {}

interface IState {}

class MainPage extends React.Component<IProps, IState> {
    render() {
        return (
            <div className='flex flex-col min-h-full'>
                <div className=''>
                    <Header/>
                </div>  
                <div className='flex-grow flex items-stretch'>
                    <Body/>
                </div>
                <div className='flex-shrink-0'>
                    <Footer/>   
                </div>       
            </div>
          );
    }
}

export default MainPage;
