import React, {Component} from 'react';


class CurrentTotal extends Component {
    render() {
        return (
            <div>
                <h3>Current Total</h3>
                <p>{this.props.total}</p>
                <button type="submit">Save</button>
            </div>
        )
    }
}

export default CurrentTotal;