import React from 'react'
import {Modal, Button} from 'react-bootstrap'

const CreateModal = React.createClass({

   onAdd: function(){
     var title = this.refs.cTitle.value;
     var ingredients = this.refs.cIngredients.value.split(',');
     this.props.data.push({
       title: title,
       ingredients: ingredients
     });
     this.props.onHide();
  },
  getInitialState: function () {
    return {modalShow: false};
  },
  render: function(){

    return (
      <div>
        <Modal {...this.props}>
         <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-lg">Add a recipe</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <div className="form-group">
                <label for="recipeName">Recipe Name</label>
                <input ref = 'cTitle' type="text" className="form-control" id="recipeName" placeholder="Enter recipe name"></input>
                <label for="Ingredients">Ingredients</label>
                <input ref="cIngredients" type="text" className="form-control" id="Ingredients" placeholder="Enter ingredients separated by ,"></input>
              </div>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button bsStyle="primary" onClick={this.onAdd}>Add</Button>
            <Button bsStyle="danger" onClick={this.props.onHide}>Close</Button>
          </Modal.Footer>
         </Modal>
     </div>

    );
  }
});

export default CreateModal;
