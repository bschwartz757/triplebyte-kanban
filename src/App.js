import React, { Component } from 'react';
import './App.css';

import { TodoCard, HeaderCard, AddTodo } from './Components/Card';
import defaultTodoData from './Config';

class App extends Component {
  constructor(props) {
    super(props);
    const stored = localStorage.getItem('todo');
    if (stored) {
      this.state = JSON.parse(stored);
    } else {
      this.state = defaultTodoData;
    }
  }

  componentDidUpdate(props, state) {
    localStorage.setItem('todo', JSON.stringify(state));
  }

  addTodo = ref => {
    const promptMessage = `Enter a new todo for category: ${ref
      .charAt(0)
      .toUpperCase() + ref.slice(1)}`;
    const newTodo = window.prompt(promptMessage);

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
        <main className="container">
          {Object.keys(this.state).map(key => {
            // eslint-disable-next-line react/destructuring-assignment
            const { header, todos } = this.state[key];

            return (
              <div className="column" key={key}>
                <HeaderCard text={header} />
                <div className="body">
                  <div className="todo-list">
                    {todos.map(({ text }) => (
                      <TodoCard key={text} text={text} />
                    ))}
                  </div>
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
