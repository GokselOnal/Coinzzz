import React from "react";
import ReactDOM from "react-dom";
import Coinpage from "../../components/Coinpage"
import coins from "../../coins"
import {Button,Form} from "reactstrap"
import axios from 'axios';

const api = axios.create({baseURL: `http://localhost:3000/users`});


class GokselCoin extends React.Component {
  constructor(props){
    super(props)
    this.state = {
        balance: '',
    };
  }


  getProducts = () => {
    api.get('/').then(res => {
      const productList = res.data;
      this.setState({ productList });
      var input_email = sessionStorage.getItem("email")
      for(var i = 0; i < this.state.productList.length; i++){
        if(this.state.productList[i]["email"] == input_email){
          this.setState({ balance: this.state.productList[i]["balance"]})
        }
      }
      if(this.state.balance > coins[0].buy_price.slice(1)){
        var new_balance = this.state.balance - coins[0].buy_price.slice(1)
        console.log(new_balance)
        this.setState({ balance: new_balance})
        this.state.productList[0]["balance"] = 100;
      }else{
        window.alert("You have not enough balance");
      }
   })
 }

  render(){
  return(
    <div>
    <Coinpage
      name={coins[0].name}
      buy_price={coins[0].buy_price}
      img={coins[0].img}
      description={coins[0].description}
    />
    <div className ="coins_button">
      <Button href="/mainpage">Back to mainpage</Button>

    </div>
    </div>
  );
  }
}
export default GokselCoin;
