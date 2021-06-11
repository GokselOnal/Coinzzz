import React from "react";
import ReactDOM from "react-dom";
import Coinpage from "../../components/Coinpage"
import {Button,Form} from "reactstrap"
import coins from "../../coins"

function DenizCoin(){
  return(
    <div>
    <Coinpage
      name={coins[3].name}
      buy_price={coins[3].buy_price}
      img={coins[3].img}
      description={coins[3].description}
    />
    <div className ="coins_button">

      //<Button id="goksel" className="coin_buy">Buy</Button>
      <Button href="/mainpage">Back to mainpage</Button>

    </div>
    </div>
  );
}

export default DenizCoin;
