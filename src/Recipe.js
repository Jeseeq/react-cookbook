import React from 'react';
import {Panel, ListGroupItem} from 'react-bootstrap';


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
      {ingredientNodes}
      <div className='pull-right'>
        <button  className='btn btn-sm btn-primary'>Edit</button>
        <button onClick={this.deleteRecipe} className='btn btn-sm btn-danger'>Delete</button>
      </div>
    </div>
    );
  }
});
export default Recipe;
