import React from 'react';
import {Modal, Button} from 'react-bootstrap';

const EditModal = React.createClass({
  //Todo: refactor
   onSave: function(){
     this.props.save(this.state, this.props.recipe);
  },
  onHide: function () {
    this.setState({
      title: this.props.recipe.title,
      ingredients: this.props.recipe.ingredients.join(','),
    });
    this.props.hide();

  },
  getInitialState: function () {
    var title =  this.props.recipe.title;
    var ingredients = this.props.recipe.ingredients.join(',');
    return {
      title: title,
      ingredients: ingredients,
    };
  },
  render: function(){

    return (
      <div>
        <Modal {...this.props} onHide = {this.onHide}>
         <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-lg">Edit recipe</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <div className="form-group">
                <label for="recipeName">Recipe Name</label>
                <input onChange={(e)=> this.setState({title: e.target.value})} value={this.state.title} ref = 'cTitle' type="text" className="form-control" id="recipeName">
                </input>
                <label for="Ingredients">Ingredients</label>
                <input onChange={(e)=> this.setState({ingredients: e.target.value})} value={this.state.ingredients} ref="cIngredients" type="text" className="form-control" id="Ingredients">

                </input>
              </div>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button bsStyle="primary" onClick={this.onSave}>Save</Button>
            <Button bsStyle="danger" onClick={this.onHide}>Close</Button>
          </Modal.Footer>
         </Modal>
     </div>

    );
  }
});

export default EditModal;
