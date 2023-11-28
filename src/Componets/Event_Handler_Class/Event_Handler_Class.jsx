import React, { Component } from 'react';

class Event_Handler_Class extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         changeValue : ""
      }
    }
    
    eventChange =(e)=>{
        this.setState({
            changeValue : e.target.value
        },()=>{
            console.log(this.state.changeValue);
        })
        
    }
    
    render() {
        return (
            <div>
                <input type="text" onChange={this.eventChange}/>
                <p>{this.state.changeValue}</p>
            </div>
        );
    }
}

export default Event_Handler_Class;