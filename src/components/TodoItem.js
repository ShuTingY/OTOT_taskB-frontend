import React, { Component } from 'react';
import { Segment, Button, Item, Checkbox, Grid, Divider } from 'semantic-ui-react'
import PropTypes from 'prop-types';

//rec TAB
export class TodoItem extends Component {
    render() {
        const {id, title, description, isCompleted, createdAt} = this.props.todo;
        return (
            <Segment color={isCompleted? 'green' :'yellow'}>
                
                <Grid columns={3}>
                  <Grid.Row>
                    <Grid.Column width={1}>
                      <Checkbox
                      onChange={this.props.markComplete.bind(this, id)}
                      checked={isCompleted}
                      />
                    </Grid.Column>
                    <Grid.Column width={12}>
                    <Item.Group>
                    <Item>
                
                    <Item.Content>
                      <Item.Header 
                      style={{textDecoration: isCompleted ?'line-through' : 'none'}}
                      content={title}/>
                    
                      <Item.Meta style={{textDecoration: isCompleted ?'line-through' : 'none'}}
                      >Create at {new Date(createdAt).toLocaleDateString()}</Item.Meta>
                      {description 
                      ?
                        <React.Fragment>
                       <Divider/>
                      <Item.Description style={{textDecoration: isCompleted ?'line-through' : 'none'}}> 

                      <h5>Additional details: </h5> <pre> {description} </pre> </Item.Description>
                      </React.Fragment>
                      : null
                      } 
                      </Item.Content>
                      </Item>
                    </Item.Group>
                    </Grid.Column>
                    <Grid.Column width={3}>
                      <Button.Group icon attached='right'  floated='right'>
                       <Button inverted color='red' 
                                  icon='delete' 
                                  attached='right'
                                  onClick={this.props.delTodo.bind(this,id)}
                                  /> 
                      </Button.Group>
                    </Grid.Column>
                  </Grid.Row>
                  </Grid>

            </Segment>
        )
    }
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
};

export default TodoItem
