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
            email: '',
            password: '',
        };
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        // const {email, password} = this.state;
        // const product = { email, password};
        // this.props.onSubmit(product);
        this.getProducts()

    }

   //  componentDidMount(){
   //   this.getProducts();
   // }

    getProducts = () => {
      api.get('/').then(res => {
        const productList = res.data;
        this.setState({ productList });
        console.log(this.state.productList)
     })
   }

    // handleSubmit = (event) => {
    //   event.preventDefault()
    // }

    handleInputChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }
    render(){
      const{email, password} = this.state
      return(
        <Container className="login">
         <Row>
          <Form>
            <Col className="lab" lg="7" md="12">
              <div className="form">
                <label for="email">E-mail</label>
                <input className="input_text" onChange={e => this.setState({ email: e.target.value })} type="text" maxlength="25"/>
              </div>
            </Col>
            <Col className="lab" lg="7" md="12">
              <div className="form">
                <label for="password">Password</label>
                <input className="input_text" onChange={e => this.setState({ password: e.target.value })}type="password" maxlength="25" required/>
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
      );
      return this.state
    }

  }
  export default SingIn;


    // <div>
    //   <label for="email">E-mail</label>
    //   <input className="input_text" type="text" id="email" name="" value="" maxlength="25"/>
    //   <label for="password">Password</label>
    //   <input className="input_text" type="password" id="password" name="" value="" maxlength="25" required/>
    //   <button type="button" name="button">Sign In</button>
    //   <button type="button" name="button">Register</button>
    // </div>


    // <section id="login">
    // <div class="row">
    //   <div class="lab col-lg-5 col-md-12">
    //     <label for="email">E-mail</label>
    //   </div>
    //   <div class="inpt col-lg-7 col-md-12">
    //     <input class="input_text" type="text" id="email" name="" value="" maxlength="25" required>
    //   </div>
    // </div>
    // <div class="row">
    //   <div class="lab col-lg-5">
    //     <label for="password">Password</label>
    //   </div>
    //   <div class="inpt col-lg-7">
    //     <input class="input_text" type="password" id="password" name="" value="" maxlength="25" required>
    //   </div>
    // </div>
    // <div class="but_div row">
    //   <div class="but1 col-lg-6">
    //     <button type="button" name="button">Sign In</button>
    //   </div>
    //   <div class="but2 col-lg-6">
    //     <button type="button" name="button">Register</button>
    //   </div>
    // </div>
    // </section>
