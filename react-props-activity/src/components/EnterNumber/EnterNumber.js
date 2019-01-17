import React, {Component} from 'react';

class EnterNumber extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            total: 0,
            numberOnDom: 0,
        }
    }

    reassignState = () => {
        this.setState({
            total: this.state.total,
        })
    }

    newNumberUp = (event) => {
        event.preventDefault();

        this.setState({
            total: this.state.total + this.state.numberOnDom,
        })

        // console.log(`${this.state.total}`);
        // //pass this number to App.js
        // const numberIn = {
        //     numberIn: this.state.total,
        // }
        // this.props.numberOnDom(numberIn);
    }

    newNumberDown = (event) => {
        event.preventDefault();

        this.setState({
            total: this.state.total - this.state.numberOnDom,
        })

        // console.log(`${this.state.total}`);
        // //pass this number to App.js
        // const numberIn = {
        //     numberIn: this.state.total,
        // }
        // this.props.numberOnDom(numberIn);
    }
    
    render() {
        console.log(this.state.total);
        return (
            <div>
                <button onClick={this.newNumberUp}>Up</button>
                <input type="number" placeholder="Enter Number" onChange={this.reassignState}/>
                <button onClick={this.newNumberDown}>Down</button>
                {JSON.stringify(this.state)}
            </div>
        )
    }
}

export default EnterNumber;