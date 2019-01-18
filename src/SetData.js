import React from 'react';

const setData = injectedProps => WrappedComponent => {
    const HasProps = props => <WrappedComponent {...injectedProps} {...props} />
    
    return HasProps
  }

  export default setData