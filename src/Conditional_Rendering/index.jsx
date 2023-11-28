import React, { Component } from 'react';
import Home from './home'
import Login from './loginPage'

class index extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        isloggedin : true
      }
    }
    
    render() {
        if(this.state.isloggedin){
            return <Home />
        }
        else{
            return <Login /> 
        }
        return (
            <div>
                

            </div>
        );
    }
}

export default index;