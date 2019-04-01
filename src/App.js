import React, { Component } from 'react';
import './App.css';

import defaultTodoData from './Config';
import DndContainer from './Components/Dnd';

class App extends Component {
  constructor(props) {
    super(props);
    const stored = localStorage.getItem('todoItems');
    if (stored) {
      this.state = JSON.parse(stored);
    } else {
      this.state = defaultTodoData;
    }
  }

  componentDidUpdate(props, state) {
    localStorage.setItem('todoItems', JSON.stringify(state));
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
          <DndContainer {...this.state} addTodo={this.addTodo} />
        </main>
      </div>
    );
  }
}

export default App;
