import React, { Component } from 'react';

import './App.scss';

// components
import Navbar from './components/navbar/Navbar.jsx';
import TourList from './components/TourList/TourList.jsx';

class App extends Component{
  render(){
    return(
      <main>
        <Navbar/>
        <TourList/>
      </main>
    );
  }
}


export default App;
