import React, {Component} from 'react';
import TodoList from './TodoList';
import TodoInput from './TodoInput';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from '../redux/actions';

class App extends Component{
  render(){
    return(
      <div>
        <h1>Todo List</h1>
        <TodoInput
          addTodo={this.props.actions.addTodo}
          />
        <TodoList
          completeTodo={this.props.actions.completeTodo}
          removeTodo={this.props.actions.removeTodo}
          todos={this.props.todos}/>
      </div>
    );
  }
}

// permet de créer dans le composant React (App) les propriétés contenues dans le store Redux
// sous forme de propriétés (props) du composant
function mapStateToProps(state){
  return state;
}

// permet de créer dans le composant React (App) les actions en tant que propriétés (props) du composant
function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
