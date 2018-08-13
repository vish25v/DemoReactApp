import React from 'react';
const BoilingVerdict = (props) =>{
    if (props.celsius >= 100) {
        return ( <p> The water would boil !</p> )
    }
    
    return( <p> The water wouldn't boil ! </p> );

};

export default BoilingVerdict;

