import React, { Component } from 'react';

class counter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count : 0
      }
    }
    Increment =()=>{
        this.setState({
            count : this.state.count +1
        })
    }
    Decrement =()=>{
        this.setState({
            count : this.state.count -1
        })
    }
    Reset =()=>{
        this.setState({
            count : 0
        })
    }

    
    render() {
        const {count} = this.state
        return (
            <div>
                <h1 className='heading1'>Counter App</h1>
                
                <div className='counter'>
                    <h1 className='heading'>Count : {count}</h1>
                    <button className='btn1' onClick={this.Increment} disabled={count===5? true:false}>Increment</button>
                    <button className='btn2' onClick={this.Decrement} disabled={count===-5? true:false}>Decrement</button>
                    <button className='btn3' onClick={this.Reset}>Reset</button>
                </div>
            </div>

        );
    }
}

export default counter;