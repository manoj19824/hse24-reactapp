import axios from 'axios';

const CATEGORY_API_BASE_URL = 'http://localhost:8080/categories';

class ApiService {

    fetchCategories() {
        return axios.get(CATEGORY_API_BASE_URL);
    }

    fetchCategoryById(Id) {
        return axios.get(CATEGORY_API_BASE_URL + '/' + Id);
    }

    deleteCategory(Id) {
        return axios.delete(CATEGORY_API_BASE_URL + '/' + Id);
    }

    addCategory(category) {
        return axios.post(""+CATEGORY_API_BASE_URL, category);
    }

    editCategory(category) {
        return axios.put(CATEGORY_API_BASE_URL + '/' + category.id, category);
    }

}

export default new ApiService();