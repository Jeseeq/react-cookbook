import React from 'react';
import {Accordion, Panel, ListGroup, ListGroupItem } from 'react-bootstrap';
import Recipe from './Recipe';

var RecipeList = React.createClass({

  render: function (){
    var RecipeNodes = this.props.data.map(function (recipe, i) {
      var ingredientNodes = recipe.ingredients.map(function (ingredient) {
        return(
          <ListGroupItem>
            {ingredient}
          </ListGroupItem>
        );
        return(
          <ListGroup>
            {ingredientNodes}
          </ListGroup>
        );
      });
      return (
        <Panel
          header={recipe.title}
          bsStyle='info'
          key = {i}
          eventKey={i}>

          <h2 className='text-center'>
            {recipe.title}
          </h2>

          {ingredientNodes}
          <div className='pull-right'>
            <button className='btn btn-sm btn-primary'>Edit</button>
            <button className='btn btn-sm btn-danger'>Delete</button>
          </div>
        </Panel>

      );
    });
    return (
      <Accordion>
        {RecipeNodes}
      </Accordion>
    );
  }
});
export default RecipeList;
