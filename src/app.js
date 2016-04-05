import CreateModal from './createModal';
import RecipeList from './RecipeList';
import {Button} from 'react-bootstrap';

import React from 'react';
import ReactDOM from 'react-dom';



var App = React.createClass({
  getInitialState(){
    return {
      modalShow: false,
      data : (typeof localStorage['recipeBook'] != 'undefined') ? JSON.parse(localStorage['recipeBook']) : [
        {title: 'Pumpkin Pie', ingredients: ['Pumpkin Puree', 'Sweetened Condensed Milk', 'Eggs', 'Pumpkin Pie Spice', 'Pie Crust']},
        {title: 'Spaghetti', ingredients: ['Noodles', 'Tomato Sauce', '(Optional) Meatballs']},
        {title: 'Onion Pie', ingredients: ['Onion', 'Pie Crust', 'Sounds Yummy right?']}
      ]
    };
  },
  render: function () {
    let cmHide = () => this.setState({modalShow: false})
    return (
      <div className='container'>
        <div className='well'>
          <RecipeList data = {this.state.data}/>
        </div>
        <button className='btn btn-lg btn-primary' onClick={()=>this.setState({modalShow: true})}>Create</button>
        <CreateModal data={this.state.data} show={this.state.modalShow} onHide={cmHide}/>
      </div>
    );
  }
});
ReactDOM.render(
  <App />,
  document.getElementById('container')
);
