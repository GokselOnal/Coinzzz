import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import coins from "../coins"

function Coinpage(props){
  return(
    <div>
      <Header />
      <p>{props.description}</p>
      <Footer />
    </div>
  );
}

export default Coinpage;
