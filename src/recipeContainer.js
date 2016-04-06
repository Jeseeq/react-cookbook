import React from 'react';
import CreateModal from './createModal';
import RecipeList from './recipeList';

var RecipeContainer = React.createClass({
  WriteLocal: function () {
    localStorage.setItem('recipeBook', JSON.stringify(this.state.data));
  },
  getInitialState: function () {
    return {
      modalShow: false,
      data: this.props.data
    };
  },

  onSave: function (newItem, i) {
    let index = this.state.data.indexOf(i);
    let data = this.state.data;
    data[index] = newItem;
    this.setState({data: data });
    this.WriteLocal();
  },
  //Delete item handler
  onDelete: function (item) {
    let data = this.state.data.filter(function (elem) {
      return elem !== item;
    });
    this.setState({data: data});
    this.WriteLocal();

},
  onAdd: function (item) {
    this.state.data.push(item);
    this.WriteLocal();

  },

  render: function (){
    let cmHide = () => this.setState({modalShow: false})
    return(<div>
      <div className="well">
          <RecipeList onSave={this.onSave} onDelete={this.onDelete}  data = {this.state.data}/>
          <CreateModal onAdd={this.onAdd} show={this.state.modalShow} onHide={cmHide}/>
      </div>
      <button className='btn btn-lg btn-primary' onClick={()=>this.setState({modalShow: true})}>Create</button>
    </div>
  );
  }
});
export default RecipeContainer;
