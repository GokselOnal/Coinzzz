import React from "react";

function Sign_in(){
  return (
    <div>
      <label for="email">E-mail</label>
      <input className="input_text" type="text" id="email" name="" value="" maxlength="25"/>
      <label for="password">Password</label>
      <input className="input_text" type="password" id="password" name="" value="" maxlength="25" required/>
      <button type="button" name="button">Sign In</button>
      <button type="button" name="button">Register</button>
    </div>
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

export default Sign_in;
