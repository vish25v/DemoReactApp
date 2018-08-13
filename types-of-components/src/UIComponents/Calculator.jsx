import React, {Component} from 'react';

import BoilingVerdict from './BoilingVerdict';

class Calculator extends Component{
    constructor(props){
        super(props);
        this.state= {
            temp: ''
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
        e.preventDefault();
        this.setState({
            temp: e.target.valueOf
        });
    }

    render(){
        const temp = this.state.temp;
        return(
            <div>
                <fieldset>
                    <legend>Enter Temp in Celsius:</legend>
                    <input value={temp} onChange={this.handleChange} />

                    <BoilingVerdict celsius={parseFloat(temp)}/>
                </fieldset>
            </div>
        );
    };

}

export default Calculator;