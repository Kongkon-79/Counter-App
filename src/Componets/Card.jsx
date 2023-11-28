import React, { Component } from 'react';

class Card extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count :0
      }
      this.Incress = this.Incress.bind(this);
    }
    Incress (){
        this.setState({
            count : this.state.count +1
        })
        
    }

    
    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.Incress}>Incress</button>
            </div>
        );
    }
}

export default Card;