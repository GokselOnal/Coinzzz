import React from "react";
import ReactDOM from "react-dom";
import Coinpage from "../../components/Coinpage"
import {Button} from "reactstrap"
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
      <Button className="main_back_but" href="/mainpage">Back to mainpage</Button>
    </div>
  );
}

export default DenizCoin;
