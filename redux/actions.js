let actions = {
  addTodo(text){
    return {
      type: 'ADD_TODO',
      text: text
    }
  },
  removeTodo(id){
    return {
      type: 'REMOVE_TODO',
      id: id
    }
  },
  completeTodo(id){
    return {
      type: 'COMPLETE_TODO',
      id: id
    }
  }
}

export default actions
