import React from 'react';
import commonStyles from './../Styles/CommonStyles';


const translateProps = (props) => {
    let _styles = {...commonStyles.default};
    if (props.disable){
        _styles = {..._styles, ...commonStyles.disable};
    }
    const newProps = {...props, styles: _styles};
    console.log(newProps);
    return newProps;
};

export default  (WrappedComponent) => {
    return function wrappedRender(args) {
        return WrappedComponent(translateProps(args));
    }
};