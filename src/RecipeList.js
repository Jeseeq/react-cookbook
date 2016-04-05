import React from 'react';
import {Accordion, Panel, } from 'react-bootstrap';
import Recipe from './Recipe';

var RecipeList = React.createClass({

// deleteRecipe: function (e) {
//    var itemForDelete = this.refs.delete.id;
//    //var elem = this.props.data.indexOf(itemForDelete);
//
//   //console.log(itemForDelete);
//   //console.log(elem);
//
// },
getInitialState: function () {
  return {
    recipes: []
  };
},


  render: function (){

    var RecipeNodes = this.props.data.map(function (recipe, i) {
        let deleteRecipe = () => {
           this.props.onDelete(recipe)
        }
        return(
          <Panel
            header={recipe.title}
            bsStyle='info'
            key = {i}
            eventKey={i}>
            <Recipe recipe = {recipe}/>
              <div className='pull-right'>
                <button className='btn btn-sm btn-primary'>Edit</button>
                <button ref='delete' onClick={deleteRecipe} id={recipe.title} className='btn btn-sm btn-danger'>Delete</button>
              </div>
            </Panel>
        );
      }.bind(this));
    return (
      <Accordion>
        {RecipeNodes}
      </Accordion>
    );
  }
});
export default RecipeList;
