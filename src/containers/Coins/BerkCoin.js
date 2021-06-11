import React from "react";
import ReactDOM from "react-dom";
import Coinpage from "../../components/Coinpage"
import coins from "../../coins"
import {Button,Form} from "reactstrap"

function BerkCoin(){
  return(
    <div>
    <Coinpage
      name={coins[1].name}
      buy_price={coins[1].buy_price}
      img={coins[1].img}
      description={coins[1].description}
    />
    <div className ="coins_button">

      //<Button id="goksel" className="coin_buy">Buy</Button>
      <Button href="/mainpage">Back to mainpage</Button>

    </div>
    </div>
  );
}

export default BerkCoin;
