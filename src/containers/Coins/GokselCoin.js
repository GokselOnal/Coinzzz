import React from "react";
import ReactDOM from "react-dom";
import Coinpage from "../../components/Coinpage"
import coins from "../../coins"
import {Button} from "reactstrap"

function GokselCoin(){
  return(
    <div>
      <Coinpage
        name={coins[0].name}
        buy_price={coins[0].buy_price}
        img={coins[0].img}
        description={coins[0].description}
      />
      <Button className="main_back_but" href="/mainpage">Back to mainpage</Button>
    </div>
  );
}
export default GokselCoin;
