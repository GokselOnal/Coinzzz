import React from "react";
import {Container, Row, Col,Form, FormGroup,Button} from "reactstrap"

class Registeration extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            phone: '',
        };
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        const { firstName, lastName, email, password, phone} = this.state;
        const product = { firstName, lastName, email, password, phone};
        this.props.onSubmit(product);
        //this.props.resetForm()
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
                  <input className="input_text" onChange={e => this.setState({ email: e.target.value })} type="email" required/>
                </div>
                </Col>
                <Col className="lab" lg="7" md="12">
                <div className="form">
                  <label>Password </label>
                  <input className="input_text" onChange={e => this.setState({ password: e.target.value })} type="password" minlegth="6" maxlength="25" required />
                </div>
                </Col>
                <Col className="lab" lg="7" md="12">
                <div className="form">
                  <label>Phone </label>
                  <input className="input_text" onChange={e => this.setState({ phone: e.target.value })} type="text" minlegth="11" maxlength="11" placeholder="(0XXX-XXX-XXXX)" required/>
                </div>
                </Col>
                <Col className="but1" lg="7" md="12">
                  <div className="form">
                    <Button outline color="secondary" className="lala" href="/register" onClick={this.onClick}>Register</Button>
                    <Button className="lala" href="/">Login</Button>
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


/*<FormGroup>
  <Col className="lab" lg="5" md="12"><label>Birthdate</label></Col>
  <Col className="inpt" lg="7" md="12"><input className="input_text" type="date" max="2003-01-01" required/></Col>
  <Col className="lab" lg="5" md="12"><label>Gender</label></Col>
  <Col className="gender"><input className="radio_button" type="radio" id="male" name="gender"/> <label for="male">Male</label></Col>
  <Col className="gender"><input className="radio_button" type="radio" id="female" name="gender"/> <label for="female">Female</label></Col>
  <Col className="gender"><input className="radio_button" type="radio" id="other" name="gender"/> <label for="other">Other</label></Col>
  <Col className="but1" lg="6"><button className="button_style" type="button">Register</button></Col>
  <Col className="but2" lg="6"><button className="button_style" type="button">Log in</button></Col>*/
/*
function Registeration(){
  return(
    <Container>
    <Row>
      <Col className="lab" lg="5" md="12"><label for="text_firstname">First Name </label></Col>
      <Col className="inpt" lg="7" md="12"><input className="input_text" type="text" id="text_firstname" name="" value="" maxlength="25" required/></Col>
      <Col className="lab" lg="5" md="12"><label for="text_lastname">Last Name </label></Col>
      <Col className="inpt" lg="7" md="12"><input className="input_text" type="text" id="text_lastname" name="" value="" maxlength="25" required/></Col>
      <Col className="lab" lg="5" md="12"><label for="text_email">E-mail </label></Col>
      <Col className="inpt" lg="7" md="12"><input className="input_text" type="email" id="text_email" name="" value="" required/></Col>
      <Col className="lab" lg="5" md="12"><label for="text_password">Password </label></Col>
      <Col className="inpt" lg="7" md="12"><input className="input_text" type="password" id="text_password" name="" value="" minlegth="6" maxlength="25" required /></Col>
      <Col className="lab" lg="5" md="12"><label for="text_phone">Phone </label></Col>
      <Col className="inpt" lg="7" md="12"><input className="input_text" type="text" id="text_phone" name="" value="" minlegth="11" maxlength="11" placeholder="(0XXX-XXX-XXXX)" required/></Col>
      <Col className="lab" lg="5" md="12"><label for="birthdate">Birthdate</label></Col>
      <Col className="inpt" lg="7" md="12"><input className="input_text" type="date" id="text_birthdate" name="" value="" max="2003-01-01" required/></Col>
      <Col className="lab" lg="5" md="12"><label for="radio">Gender</label></Col>
      <Col className="gender"><input className="radio_button" type="radio" id="male" name="gender"/> <label for="male">Male</label></Col>
      <Col className="gender"><input className="radio_button" type="radio" id="female" name="gender"/> <label for="female">Female</label></Col>
      <Col className="gender"><input className="radio_button" type="radio" id="other" name="gender"/> <label for="other">Other</label></Col>
      <Col className="but1" lg="6"><button className="button_style" type="button" name="button">Register</button></Col>
      <Col className="but2" lg="6"><button className="button_style" type="button" name="button">Log in</button></Col>
    </Row>
    </Container>
*/
    // <div>
    //   <label for="text_firstname">First Name </label>
    //   <input className="input_text" type="text" id="text_firstname" name="" value="" maxlength="25" required/>
    //   <label for="text_lastname">Last Name </label>
    //   <input className="input_text" type="text" id="text_lastname" name="" value="" maxlength="25" required/>
    //   <label for="text_email">E-mail </label>
    //   <input className="input_text" type="email" id="text_email" name="" value="" required/>
    //   <label for="text_password">Password </label>
    //   <input className="input_text" type="password" id="text_password" name="" value="" minlegth="6" maxlength="25" required />
    //   <label for="text_phone">Phone </label>
    //    <input className="input_text" type="text" id="text_phone" name="" value="" minlegth="11" maxlength="11" placeholder="(0XXX-XXX-XXXX)" required/>
    //   <label for="birthdate">Birthdate</label>
    //   <input className="input_text" type="date" id="text_birthdate" name="" value="" max="2003-01-01" required/>
    //   <label for="radio">Gender</label>
    //   <input className="radio_button" type="radio" id="male" name="gender"/> <label for="male">Male</label>
    //   <input className="radio_button" type="radio" id="female" name="gender"/> <label for="female">Female</label>
    //   <input className="radio_button" type="radio" id="other" name="gender"/> <label for="other">Other</label>
    //   <button type="button" name="button">Register</button>
    //   <button type="button" name="button">Log in</button>
    // </div>

  //   <section id="register">
  //   <div class="row">
  //     <div class="lab col-lg-5 col-md-12">
  //       <label for="text_firstname">First Name </label>
  //     </div>
  //     <div class="inpt col-lg-7 col-md-12">
  //       <input class="input_text" type="text" id="text_firstname" name="" value="" maxlength="25" required>
  //     </div>
  //   </div>
  //
  //   <div class="row">
  //     <div class="lab col-lg-5">
  //       <label for="text_lastname">Last Name </label>
  //     </div>
  //     <div class="inpt col-lg-7">
  //       <input class="input_text" type="text" id="text_lastname" name="" value="" maxlength="25" required>
  //     </div>
  //   </div>
  //
  //   <div class="row">
  //     <div class="lab col-lg-5">
  //       <label for="text_email">E-mail </label>
  //     </div>
  //     <div class="inpt col-lg-7">
  //       <input class="input_text" type="email" id="text_email" name="" value="" required>
  //     </div>
  //   </div>
  //
  //   <div class="row">
  //     <div class="lab col-lg-5">
  //       <label for="text_password">Password </label>
  //     </div>
  //     <div class="inpt col-lg-7">
  //       <input class="input_text" type="password" id="text_password" name="" value="" minlegth="6" maxlength="25" required />
  //     </div>
  //   </div>
  //
  //   <div class="row">
  //     <div class="lab col-lg-5">
  //       <label for="text_phone">Phone </label>
  //     </div>
  //     <div class="inpt col-lg-7">
  //       <input class="input_text" type="text" id="text_phone" name="" value="" minlegth="11" maxlength="11" placeholder="(0XXX-XXX-XXXX)" required>
  //     </div>
  //   </div>
  //
  //   <div class="row">
  //     <div class="lab col-lg-5">
  //       <label for="birthdate">Birthdate</label>
  //     </div>
  //     <div class="inpt col-lg-7">
  //       <input class="input_text" type="date" id="text_birthdate" name="" value="" max="2003-01-01" required>
  //     </div>
  //   </div>
  //
  //   <div class="row">
  //     <div class="lab col-lg-5">
  //       <label for="radio">Gender</label>
  //     </div>
  //     <div class="gender col-lg-7">
  //       <input class="radio_button" type="radio" id="male" name="gender"> <label for="male">Male</label>
  //       <input class="radio_button" type="radio" id="female" name="gender"> <label for="female">Female</label>
  //       <input class="radio_button" type="radio" id="other" name="gender"> <label for="other">Other</label>
  //     </div>
  //   </div>
  //
  //   <div class="row">
  //     <div class="but1 col-lg-6">
  //       <button type="button" name="button">Register</button>
  //     </div>
  //     <div class="but2 col-lg-6">
  //       <button type="button" name="button">Log in</button>
  //     </div>
  //   </div>
  // </section>
//   );
// }
//
// export default Registeration;
