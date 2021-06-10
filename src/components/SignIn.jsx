import React from "react";
import {Link, Container, Row, Col, Form, FormGroup, Button} from "reactstrap"
import axios from 'axios';
const api = axios.create({baseURL: `http://localhost:3000/users`});

class SingIn extends React.Component {
    constructor(props){
        super(props)
        this.state = {
          productList: []
        }
        this.state = {
          validate: false,
        }
        this.state = {
            email: '',
            password: '',
        };
    }

    getProducts = () => {
      api.get('/').then(res => {
        const productList = res.data;
        this.setState({ productList });
        var input_email = document.getElementById("email").value
        var input_password = document.getElementById("password").value
        for(var i = 0; i < this.state.productList.length; i++){
          if(this.state.productList[i]["email"] == input_email && this.state.productList[i]["password"] == input_password){
            sessionStorage.setItem("email",input_email)
            window.location.href = "/mainpage"
          }
        }
     })
   }

    handleInputChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }
    render(){
      const{email, password} = this.state
      return(
        <div style={{backgroundColor: "#d5d5d5"}}>
          <h2><i>Welcome to Coinzzz</i></h2>
          <Container className="login">
           <Row>
            <Form className="form_log">
              <Col className="lab" lg="7" md="12">
                <div className="form">
                  <label for="email" >E-mail</label>
                  <input className="input_text" id="email" onChange={e => this.setState({ email: e.target.value })} type="text" maxlength="25"/>
                </div>
              </Col>
              <Col className="lab" lg="7" md="12">
                <div className="form">
                  <label for="password">Password</label>
                  <input className="input_text" id="password" onChange={e => this.setState({ password: e.target.value })}type="password" maxlength="25" required/>
                </div>
              </Col>
              <Col className="but1" lg="7">
                <div className="form">
                <Button outline color="secondary"className="lala" onClick={this.getProducts}>Sing In</Button>
                <Button className="lala" href="/register">Register</Button>
                </div>
              </Col>
            </Form>
           </Row>
         </Container>
       </div>
      );
      return this.state
    }
  }
  export default SingIn;
