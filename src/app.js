
import RecipeContainer from './recipeContainer';

import React from 'react';
import ReactDOM from 'react-dom';

var  data = (typeof localStorage['recipeBook'] != 'undefined') ? JSON.parse(localStorage['recipeBook']) : [
  {title: 'Pumpkin Pie', ingredients: ['Pumpkin Puree', 'Sweetened Condensed Milk', 'Eggs', 'Pumpkin Pie Spice', 'Pie Crust']},
  {title: 'Spaghetti', ingredients: ['Noodles', 'Tomato Sauce', '(Optional) Meatballs']},
  {title: 'Onion Pie', ingredients: ['Onion', 'Pie Crust', 'Sounds Yummy right?']}
]

var App = React.createClass({
  render: function () {
    return (
      <div className='container'>
        <RecipeContainer data = {data}/>
      </div>
    );
  }
});
ReactDOM.render(
  <App />,
  document.getElementById('container')
);
