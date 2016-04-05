import CreateModal from './createModal';
import React from 'react';
import ReactDOM from 'react-dom';
import {Button} from 'react-bootstrap';

// var data = localStorage
var App = React.createClass({
  getInitialState(){
    return {modalShow: false};
  },
  render: function () {
    let cmHide = () => this.setState({modalShow: false})
    return (
      <div>
        <Button bsSize="large" bsStyle="primary" onClick={()=>this.setState({modalShow: true})}>Create</Button>
        <CreateModal show={this.state.modalShow} onHide={cmHide}/>
      </div>
    );
  }
});
ReactDOM.render(
  <App />,
  document.getElementById('container')
);
