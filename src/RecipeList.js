import React from 'react';
import {Accordion, Panel, ListGroup} from 'react-bootstrap';
import Recipe from './Recipe';

var RecipeList = React.createClass({

  render: function (){
    var RecipeNodes = this.props.data.map(function (recipe, i) {
        return(
          <Panel
            header={recipe.title}
            bsStyle='info'
            key = {i}
            eventKey={i}>
            <ListGroup>
              <Recipe recipe = {recipe}/>
            </ListGroup>

            </Panel>
        );
      });
    return (
      <Accordion>
        {RecipeNodes}
      </Accordion>
    );
  }
});
export default RecipeList;
