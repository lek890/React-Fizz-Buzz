import React from 'react';

const ListItem = ( props)  => <li key={props.index}>{props.result}</li>;

const setData = injectedProps => WrappedComponent => {

     const HasProps = props => <WrappedComponent {...injectedProps}
     render={ ( result, index ) => <ListItem result={result} index={index} /> }/>
        
    return HasProps
  }

  export default setData