import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Link, Switch, Button} from 'react-router-dom'
import Header from "./components/Header"
import Footer from "./components/Footer"
import Login from "./containers/Login/Login"
import Register from './containers/Register/Register'
import Mainpage from "./containers/Mainpage/Mainpage"
import GokselCoin from "./containers/Coins/GokselCoin"
import BerkCoin from "./containers/Coins/BerkCoin"
import NurettinCoin from "./containers/Coins/NurettinCoin"
import DenizCoin from "./containers/Coins/DenizCoin"
import Notfound from './containers/Notfound/Notfound'

ReactDOM.render(
  <div>
    <Header />
    <BrowserRouter>
      <Switch>
       <Route exact path="/" component={Login} />
       <Route exact path="/register" component={Register} />
       <Route exact path="/mainpage" component={Mainpage} />
       <Route exact path="/goksel" component={GokselCoin} />
       <Route exact path="/berk" component={BerkCoin} />
       <Route exact path="/nurettin" component={NurettinCoin} />
       <Route exact path="/deniz" component={DenizCoin} />
       <Route path="*" component={Notfound} />
      </Switch>
     </BrowserRouter>
     <Footer />
   </div>,
  document.getElementById('root')
);


/*
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
*/
