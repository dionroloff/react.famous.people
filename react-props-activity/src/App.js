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

  updateTotal = (inputNumber) => {
    console.log('updating total with', inputNumber);
    this.setState({
      total: this.state.total + inputNumber,
    });
  }
  
  render() {
    return (
      <div className="App">
        
        <div className="App-header">
            <header>
                <Header />
            </header>
        </div>
        
        <div className="enter-number">
            <h4>Enter a number and click up or down. The total will increase or decrease by that amount.</h4>
            <EnterNumber updateTotal={this.updateTotal}/>
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
