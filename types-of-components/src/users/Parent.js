import React from 'react';
import Child from './Child';

const Parent = (props) => {
    return(
        <div>
            Parent:
            <Child {...props } grade='8th' /><br/><br/>

            Child A: <Child doWhatever ={props.ChildAEvent} title ={props.title} grade = {props.grade}/><br/>
            Child B: <Child doWhatever ={props.ChildBEvent} title ={props.title} grade = {props.grade} />

        </div>
    )
};

export default Parent;