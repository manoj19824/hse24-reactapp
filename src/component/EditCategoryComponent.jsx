import React, { Component } from 'react'
import ApiService from "../service/ApiService";

class EditCategoryComponent extends Component {

    constructor(props){
        super(props);
        this.state ={
            id: '',
            name: '',
        }
        this.saveCategory = this.saveCategory.bind(this);
        this.loadCategory = this.loadCategory.bind(this);
    }

    componentDidMount() {
        this.loadCategory();
    }

    loadCategory() {
        ApiService.fetchCategoryById(window.localStorage.getItem("categoryId"))
            .then((res) => {
                let category = res.data;
                this.setState({
                id: category.categoryId,
                categoryname: category.name,
               });
            });
    }

    onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });

    saveCategory = (e) => {
        e.preventDefault();
        let category = {id: this.state.id, name: this.state.name};
        ApiService.editCategory(category)
            .then(res => {
                this.setState({message : 'Category added successfully.'});
                this.props.history.push('/categories');
            });
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Edit Category</h2>
                <form>

                    <div className="form-group">
                        <label>Category Name:</label>
                        <input type="text" placeholder="categoryname" name="categoryname" className="form-control" readonly="true" defaultValue={this.state.categoryname}/>
                    </div>
                    <button className="btn btn-success" onClick={this.saveCategory}>Save</button>
                </form>
            </div>
        );
    }
}

export default EditCategoryComponent;