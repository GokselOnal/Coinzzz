import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function Coinpage(props){
  return(
    <div>
      <Header />
      <h2>{props.name}</h2>
      <h2>{props.buy_price}</h2>
      <p>{props.description}</p>
      <Footer />
    </div>
  );
}

export default Coinpage;
