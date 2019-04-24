import React from 'react';

const List = ({ todos, completeTask }) => (
  <ul>
    {todos.map(item => (
      <li key={item.id}>
        {item.todo}
        <button onClick={() => completeTask(item.id)}>
          {!item.complete ? 'Complete' : 'Incomplete'}
        </button>
      </li>
    ))}
  </ul>
);

export default List;
