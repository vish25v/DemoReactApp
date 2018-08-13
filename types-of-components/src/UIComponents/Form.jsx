import React,{Component} from 'react';

class Form extends Component{


    constructor(props){
        super(props);
        this.state = {
            fname: '',
            lname: '',
            age: 0,
            submit: false

        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange_age = this.handleChange_age.bind(this);
        this.handleChange_fname = this.handleChange_fname.bind(this);
        this.handleChange_lname = this.handleChange_lname.bind(this);
    }
    style={
        notsubmitted:{'display': 'none'},
        submitted: {'display': ''}
    };
    handleSubmit(e){
        e.preventDefault();
        this.setState({submit: true});
        console.log('Form state on submit:', this.state);

    }
    handleChange_fname(e) {
        e.preventDefault();
        this.setState({
            fname: e.target.value
        });
    }

    handleChange_lname(e) {
        e.preventDefault();
        this.setState({
            lname: e.target.value
        })
    }
    handleChange_age(e){
        e.preventDefault();
        this.setState({
            age: e.target.value
        })
    }

    render(){

        return(

            <div>
                <form onSubmit={this.handleSubmit}>
                    <legend>First Name:</legend>
                    <input type = 'text' onChange={this.handleChange_fname} value={this.state.fname}/>
                    <legend>Last Name:</legend>
                    <input type = 'text' onChange={this.handleChange_lname} value={this.state.lname}/>
                    <legend>Age:</legend>
                    <input type='number' onChange={this.handleChange_age} value={this.state.age}/> <br/> <br/>

                    <button type = 'submit'><strong> Submit </strong> </button>
                    <div style= {this.state.submit ? this.style.submitted: this.style.notsubmitted}>
                        <h3  >Person Details</h3>
                        <h3>{this.state.fname}</h3>
                        <h3>{this.state.lname}</h3>
                        <h3>{this.state.age}</h3>
                    </div>
                </form>
            </div>
        );
    }


}
export default Form;