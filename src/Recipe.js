import React from 'react';
import {Panel, ListGroupItem, ListGroup} from 'react-bootstrap';


var Recipe = React.createClass({
  render: function (){
    var ingredientNodes = this.props.recipe.ingredients.map(function (ingredient) {
      return(
        <ListGroupItem>
          {ingredient}
        </ListGroupItem>
      );
    });
    return (
      <div>

      <h2 className='text-center'>
        {this.props.recipe.title}
      </h2>
      <ListGroup>
      {ingredientNodes}
      </ListGroup>

    </div>
    );
  }
});
export default Recipe;
