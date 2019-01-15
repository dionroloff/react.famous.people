import React, { Component } from 'react';
import FamousPerson from './components/FamousPerson/FamousPerson';
import Header from './components/Header/Header'
import './App.css';

class App extends Component {
  
  constructor() {
    super();
    this.state = {
        name: 'Dion Roloff',
        role: 'Trillionaire Spy'
    }
  }
  
  changeName = (event) => {
    console.log(event.target.value);
   
    this.setState({
      name: event.target.value
    });
  }

  changeRole = (event) => {
    console.log(event.target.value);
    
    this.setState({
      role: event.target.value
    });
  }
  
  
  render() {
    return (
      <div className="App">
        
        <Header /> 
        <p>Add a name and role of a famous person</p>
        <input onChange={this.changeName} type="text" placeholder="name"/>
        <input onChange={this.changeRole} type="text" placeholder="role"/>

        <p>{this.state.name} is famous for being a {this.state.role}</p>
      
      </div>
      
    );
  }
}

export default App;
