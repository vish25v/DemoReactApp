import React from 'react';
import StylesWrapper from './../HOC/StylesWrapper';

const ButtonOne = (props) =>{
    console.log("props in the buttonone");
    console.log(props.styles);
  return(
      <button style={props.styles}> Button-One </button>
  );

};
export default StylesWrapper(ButtonOne);