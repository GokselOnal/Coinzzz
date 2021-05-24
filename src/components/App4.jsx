import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Coinpage from "./Coinpage";
import coins from "../coins"

function App4(){
  return(
    <div>
      <Header />
      <Coinpage
        description={coins[0].description}
      />
      <Footer />
    </div>
  );
}

export default App4;
