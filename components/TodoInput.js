import React, {Component} from 'react';

class TodoInput extends Component{
  constructor(){
    super();
    this.state = {inputText:''};
    this.update = this.update.bind(this);
    this.validateText = this.validateText.bind(this);
  }
  update(){
    this.setState({inputText: this.refs.input.value});
  }

  validateText(e){
    e.preventDefault();
    if(!this.state.inputText) return;
    this.props.addTodo(this.state.inputText);
    this.setState({inputText:''});
  }

  render(){
    return(
      <div>
        <form onSubmit={this.validateText}>
          <input ref='input' type='text'
            onChange={this.update}
            value={this.state.inputText}
            placeholder='Insert Todo text here'/>
          <input type='submit' value='Ajouter'/>
        </form>
      </div>
    );
  }
}

export default TodoInput;
