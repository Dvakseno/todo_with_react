import React, { Component } from 'react';

import { connect } from 'react-redux';
import { todo_add, value_change } from './components/actions';

import List from './components/list';

class App extends Component {
  changeHandler = value => {
    this.props.value_change(value);
  };
  addHandler = todo => {
    const { todos, todo_add, value_change } = this.props;
    const id = todos.length;
    todo_add(id, todo);
    value_change('');
  };
  render() {
    const { value } = this.props;
    return (
      <>
        <form onSubmit={e => e.preventDefault()}>
          <input
            type="text"
            placeholder="Enter a task..."
            value={value}
            onChange={event => this.changeHandler(event.target.value)}
          />
          <button onClick={() => this.addHandler(value)}>Add task</button>
        </form>
        <List />
      </>
    );
  }
}

function mapStateToProps(state) {
  return { value: state.todoState.value, todos: state.todoState.todos };
}
function mapDispatchToProps(dispatch) {
  return {
    todo_add: (id, name) => dispatch(todo_add(id, name)),
    value_change: value => dispatch(value_change(value)),
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
