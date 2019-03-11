import React, { Component } from 'react';
import './App.css';

import { TodoCard, HeaderCard } from './Components/Card';

const todoData = {
  notStarted: {
    header: 'Not Started',
    color: 'var(--card-blue)',
    todos: [{ text: 'Do laundry' }, { text: 'Take out the trash' }]
  },
  inProgress: {
    header: 'In Progress',
    color: 'var(--card-green)',
    todos: [{ text: 'Wash Car' }, { text: 'Clean House' }]
  },
  done: {
    header: 'Done',
    color: 'var(--card-red)',
    todos: [{ text: 'Procrastinate' }, { text: 'Write Poetry' }]
  },
  prioritized: {
    header: 'Prioritized',
    color: 'var(--card-yellow)',
    todos: [{ text: 'Sunbathing' }, { text: 'Shopping' }]
  }
};

const AddTodo = props => {
  const { 'data-ref': ref, onClick } = props;
  return (
    <div className="add-container">
      <button type="button" onClick={() => onClick(ref)}>
        + Add Todo
      </button>
    </div>
  );
};

class App extends Component {
  constructor(props) {
    super(props);
    const stored = localStorage.getItem('todo');
    if (stored) {
      this.state = JSON.parse(stored);
    } else {
      this.state = todoData;
    }
  }

  componentDidUpdate(props, state) {
    localStorage.setItem('todo', JSON.stringify(state));
  }

  addTodo = ref => {
    const newTodo = window.prompt(`Enter a string for category ${ref}`);

    if (newTodo) {
      const added = {
        text: newTodo
      };

      const prevState = { ...this.state };
      prevState[ref].todos.push(added);

      this.setState(prevState);
    }
  };

  render() {
    return (
      <div className="App">
        <main className="main">
          {Object.keys(this.state).map(key => {
            const { header, color, todos } = this.state[key];

            const TodoList = todos.map(todo => {
              const { text } = todo;
              return <TodoCard key={text} text={text} />;
            });

            return (
              <div className="column" key={key}>
                <HeaderCard text={header} color={color} />
                <div className="body">
                  <div className="todo-list">{TodoList}</div>
                </div>
                <AddTodo data-ref={key} onClick={this.addTodo} />
              </div>
            );
          })}
        </main>
      </div>
    );
  }
}

export default App;
