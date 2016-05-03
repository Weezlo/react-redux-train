import React, { PropTypes } from 'react'
import { removeTodo } from '../redux/actions'
import { completeTodo } from '../redux/actions'

class TodoItem extends React.Component {
  render () {
    let todo = this.props.todo;
    return (
      <li style={{fontWeight: todo.completed?'bold':'normal'}}>
          <div>{todo.id} - {todo.text}</div>
          <button onClick={() => this.props.dispatch(removeTodo(todo.id))}>
            del
          </button>
          <button onClick={() => this.props.dispatch(completeTodo(todo.id))}>
            complete
          </button>
      </li>
    );
  }
}

export default TodoItem;
