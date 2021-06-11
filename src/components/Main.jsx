import React from "react";
import {Container, Row, Col,Form, FormGroup, Nav, NavItem, NavLink,Button} from "reactstrap"
import axios from 'axios';
import Sign_in from "../components/SignIn"

const api = axios.create({baseURL: `http://localhost:3000/users`});


class Main extends React.Component {
  constructor(props){
      super(props)
      this.state = {
          firstName: '',
          lastName: '',
          balance: '',
      };
  }

  componentDidMount() {
    this.getProducts();
  }

  getProducts = () => {
    api.get('/').then(res => {
      const productList = res.data;
      this.setState({ productList });
      var input_email = sessionStorage.getItem("email")
      for(var i = 0; i < this.state.productList.length; i++){
        if(this.state.productList[i]["email"] == input_email){
          this.setState({ firstName: this.state.productList[i]["firstName"] })
          this.setState({ lastName: this.state.productList[i]["lastName"]})
          this.setState({ balance: this.state.productList[i]["balance"]})
        }
      }
   })
 }

 clearSession(){
   sessionStorage.clear()
 }

  handleSubmit = (event) => {
    event.preventDefault()
  }

  handleInputChange = e => {
      this.setState({[e.target.name]: e.target.value})
  }
  render(){
    const{firstName, lastName, email, password, phone} = this.state
    return(
      <div style={{backgroundColor: "#dfdfdf"}}>
        <Container fluid>
          <Row>
            <div className="sidebar" style={{backgroundColor: "#d3d3d3"}}>
              <Col className="" lg="7" md="12">
                <div className="">
                  <label class="label_side" for="user_name">First name</label>
                  <h5>{this.state.firstName}</h5>
                </div>
              </Col>
              <Col className="" lg="7" md="12">
                <div className="">
                <label class="label_side" for="last_name">Last name</label>
                <h5>{this.state.lastName}</h5>
                </div>
              </Col>
              <Col className="" lg="7" md="12">
              <div className="">
                <label class="label_side" for="price">Balance</label>
                <h5>{this.state.balance}</h5>
              </div>
              </Col>
            </div>
            <div className="middle">
            <Nav className="navs">
              <NavItem className="nav">
                <NavLink href="/goksel">
                  <img className="nav_img" src="./Images/goksel_coin.png" width="60" height="60" alt="göksel_coin"/>
                  Goksel Coin
                </NavLink>
                <NavLink href="/berk">
                  <img className="nav_img" src="./Images/berk_coin.png" width="50" height="50"alt="berk_coin"/>
                  Berk Coin
                </NavLink>
                <NavLink href="/nurettin">
                  <img className="nav_img" src="./Images/nurettin_coin.png" alt="nurettin_coin" width="50" height="50"/>
                  Nurettin Coin
                </NavLink>
                <NavLink href="/deniz">
                  <img className="nav_img" src="./Images/deniz_coin.png"  alt="deniz_coin" width="50" height="50"/>
                  Deniz Coin
                </NavLink>
              </NavItem>
            </Nav>
            <Button className="sign_out" href="/" onClick={this.clearSession}>Sign Out</Button>
            </div>
          </Row>
        </Container>
      </div>
    );
    return this.state
  }
}
export default Main;
