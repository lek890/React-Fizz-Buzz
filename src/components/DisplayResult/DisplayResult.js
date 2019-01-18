import React, { Component } from 'react';

class DisplayResult extends Component {
    render() {
        const { data } = this.props
        return (
          <div className="display">
            { data.map( (result, index) => {
                return <div key={index}>{result}</div> 
               })}
          </div>
        );
    }
  }
  
export default DisplayResult;