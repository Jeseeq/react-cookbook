import React from 'react'
import {Modal, Button} from 'react-bootstrap'

const CreateModal = React.createClass({
   onAdd: function(){
     console.log('add');
     this.props.onHide;
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
                <input type="text" className="form-control" id="recipeName" placeholder="Enter recipe name"></input>
                <label for="Ingredients">Ingredients</label>
                <input type="text" className="form-control" id="Ingredients" placeholder="Enter ingredients separated by ,"></input>
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
