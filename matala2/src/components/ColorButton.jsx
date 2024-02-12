
import React, { Component } from 'react';

class ColorButton extends Component {

constructor(props) {
    super(props);
    this.state = {
      backgroundColor: 'white'
    };
  }

  changeColor = (color) => {
    this.setState({ backgroundColor: color });
  };

  render() {
    const divStyle = {
        backgroundColor: this.state.backgroundColor,
        padding: '20px',
        borderRadius: '10px',
        display: 'inline-block',
        height: '200px' 
      };
  
      const buttonStyle = {
        color: 'black',
        backgroundColor: this.state.backgroundColor,
        
        borderRadius: '5px',
        padding: '10px 20px',
        cursor: 'pointer',
        marginRight: '10px'
      };
    return (

      <div style={divStyle}>
        <button style={buttonStyle} onClick={() => this.changeColor('red')}>Red</button>
        <button style={buttonStyle} onClick={() => this.changeColor('green')}>Green</button>
        <button style={buttonStyle} onClick={() => this.changeColor('blue')}>Blue</button>
        <button style={buttonStyle} onClick={() => this.changeColor('yellow')}>Yellow</button>
      <button style={buttonStyle} onClick={() => this.changeColor('orange')}>Orange</button>
      <button style={buttonStyle} onClick={() => this.changeColor('purple')}>Purple</button>
      <button style={buttonStyle} onClick={() => this.changeColor('pink')}>Pink</button>
      <button style={buttonStyle} onClick={() => this.changeColor('brown')}>Brown</button>
      
      </div>
    );
  }

}

export default ColorButton;
