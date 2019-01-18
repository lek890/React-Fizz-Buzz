import React, { Component } from 'react';

class Form extends Component {
    constructor(props){
      super(props)
      
      this.state={
          limit : 1,
      }
      
      this.limitUpdated = this.limitUpdated.bind(this);
      this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        var value = event.target.value ? event.target.value : '0';
        this.setState({
            updatedLimit : parseInt(value)
        });
      }
  
    limitUpdated(event){
        this.props.limitUpdated(this.state.updatedLimit);
    }
  
    render() {
        return (
          <div className="form">
            <div>
                FIZZ BUZZ
            </div>
            <div>
               <input type="text" placeholder="Enter the limit" value={this.state.updatedLimit} onChange={this.handleChange}/>
               <button onClick={this.limitUpdated}>Get results</button>
            </div>
          </div>
        );
    }
  }
  
  export default Form;