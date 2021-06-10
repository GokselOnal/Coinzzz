import React from "react";
import ReactDOM from "react-dom";
import Coinpage from "../../components/Coinpage"
import coins from "../../coins"

function NurettinCoin(){
  return(
    <Coinpage
      name={coins[2].name}
      buy_price={coins[2].buy_price}
      img={coins[2].img}
      description={coins[2].description}
    />
  );
}

export default NurettinCoin;
