import React, { Component } from 'react';

import { connect } from 'react-redux';

import { todo_toggle } from './actions';

class List extends Component {
  render() {
    const { todos, todo_toggle } = this.props;
    return (
      <ul>
        {todos.map(({ id, name, completed }) => (
          <li key={id}>
            {name}
            <button onClick={() => todo_toggle(id)}>
              {!completed ? 'Complete' : 'Incomplete'}
            </button>
          </li>
        ))}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return {
    todos: state.todoState.todos,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    todo_toggle: id => dispatch(todo_toggle(id)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);
