import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Coinpage from "./Coinpage";
import coins from "../coins"

function NurettinCoin(){
  return(
    <div>
      <Header />
      <Coinpage
        description={coins[2].description}
      />
      <Footer />
    </div>
  );
}

export default NurettinCoin;
