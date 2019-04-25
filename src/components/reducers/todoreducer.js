import { TODO_ADD, TODO_TOGGLE, VALUE_CHANGE } from '../constants';

const INITIAL_STATE = {
  todos: [],
  value: '',
};

function todoReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case TODO_ADD: {
      const todo = { ...action.todo, completed: false };
      return { ...state, todos: [...state.todos, todo] };
    }
    case TODO_TOGGLE: {
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.todo.id ? { ...todo, completed: !todo.completed } : todo
        ),
      };
    }
    case VALUE_CHANGE: {
      return { ...state, value: action.value };
    }
    default:
      return state;
  }
}

export default todoReducer;
