export function addTodo(text){
  return {
    type: 'ADD_TODO',
    text: text
  }
}

export function removeTodo(id){
  return {
    type: 'REMOVE_TODO',
    id: id
  }
}
export function completeTodo(id){
  return {
    type: 'COMPLETE_TODO',
    id: id
  }
}
