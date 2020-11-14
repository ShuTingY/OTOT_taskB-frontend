import React, { Component } from 'react';
import{ BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import Header from './components/header';
import About from './components/about';
import Todos from './components/Todo';
import AddTodo from './components/AddTodo';
import axios from 'axios'
class App extends Component {
  state = {
    todos: []
  };
  componentDidMount() {
    axios.get('/resfulApi')
    .then(res => {
      console.log(res.data);
    })
    axios.get('/resfulApi/todo')
    .then(res => {
      console.log(res.data.data);
      this.setState({todos:res.data.data})
    })
  }

  // Toggle Complete
  markComplete= (id) => {
    this.setState({ todos:this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.isCompleted = !todo.isCompleted;
      }
      axios.put(`/resfulApi/todo/${id}`, {
        isCompleted:todo.isCompleted 
      })
      return todo;
    }) })
  }
  delTodo = (id) => {

    this.setState({ todos: [...this.state.todos.filter(todo=> todo.id !== id)]})
    axios.delete(`/resfulApi/todo/${id}`)
    .then(res => this.setState({ todos: [...this.state.todos.filter(todo=> todo.id !== id)]}))
  }

  addTodo = (title, description) => {
    if (!description ) {
      axios.post('/resfulApi/todo', {
        title
      })
      .then(res => this.setState({ todos: [...this.state.todos, res.data.data]}))
    } else {
      axios.post('/resfulApi/todo', {
        title,
        description
      })
      .then(res => this.setState({ todos: [...this.state.todos, res.data.data]}))

    }
    

  }

  render() {
  return (
    <Router>
    <div className="App">
    <div className = 'container'>
    <Header/>
    <Route exact path="/" render={props => (
      <React.Fragment>
        <Container 
         style={{ padding: '2em 5em', width:'50%' }}>

          <h1>Add todo</h1>
          <AddTodo addTodo = {this.addTodo} />
          <h1>Todo list:</h1>
          <Todos todos={this.state.todos}  
          markComplete = {this.markComplete}
            delTodo = {this.delTodo}
          />
        </Container>
      </React.Fragment>
    )} />

    <Route path = '/about' component={About}/>
    
    </div>
    </div>
    </Router>
  );
  }
}

export default App;