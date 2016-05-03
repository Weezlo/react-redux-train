import React, { PropTypes } from 'react'
import TodoItem from './TodoItem'

class TodoList extends React.Component {
  render () {
    let todos = this.props.todos.map(todo =>
      <TodoItem key={todo.id} todo={todo}
        removeTodo={this.props.removeTodo}
        completeTodo={this.props.completeTodo}
        />
    );
    return (
      <ul>{todos}</ul>
    );
  }
}

export default TodoList;
