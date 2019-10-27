import React from 'react';
import ReactDOM from 'react-dom';
import SuperTreeview from 'react-super-treeview';
import ApiService from "../service/ApiService";

class CategoryProductTreeviewComponent extends React.Component {

 constructor(props) {
  super(props);
  this.state = {
    categories: [],
    message:null
  }
  console.log('inside constructor');
}
  componentWillMount() {
       console.log('inside fetch');
       this.fetchCategories();
    }

fetchCategories() {
        ApiService.fetchCategories()
            .then((res) => {
            console.log(res.data);
              this.setState({categories: res.data});
            });
}
  render() {
    return (
            // RENDER THE COMPONENT
            <SuperTreeview
                data={ this.state.categories }
                onUpdateCb={(updatedData) => {
                    this.setState({data: updatedData})
                }}
            />
        );
  }
}
export default CategoryProductTreeviewComponent;