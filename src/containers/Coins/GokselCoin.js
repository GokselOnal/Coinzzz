import React from "react";
import ReactDOM from "react-dom";
import Coinpage from "../../components/Coinpage"
import coins from "../../coins"

function GokselCoin(){
  return(
    <Coinpage
    name={coins[0].name}
    buy_price={coins[0].buy_price}
    description={coins[0].description}
    />
  );
}

export default GokselCoin;
