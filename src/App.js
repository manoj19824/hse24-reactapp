import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ListCategoryComponent from "./component/ListCategoryComponent";
import AddCategoryComponent from "./component/AddCategoryComponent";
import EditCategoryComponent from "./component/EditCategoryComponent";
import CategoryProductTreeviewComponent from "./component/CategoryProductTreeviewComponent";
function App() {
  return (
    <div className="container">
    <Router>
        <div className="col-md-6">
            <h1 className="text-center" style={style}>React HSE24 Application</h1>
            <Switch>
                <Route path="/" exact component={ListCategoryComponent} />
                <Route path="/categories" component={ListCategoryComponent} />
                <Route path="/add-category" component={AddCategoryComponent} />
                <Route path="/edit-category" component={EditCategoryComponent} />
                <Route path="/tree-view" component={CategoryProductTreeviewComponent} />
            </Switch>
        </div>
    </Router>
</div>
);
}
const style = {
  color: 'red',
  margin: '10px'
}
export default App;
