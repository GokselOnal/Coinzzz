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
    description={coins[0].description}
    />
    <Coinpage
    description={coins[1].description}
    />
    <Coinpage
    description={coins[1].description}
    />
    <Coinpage
    description={coins[1].description}
    />
  </div>,
  document.getElementById('login')
);
