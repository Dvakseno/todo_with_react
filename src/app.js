import React, { Component } from 'react';

import List from './components/list';

export default class App extends Component {
  state = {
    todos: [
      { todo: 'Make a todo-app', id: 1, complete: false },
      { todo: 'Learn Middlewares', id: 2, complete: false }
    ],
    value: ''
  };
  changeHandler = event => {
    this.setState({ value: event.target.value });
  };
  sendHandler = inputValue => {
    const value = { todo: inputValue, id: this.state.todos.length + 1, complete: false };
    this.setState(prevState => ({ todos: [...prevState.todos, value], value: '' }));
  };
  completeTask = id => {
    this.setState(prevState => ({
      todos: prevState.todos.map(item => {
        if (item.id === id) {
          return { ...item, complete: !item.complete };
        } else {
          return { ...item };
        }
      })
    }));
  };
  render() {
    return (
      <>
        <form onSubmit={e => e.preventDefault()}>
          <input
            type="text"
            placeholder="Enter a task..."
            onChange={this.changeHandler}
            value={this.state.value}
          />
          <button onClick={() => this.sendHandler(this.state.value)}>Add task</button>
        </form>
        <List todos={this.state.todos} completeTask={this.completeTask} />
      </>
    );
  }
}
