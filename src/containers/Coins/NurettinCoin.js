import React from "react";
import ReactDOM from "react-dom";
import Coinpage from "../../components/Coinpage"
import {Button,Form} from "reactstrap"
import coins from "../../coins"

function NurettinCoin(){
  return(
    <div>
    <Coinpage
      name={coins[2].name}
      buy_price={coins[2].buy_price}
      img={coins[2].img}
      description={coins[2].description}
    />
    <div className ="coins_button">

      //<Button id="goksel" className="coin_buy">Buy</Button>
      <Button href="/mainpage">Back to mainpage</Button>

    </div>
    </div>
  );
}

export default NurettinCoin;
