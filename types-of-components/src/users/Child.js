import React from 'react';

const Child = (props) => {
    return(
        <div>
            <button onClick={props.doWhatever}> Title: {props.title} | &nbsp; Grade: {props.grade}</button>
        </div>
    );
};

export default Child;