import React, { Component } from 'react';
import './sass/styles.scss';
import FrontPlate from './Apps/frontPlate/frontPlate';


class App extends Component {
   
   
  render(){
    return (
      <main>
        <FrontPlate></FrontPlate>
      </main>  
    )
  }
}

export default App;