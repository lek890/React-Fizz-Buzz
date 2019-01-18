import React, { Component } from 'react';
import './Form.css';

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
        var value = event.target.value;

        if (!/^\d*\.?\d*$/.test(value)){
            event.target.value = ""
            event.preventDefault();
            return;
        }
        
        this.setState({
            updatedLimit : value ? parseInt(value) : ""
        });
      }
  
    limitUpdated(event){
        this.props.limitUpdated(this.state.updatedLimit);
    }
  
    render() {
        return (
            <div className="form">
                <input className="limitHolder" type="text" 
                placeholder="Enter the limit" 
                value={this.state.updatedLimit} 
                onChange={this.handleChange}
            />
            <button onClick={this.limitUpdated} 
            className="getResults"
            disabled={!this.state.updatedLimit}
            >Get results</button>
          </div>
        );
      }
  }
  
  export default Form;