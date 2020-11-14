import React, { Component } from 'react'
import {Segment, Form, Input, TextArea } from 'semantic-ui-react'
import PropTypes from 'prop-types'
export class AddTodo extends Component {
    state = {
        title: '',
        description: ''
    }
    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title, this.state.description);
        this.setState({title: '', description: ''});
    }

    onChange = (e) => this.setState(
        {[e.target.name]: e.target.value}
    );

   
    render() {
      const {title, description} = this.state;
        return (
          <Segment>
            <Form onSubmit={this.onSubmit}>
              <Form.Field required
                label="Todo title"
                id='todo-title'
                control={Input}
                name='title'
                value={title}
                placeholder='Add new todo...'
                onChange={this.onChange}
                />
                <Form.Field
                  id='from-textarea-control-description'
                  control={TextArea}
                  name='description'
                  value={description}
                  placeholder='Additional details...(optional)'
                  onChange={this.onChange}
                />
                <Form.Button icon='add' inverted color='green' disabled={!title}/>
            </Form>
          </Segment>
        )
    }
}

AddTodo.propTypes = {
    addTodo: PropTypes.func.isRequired
};

export default AddTodo
