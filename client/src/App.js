import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'
import { fetchTodos } from './actions'

class App extends Component {

  componentDidMount() {
    this.props.dispatch(fetchTodos())
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        {this.props.loading ?
          <p>Loading....</p>
          :
          <ul>
            {this.props.todos.map((todo, index) => (
              <li key={index}>{todo.text}</li>
            ))}
          </ul>
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  todos: state.todos.data,
  loading: state.todos.loading
})

export default connect(mapStateToProps)(App);
