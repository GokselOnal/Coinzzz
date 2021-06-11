import React from "react";
import {Container, Row, Col,Form,Button} from "reactstrap"

class Registeration extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            balance: '200',
            invalid: "false",
        };
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
      const { firstName, lastName, email, password, phone} = this.state;
      const product = { firstName, lastName, email, password, phone};
      if(this.state.firstName == "" || this.state.lastName == "" || this.state.email == "" || this.state.password == ""){
        window.alert("You have to fill all input fields")
      }else{
        this.props.onSubmit(product);
        window.alert("You registered succesfully")
        }
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
        <h2><i>Register</i></h2>
          <Container>
            <Row>
              <Form className="form_reg" onSubmit={this.handleSubmit} >
                <Col className="lab" lg="7" md="12">
                  <div className="form">
                    <label>First Name </label>
                    <input className="input_text" onChange={e => this.setState({ firstName: e.target.value })} type="text" maxlength="25" required/>
                  </div>
                </Col>
                <Col className="lab" lg="7" md="12">
                  <div className="form">
                    <label>Last Name </label>
                    <input className="input_text" onChange={e => this.setState({ lastName: e.target.value })} type="text" maxlength="25" required/>
                  </div>
                </Col>
                <Col className="lab" lg="7" md="12">
                <div className="form">
                  <label>E-mail </label>
                  <input className="input_text" id="email" onChange={e => this.setState({ email: e.target.value })} type="email" required/>
                </div>
                </Col>
                <Col className="lab" lg="7" md="12">
                <div className="form">
                  <label>Password </label>
                  <input className="input_text" onChange={e => this.setState({ password: e.target.value })} type="password" minlegth="6" maxlength="25" required />
                </div>
                </Col>
                <Col className="but1" lg="7" md="12">
                  <div className="form">
                    <Button outline color="secondary" className="buttonSign" type="reset" onClick={this.onClick}>Register</Button>
                    <Button className="buttonSign" href="/">Login</Button>
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
export default Registeration;
