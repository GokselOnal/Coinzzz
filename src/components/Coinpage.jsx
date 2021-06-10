import React from "react";
import {Button} from "reactstrap"

function Coinpage(props){
  return(
    <div>
      <h3>{props.name}</h3>
      <h3>{props.buy_price}</h3>
      <img className="coin_img" src={props.img} width="500" height="500"></img>
      <p>{props.description}</p>
      <div className ="coins_button">
        <Button className="coin_buy">Buy</Button>
        <Button href="/mainpage">Back to mainpage</Button>
      </div>
    </div>
  );
}

export default Coinpage;
