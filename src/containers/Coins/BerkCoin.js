import React from "react";
import ReactDOM from "react-dom";
import Coinpage from "../../components/Coinpage"
import coins from "../../coins"

function BerkCoin(){
  return(
    <Coinpage
    name={coins[1].name}
    buy_price={coins[1].buy_price}
    description={coins[1].description}
    />
  );
}

export default BerkCoin;
