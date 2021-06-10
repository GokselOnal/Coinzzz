import React from "react";
import {Button} from "reactstrap"

function Coinpage(props){
  return(
    <div>
      <h3>{props.name}</h3>
      <h3>{props.buy_price}</h3>
      <img className="coin_img" src={props.img}></img>
      <p>{props.description}</p>
      <Button className="coin_buy">Buy</Button>
    </div>
  );
}

export default Coinpage;
