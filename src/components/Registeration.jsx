import React from "react";
import {Container, Row, Col} from "reactstrap"

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
  );
}

export default Registeration;
