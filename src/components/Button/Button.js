import React, {Component} from 'react';
import './styles/Button.scss';

class Button extends Component{
  state = {
    click: false
  }

changeColor(){
    this.setState(state=>({click: !state.click}))
}


  render() {
  let coco = `btn-logo ${this.state.click ? 'abacaxi' : ''}`    
    console.log(this.state.click)
    return ( 
      <div>
        <button className={coco} onClick={() => this.changeColor()}>
          BUSY
        </button>
      </div>
    )
  }
}


export default Button;
