import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Coinpage from "./Coinpage";
import coins from "../coins"

function DenizCoin(){
  return(
    <div>
      <Header />
      <Coinpage
        description={coins[3].description}
      />
      <Footer />
    </div>
  );
}

export default DenizCoin;
