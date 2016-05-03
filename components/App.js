import React, {Component} from 'react';
import TodoList from './TodoList';
import TodoInput from './TodoInput';
import { connect } from 'react-redux';

class App extends Component{
  render(){
    return(
      <div>
        <h1>Todo List</h1>
        <TodoInput dispatch={this.props.dispatch} ref="input" add={this.addItem}/>
        <TodoList dispatch={this.props.dispatch} todos={this.props.todos}/>
      </div>
    );
  }
}

function mapStateToProps(state){
  return state;
}

export default connect(mapStateToProps)(App);
