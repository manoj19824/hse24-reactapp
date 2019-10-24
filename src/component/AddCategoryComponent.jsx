import React, { Component } from 'react'
import ApiService from "../service/ApiService";

class AddCategoryComponent extends Component{

    constructor(props){
        super(props);
        this.state ={
            name: '',
            message: null
        }
        this.saveCategory = this.saveCategory.bind(this);
    }

    saveCategory = (e) => {
        e.preventDefault();
        let category = {name: this.state.name};
        ApiService.addCategory(category)
            .then(res => {
                this.setState({message : 'Category added successfully.'});
                this.props.history.push('/categories');
            });
    }

    onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });

    render() {
        return(
            <div>
                <h2 className="text-center">Add Category</h2>
                <form>
                <div className="form-group">
                    <label>Category Name:</label>
                    <input type="text" placeholder="categoryname" name="categoryname" className="form-control" value={this.state.categoryname} onChange={this.onChange}/>
                </div>
                <button className="btn btn-success" onClick={this.saveCategory}>Save</button>
            </form>
    </div>
        );
    }
}

export default AddCategoryComponent;