import React, { Component } from 'react';
import { Segment} from 'semantic-ui-react'
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends Component {
    render() {
        return (
        <Segment.Group style={{marginTop:"1em"}} >
          {this.props.todos.map((todo) => (
              <TodoItem key={todo.id} todo={todo} 
              markComplete={this.props.markComplete} 
                  delTodo = {this.props.delTodo}
              />
          ))}
        </Segment.Group>
        )
    }
}
Todos.propTypes = {
    todos: PropTypes.array.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
};

export default Todos;