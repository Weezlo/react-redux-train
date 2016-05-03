function getId(state){
  return state.todos.reduce((maxId, todo) => {
    return Math.max(todo.id, maxId);
  }, -1) + 1;
}

export function reducer(state, action){
  switch (action.type) {
    case 'ADD_TODO':
      return Object.assign({}, state, {
        todos : [{
          text: action.text,
          completed: false,
          id: getId(state)
        }, ...state.todos]
      });
      break;
    case 'REMOVE_TODO':
      let newTodos = state.todos.filter(val => val.id !== action.id);
      return Object.assign({}, state, {
        todos : newTodos
      });
      break;
    case 'COMPLETE_TODO':
      let newTodosComplete =
        state.todos.map(val => Object.assign({}, val, {completed: val.id === action.id?!val.completed:val.completed}));
      return Object.assign({}, state, {
        todos : newTodosComplete
      });
      break;
    case 'CHANGE_ID':
      return Object.assign({}, state, {
        user: {
          username: state.user.username,
          id: action.id
        }
      });
      break;
    default:
      return state;
  }

}
