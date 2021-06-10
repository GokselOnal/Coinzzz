import React from "react";
import ReactDOM from "react-dom";
import Coinpage from "../../components/Coinpage"
import coins from "../../coins"

function DenizCoin(){
  return(
    <Coinpage
      name={coins[3].name}
      buy_price={coins[3].buy_price}
      img={coins[3].img}
      description={coins[3].description}
    />
  );
}

export default DenizCoin;
