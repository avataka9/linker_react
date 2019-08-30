import React from 'react'
import { Route } from "react-router-dom"
import PublicPage from "../pages/PublicPage/PublicPage"
import MainPage from "../pages/MainPage/MainPage"


import './App.css'

interface IProps {}

interface IState {}

export default class App extends React.Component<IProps, IState> {

  isAuthenticated = true;

  componentDidMount() {

  }

  render() {
    
    return (
        <Route path="/" component={this.isAuthenticated?MainPage:PublicPage} />
    );
  }
  
}

