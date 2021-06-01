import React from "react";
import {Container, Row, Col} from "reactstrap"

function SignIn(){
  return (
    <Container className="login">
      <Row>
        <Col className="lab" lg="5" md="12"><label for="email">E-mail</label></Col>
        <Col className="inpt" lg="7" md="12"><input className="input_text" type="text" id="email" name="" value="" maxlength="25"/></Col>
        <Col className="lab" lg="5" md="12"><label for="password">Password</label></Col>
        <Col className="inpt" lg="7" md="12"><input className="input_text" type="password" id="password" name="" value="" maxlength="25" required/></Col>
        <Col className="but1" lg="6"><button className="button_style" type="button" name="button">Sign In</button></Col>
        <Col className="but2" lg="6"><button className="button_style" type="button" name="button">Register</button></Col>
      </Row>
    </Container>
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
  );
}

export default SignIn;
