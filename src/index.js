import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/App"
import App3 from "./components/App3"
import App4 from "./components/App4"
import GokselCoin from "./components/GokselCoin"
import BerkCoin from "./components/BerkCoin"
import NurettinCoin from "./components/NurettinCoin"
import DenizCoin from "./components/DenizCoin"

ReactDOM.render(
  <div>
  <GokselCoin />
  <BerkCoin />
  <NurettinCoin />
  <DenizCoin />
  </div>,
  document.getElementById('login')
);
