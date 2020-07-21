import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import Transactions from "./Components/Transactions";
import Operations from "./Components/Operation";
import axios from "axios";
import Breakdown from "./Components/Breakdown";
import Balance from "./Components/Balance";

import Particles from 'react-particles-js';
// import BIRDS from 'vanta/dist/vanta.birds.min'




class App extends Component {
  constructor() {
    super();
    // this.vantaRef = React.createRef()
    this.state = {
      data: [],
    };
  }

  addTransaction = async (transaction) => {
    const response = await axios.post(
      "http://localhost:3001/transaction",
      transaction
    );
    this.setState({ data: response.data });
  };

  deleteTransaction = async (id) => {
    const response = await axios.delete(
      `http://localhost:3001/transaction/${id}`
    );
    const data = [...this.state.data];
    const index = data.findIndex((x) => x._id === id);
    data.splice(index, 1);
    this.setState({ data: data });
  };

  async componentDidMount() {
    const transactions = await axios.get("http://localhost:3001/transactions");
    // console.log(transactions.data); = check if mounting works
    this.setState({ data: transactions.data });
    // this.vantaEffect = BIRDS({
    //   el: this.vantaRef.current
    //   })
  }

  render() {
    return (
      <Router>
        <div ref={this.vantaRef}>
          <div className="app-wrapper">
            <Balance transactions={this.state.data} />
            <br></br>
            <div className="links">
              <Link className="link" to="/Transactions">
                
                TRANSACTIONS
              </Link>
              <br></br>
              <Link className="link" to="/Operations">
                OPERATIONS
              </Link>
              <br></br>
              <Link className="link" to="/Breakdown">
                BREAKDOWN
              </Link>
            </div>
          </div>
          <Route
            path="/transactions"
            exact
            render={() => (
              <Transactions
                data={this.state.data}
                deleteTransaction={this.deleteTransaction}
              />
            )}
          ></Route>
          <Route
            path="/Operations"
            exact
            render={() => <Operations addTransaction={this.addTransaction} />}
          ></Route>
          <Route
            path="/Breakdown"
            exact
            render={() => <Breakdown data={this.state.data} />}
          ></Route>
        </div>
      </Router>
    );
  }
}

export default App;
