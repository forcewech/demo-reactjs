
import './App.scss';
import React from 'react';
import Header from './components/Header/Header';
import { Outlet } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div className='app-container'>
        <div className='header-container'>
          <Header></Header>
        </div>
        <div className='main-container'>
          <div className='sidenav-container'></div>
          <div className='app-content'>
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
