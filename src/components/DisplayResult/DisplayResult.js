import React, { Component } from 'react';
import './DisplayResult.css'

class DisplayResult extends Component {
    render() {
        const { data } = this.props
        return (
          <div className="display">
            { data.map( (value, index) => {
                return this.props.render(value, index)
               })}
          </div>
        );
    }
  }
  
export default DisplayResult;