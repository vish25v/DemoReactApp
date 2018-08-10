import React, {Component, PureComponent} from 'react';

const ScoreBoard = (props) => {

    return (  <div> Score: {props.val} </div>  );

};

class ScorePage extends Component {

    state= {
        val: 1
    };


    componentDidMount() {

        setInterval(
            this.setState(()=>{
                return {val:1}
            }, 2000)
        )
    }

    render(){
        console.log("render in ScorePage");

        return(
            <div>
                <ScoreBoard val = {this.state.val} />

            </div>

        )
    }
}

export default ScorePage;


