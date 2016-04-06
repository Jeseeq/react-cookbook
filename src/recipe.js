import React from 'react';
import {ListGroupItem, ListGroup} from 'react-bootstrap';
import EditModal from './editModal'


var Recipe = React.createClass({
  getInitialState: function () {
    return {
      editModal: false,
    };
  },
  render: function (){
    let deleteRecipe = () => {
       this.props.onDelete(this.props.recipe)
    }
    let handleEditModal = () => {
      this.setState({
        editModal : true
      });
    }
    let handleSave = (newItem, oldItem) => {
      newItem.ingredients = newItem.ingredients.split(',');
      this.props.onSave(newItem, oldItem);
      cmHide();
    }
    let cmHide = () => {
      this.setState({editModal: false});
    }

    var ingredientNodes = this.props.recipe.ingredients.map(function (ingredient) {
      return(
        <ListGroupItem>
          {ingredient}
        </ListGroupItem>
      );
    });
    var ingredients = this.props.recipe.ingredients.join(',');
    return (
      <div>
        <h2 className='text-center'>
          {this.props.recipe.title}
        </h2>
        <ListGroup>
          {ingredientNodes}
        </ListGroup>

        <div className='pull-right'>
          <button onClick={handleEditModal} className='btn btn-sm btn-primary'>Edit</button>
          <button onClick={deleteRecipe} id={this.props.recipe.title} className='btn btn-sm btn-danger'>Delete</button>
        </div>


        <EditModal save = {handleSave} title={this.props.recipe.title} ingredients = {ingredients} hide={cmHide} show={this.state.editModal} recipe = {this.props.recipe}></EditModal>
      </div>
    );
  }
});
export default Recipe;
