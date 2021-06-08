import React from "react";
import ReactDOM from "react-dom";
import Registeration from "../../components/Registeration"
import axios from 'axios';

const api = axios.create({baseURL: `http://localhost:3000/users`});


  class Register extends React.Component {
    constructor(props) {
     super(props);
     this.state = {
       productList: []
     }
     this.onDelete = this.onDelete.bind(this);
     this.onAdd = this.onAdd.bind(this);
    }
    componentDidMount(){
     this.getProducts();
   }

    getProducts = () => {
      api.get('/').then(res => {
        const productList = res.data;
        this.setState({ productList });
     })
   }
   onDelete(id, index) {
      api.delete(`/${id}`)
        .then(res => this.getProducts())
    }

    onAdd(product) {
      api.post(`/`, product)
        .then(res => this.getProducts())
    }
    render() {
     return (
       <div className="App">
        <Registeration onSubmit={this.onAdd}/>
       </div>
     );
   }

  }

export default Register;
