import React, {Component} from 'react';

class BetterForm extends Component {

    constructor(props){
        super(props);
        this.state ={
            fname : 'fname',
            lname : 'lname',
            age : '0'
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleSubmit(e){
        e.preventDefault();
        console.log(this.state);
    }

    handleChange = ({key , value}) => {
        this.setState({
        [key] : value
        });
    };

    // handleChange (arg)  {
    //     ;     console.log(arg);
    //     this.setState({
    //         [arg.key] : arg.value
    //     });
    //     console.log(this.state);
    // }

    render(){

        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label> First Name : </label>
                    <input type='text' value={this.state.fname} onChange={(e) => this.handleChange({key: 'fname', value: e.target.value})} />
                    <label> Last Name : </label>
                    <input type='text' value={this.state.lname} onChange={(e) => this.handleChange({key: 'lname', value: e.target.value})} />
                    <input type='number' value={this.state.age} onChange={(e) => this.handleChange({key : 'age' , value : e.target.value})} />
                    <br/>
                    <button type='submit' > <strong> Submit </strong> </button>
                </form>

            </div>
        );
    };

}

export default BetterForm;

