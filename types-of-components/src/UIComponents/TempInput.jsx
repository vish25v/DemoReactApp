import React, {Component} from 'react';

const scaleName ={
    c: 'Celsius',
    f: 'Fahrenheit'
};

class TempInput extends Component{

    constructor (props){
        super(props);
        this.state={

        }
    }

    handleChange(e){
        e.preventDefault();
        this.setState({
            temp: e.target.value
        });
    }


    render(){
        return(
            <div>
                <fieldset>
                    <legend> Enter Temp in {scaleName[this.props.scale]} :  </legend>
                    <input value={temp} onChange={this.handleChange}/>
                </fieldset>
            </div>
        )
    }


}