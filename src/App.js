import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { PDFViewer } from "@react-pdf/renderer";

import "../node_modules/bulma/css/bulma.css";
import Auth from "./Components/Auth";

//Pages
import Bill from "./Pages/Bill";
import Customers from "./Pages/Customers";
import Dashboard from "./Pages/Dashboard";
import Inventory from "./Pages/Inventory";
import Invoice from "./Pages/Invoice";
import Login from "./Pages/Login";
import OrderDetails from "./Pages/Order-details";
import Products from "./Pages/Products";
import Purchase from "./Pages/Purchase";
import Reports from "./Pages/Reports";
import Sales from "./Pages/Sales";
import Stock from "./Pages/Stock";
import Suppliers from "./Pages/Suppliers";
import Taxes from "./Pages/Taxes";
import Settings from "./Pages/Settings";
import Biller from "./Components/Biller";
import CompanyInfo from "./Pages/CompanyInfo";
import Profile from "./Pages/Profile";

class App extends Component {
  render() {
    return (
      <div
        className="App"
        style={{ overflowY: "hidden", height: "99vh", overflowX: "hidden" }}
      >
        <Router>
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/company">
              <CompanyInfo />
            </Route>
            <Auth>
              <Route exact path="/">
                <Dashboard />
              </Route>
              <Route path="/bill">
                <Bill />
              </Route>
              <Route path="/profile">
                <Profile />
              </Route>
              <Route path="/customers">
                <Customers />
              </Route>
              <Route path="/inventory">
                <Inventory />
              </Route>
              <Route path="/raw-stock">
                <Invoice />
              </Route>
              <Route path="/Order-details">
                <OrderDetails />
              </Route>
              <Route path="/products">
                <Products />
              </Route>
              <Route path="/purchase">
                <Purchase />
              </Route>
              <Route path="/reports">
                <Reports />
              </Route>
              <Route path="/sales">
                <Sales />
              </Route>
              <Route path="/suppliers">
                <Suppliers />
              </Route>
              <Route path="/taxes">
                <Taxes />
              </Route>
              <Route path="/stock">
                <Stock />
              </Route>
              <Route path="/settings">
                <Settings />
              </Route>
              <Route path="/biller">
                <PDFViewer width="1500px" height="1520px">
                  <Biller />
                </PDFViewer>
              </Route>
            </Auth>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
