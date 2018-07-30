import React, { Component } from 'react';
import './App.css';

import Users from './users/Users';
import User2 from './users/User2';
import Parent from './users/Parent';
import ButtonOne from './UIComponents/ButtonOne';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            gender: 'Female',
            group: 'A',
            name: 'Alex',
            grade: 'x',
            title: 'Math-Title'
        };

        this.changeData = this.changeData.bind(this);
        this.changeStatefromInput = this.changeStatefromInput.bind(this);
        this.input = React.createRef();
        this.handleUncontrolledClick = this.handleUncontrolledClick.bind(this);
    }


    changeData = (newGender) => {
      this.setState({
          gender: newGender,
          group: 'B',
          name: 'Alex'
      })
    };
    handleUncontrolledClick(e){
        alert('input name is: ' + ' ' + this.input.current.value);
        e.preventDefault();
    }
    changeStatefromInput =(event) =>{
        this.setState({
            name: event.target.value
        })
    };

    //----------------------------------------- Component- Communication ------------------------------------------
    handleChildButtonClick = () =>{
        this.setState({
            title: 'Science-Title'
        })
    };

    ChildAEvent = (childTitle) =>{
            this.setState({
                title: childTitle,
                grade: "A"
            })
    };
    ChildBEvent = (childTitle) =>{
        this.setState({
            title: childTitle,
            grade: "B"
        })
    };

  render() {
    return (
      <div className="App">
        <Users name="Alex" age="28" />
        <Users>Bob</Users>
        <hr/>
        <User2>Jim</User2>
        <User2>Pam</User2>
        <br/><hr/>
        <div> Gender: {this.state.gender} |  Group: {this.state.group}
        </div>
          <br/>
          {/*<button onClick={this.changeData}>Change Data</button><br/><br/>*/}
          {/*<button onClick={() =>{this.changeData('male :(')}}>Change Data| Anon func</button> &nbsp;*/}
          {/*<button onClick={this.changeData.bind(this, 'male :)')}>Change Data| using bind</button>*/}
          <hr/><br/>
          <h3>Controlled Component, using event | Two-way Databinding</h3>
          <input type='text' onChange={this.changeStatefromInput} value={this.state.name} />
           <br/><br/>
          <div>Name: {this.state.name}</div>
          <br/><br/><hr/>
          <h3>UnControlled Component, using refs:</h3>

          Name: <input type='text' ref={this.input}/>
          <br/><br/>
          <button onClick={this.handleUncontrolledClick}>Uncontrolled input</button>

        <br/>

          <h3>Component Communication</h3>
          {/*<Parent title = {this.state.title} doWhatever= {this.handleChildButtonClick}/>*/}
          <Parent ChildAEvent={this.ChildAEvent.bind(this, "Winner: A")}
                    ChildBEvent={this.ChildBEvent.bind(this, "Winner: B")}
                        title = {this.state.title} grade = {this.state.grade}/>
        <br/><hr/>
          <div>
              <h3>HOC Example:</h3>
              <ButtonOne disable/> &nbsp; <ButtonOne/>  

          </div>

      </div>

    );
  }
}

export default App;
