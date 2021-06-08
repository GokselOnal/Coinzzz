import React from "react";
import ReactDOM from "react-dom";
import Coinpage from "../../components/Coinpage"
import coins from "../../coins"
import Thumbnail from '../../components/Thumbnail';
import images from '../../images/index';



function GokselCoin(){
  return(
    <div>
    <Coinpage
    name={coins[0].name}
    buy_price={coins[0].buy_price}
    description={coins[0].description}
    />
    <img src="./goksel_coin.png"/>
    </div>
  );
}

export default GokselCoin;
