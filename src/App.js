import React, { Component } from 'react';
import './App.css';

import Form from './components/Form/Form'
import DisplayResult from './components/DisplayResult/DisplayResult'

import setData from './SetData';
import FizzBuzz from './helpers/FizzBuzz';

class App extends Component {
  constructor(props){
    super(props)
    
    this.state={
        limit : 1,
        data: []
    }
    
    this.limitUpdated = this.limitUpdated.bind(this); 
  }

  limitUpdated(limit){

    var results = [];
    Array.from( FizzBuzz.buzz(limit) ).forEach((i) => results.push(i.toString()));

    this.setState({
        limit,
        data: results
    });
  }

  render() {

    const FrizzBuzzResult = setData({ data : this.state.data , test : "123"})(DisplayResult)

    return (
      <div className="App">
         <div className="App-logo">
                FIZZ BUZZ
         </div>
         <Form limit={this.state.limit} limitUpdated={this.limitUpdated}/>
         <div>
              <div className="results">Results:</div>
              <ul className="list">
                    <FrizzBuzzResult />
              </ul>
         </div>
      </div>
    );
  }
}

export default App;
