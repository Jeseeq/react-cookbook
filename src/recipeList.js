import React from 'react';
import {Accordion, Panel, } from 'react-bootstrap';
import Recipe from './recipe';

var RecipeList = React.createClass({
  render: function (){
    var RecipeNodes = this.props.data.map(function (recipe, i) {
        return(
          <Panel
            header={recipe.title}
            bsStyle='info'
            key = {i}
            eventKey={i}>
            <Recipe  onSave={this.props.onSave} onDelete={this.props.onDelete} recipe = {recipe}/>
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
