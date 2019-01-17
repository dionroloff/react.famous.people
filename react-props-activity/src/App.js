import React, { Component } from 'react';
import Header from './components/Header/Header.js';
import EnterNumber from './components/EnterNumber/EnterNumber.js';
import CurrentTotal from './components/CurrentTotal/CurrentTotal';
import History from './components/History/History.js';
import './App.css';
import './components/CurrentTotal/CurrentTotal.css';
import './components/History/History.css';

class App extends Component {

  constructor() {
    super(); 
      this.state = {
        total: 0,
      }
    
  }

  // numberOnDom = (num) => {
  //   console.log('in app.js numberOnDom', num);
  // }
  
  // appendNumber = (numberIn) => {
  //   console.log('in app.js appendNumber, ', numberIn);
  //   this.setState({
  //     total: [...this.state.total, numberIn],
  //   });
  // }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
            <Header />
        </header>
        <div className="enter-number">
            <h4>Enter a number and click up or down. The total will increase or decrease by that amount.</h4>
            <EnterNumber />
        </div>
        <div className="current-total">
            <CurrentTotal total={this.state.total} numberOnDom={this.numberOnDom}/>
        </div>
        <div className="history">
            <h4>History</h4>
            <History />
        </div>
        
      </div>
    );
  }
}

export default App;
