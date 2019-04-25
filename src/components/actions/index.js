import { TODO_ADD, TODO_TOGGLE, VALUE_CHANGE } from '../constants';

const todo_add = (id, name) => ({
  type: TODO_ADD,
  todo: { id, name }
});
const todo_toggle = id => ({
  type: TODO_TOGGLE,
  todo: { id }
});
const value_change = value => ({
  type: VALUE_CHANGE,
  value
});

export { todo_add, todo_toggle, value_change };
