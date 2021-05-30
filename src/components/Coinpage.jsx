import React from "react";

function Coinpage(props){
  return(
    <div>
      <h2>{props.name}</h2>
      <h2>{props.buy_price}</h2>
      <p>{props.description}</p>
    </div>
  );
}

export default Coinpage;
