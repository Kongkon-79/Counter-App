import React, { Component } from 'react';

class Hooks extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count : 0
      }
    }
    Incre =()=> {
        this.setState({
            count : this.state.count +1
        })
    }
    
    render() {
        const {count} = this.state
        return (
            <div>
                <h1>Count = {count}</h1>
                <button onClick={this.Incre} disabled = {count===10? true:false}>Increment</button>
            </div>
        );
    }
}

export default Hooks;