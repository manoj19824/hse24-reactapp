import React, { Component } from 'react'
import ApiService from "../service/ApiService";

class ListCategoryComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            categories: [],
            message: null
        }
        this.deleteCategory = this.deleteCategory.bind(this);
        this.editCategory = this.editCategory.bind(this);
        this.addCategory = this.addCategory.bind(this);
        this.fetchCategories = this.fetchCategories.bind(this);
    }

    componentDidMount() {
       this.fetchCategories();
    }

    fetchCategories() {
        ApiService.fetchCategories()
            .then((res) => {
                            this.setState({categories: res.data});
            });
    }

    deleteCategory(Id) {
        ApiService.deleteCategory(Id)
           .then(res => {
               this.setState({message : 'Category deleted successfully.'});
               this.setState({categories: this.state.categories.filter(category => category.id !== Id)});
           });

    }

    editCategory(id) {
        window.localStorage.setItem("categoryId", id);
        this.props.history.push('/edit-category');
    }

    addCategory() {
        window.localStorage.removeItem("categoryId");
        this.props.history.push('/add-category');
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Category Details</h2>
                <button className="btn btn-danger" onClick={() => this.addCategory()}> Add Category</button>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Category Name ::</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.categories.map(
                        category =>
                                    <tr key={category.categoryId}>
                                        <td>{category.name}</td>
                                        <td>
                                            <button className="btn btn-success" onClick={() => this.deleteCategory(category.categoryId)}> Delete</button>
                                            <button className="btn btn-success" onClick={() => this.editCategory(category.categoryId)}> Edit</button>
                                        </td>
                                    </tr>
                            )
                        }
                    </tbody>
                </table>

            </div>
        );
    }

}

export default ListCategoryComponent;