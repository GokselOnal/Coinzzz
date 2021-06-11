import React from "react";
import ReactDOM from "react-dom";
import Coinpage from "../../components/Coinpage"
import coins from "../../coins"
import {Button} from "reactstrap"

function BerkCoin(){
  return(
    <div>
      <Coinpage
        name={coins[1].name}
        buy_price={coins[1].buy_price}
        img={coins[1].img}
        description={coins[1].description}
      />
      <Button className="main_back_but" href="/mainpage">Back to mainpage</Button>
    </div>
  );
}

export default BerkCoin;
