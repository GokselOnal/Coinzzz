import React from "react";
import ReactDOM from "react-dom";
import Coinpage from "../../components/Coinpage"
import {Button} from "reactstrap"
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
      <Button className="main_back_but" href="/mainpage">Back to mainpage</Button>
    </div>
  );
}
export default NurettinCoin;
