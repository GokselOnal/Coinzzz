import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/App"
import App3 from "./components/App3"
import App4 from "./components/App4"
import Coinpage from "./components/Coinpage"
import coins from "./coins"

ReactDOM.render(
  <div>
    <Coinpage
    name={coins[0].name}
    buy_price={coins[0].buy_price}
    description={coins[0].description}
    />
    <Coinpage
    name={coins[1].name}
    buy_price={coins[1].buy_price}
    description={coins[1].description}
    />
    <Coinpage
    name={coins[2].name}
    buy_price={coins[2].buy_price}
    description={coins[2].description}
    />
    <Coinpage
    name={coins[3].name}
    buy_price={coins[3].buy_price}
    description={coins[3].description}
    />
  </div>,
  document.getElementById('login')
);
