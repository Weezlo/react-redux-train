import React, { PropTypes } from 'react'

class TodoItem extends React.Component {
  render () {
    let todo = this.props.todo;
    return (
      <li style={{fontWeight: todo.completed?'bold':'normal'}}>
          <div>{todo.id} - {todo.text}</div>
          <button onClick={() => this.props.removeTodo(todo.id)}>
            del
          </button>
          <button onClick={() => this.props.completeTodo(todo.id)}>
            complete
          </button>
      </li>
    );
  }
}

export default TodoItem;
