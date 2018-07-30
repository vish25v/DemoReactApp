import React, {Component} from 'react';

class Users extends Component{



  render(){
      let age = this.props.age ? this.props.age : "NA";
    return(


      <div> <strong> user: {this.props.name} {this.props.children} | {age}</strong></div>

    );
  }

}

export default Users;
