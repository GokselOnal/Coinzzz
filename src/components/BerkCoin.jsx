import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Coinpage from "./Coinpage";
import coins from "../coins"

function BerkCoin(){
  return(
    <div>
      <Header />
      <Coinpage
        description={coins[1].description}
      />
      <Footer />
    </div>
  );
}

export default BerkCoin;
