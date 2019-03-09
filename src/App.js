import React, { Component } from 'react';
import './App.css';

import Card from './Components/Card';

const todoData = {
  notStarted: [
    {header: 'Do Laundry', text: 'make sure you do this'},
    {header: 'Do Dishes', text: 'You need these'}
  ],
  inProgress: [
    {header: 'Wash Car', text: 'make sure you do this'},
    {header: 'Clean House', text: 'You need these'}
  ],
  done: [
    {header: 'Procrastinate', text: 'make sure you do this'},
    {header: 'Write Poetry', text: 'You need these'}
  ],
  prioritized: [
    {header: 'Sunbathing', text: 'make sure you do this'},
    {header: 'Shopping', text: 'You need these'}
  ]
}

const AddTodo = (props) => {
  const {'data-ref': ref, onClick} = props
  return (
    <div className="add-container">
      <a href="#" onClick={() => onClick(ref)}>+ Add Todo</a>
    </div>
  )
}

class App extends Component {
  constructor(props) {
    super(props)

    const stored = localStorage.getItem('todo')

    if(stored) {
      this.state = stored
    } else {
      this.state = todoData
    }

  }

  componentDidUpdate(state, props) {
    console.log('state: ', state)

    localStorage.setItem('todo', JSON.stringify(state))
    console.log('data: ', localStorage.getItem('todo'))

  }

  componentWillUnmount() {

  }

  addTodo = (ref) => {

    const newTodo = window.prompt(`Enter a string for category ${ref}`)

    if (newTodo) {
      const added = {
        header: newTodo,
        text: newTodo,
      }
  
      const prevState = {...this.state}
  
      prevState[ref].push(added)
  
      this.setState(prevState)
    }

  }

  render() {

    console.log('state: ', this.state)

    return (
      <div className="App">
        <main className="main">
          <div className="column">
            <h1>Not Started</h1>
            <div className="body">
              <div className="todo-list">
                {

                  this.state.notStarted.map(el => {
                    return <Card {...el} />
                  })

                }
              </div>
            </div>
            <AddTodo data-ref="notStarted" onClick={this.addTodo} />
          </div>

          <div className="column">
            <h1>In-Progress</h1>
            <div className="body">
            <div className="todo-list">
            {

              this.state.inProgress.map(el => {
                return <Card {...el} />
              })

            }
          </div>
            </div>
            <AddTodo data-ref="inProgress" onClick={this.addTodo} />

          </div>

          <div className="column">
          <h1>Done</h1>
          <div className="body">
          <div className="todo-list">
          {

            this.state.done.map(el => {
              return <Card {...el} />
            })

          }
        </div>
          </div>
          <AddTodo data-ref="done" onClick={this.addTodo} />

        </div>

        <div className="column">
        <h1>Prioritized</h1>
        <div className="body">
        <div className="todo-list">
        {

          this.state.prioritized.map(el => {
            return <Card {...el} />
          })

        }
      </div>
        </div>
        <AddTodo data-ref="prioritized" onClick={this.addTodo} />

      </div>
 
        </main>
      </div>
    );
  }
}

export default App;
