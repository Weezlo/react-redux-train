import React, { Component } from 'react';
import DeleteButton from './DeleteButton';

class TextDisplay extends Component{
  render(){
    return <div>
      {this.props.text}<br/>
    <DeleteButton deleteLetter={this.props.deleteLetter}/>
    </div>
  }
}

export default TextDisplay
