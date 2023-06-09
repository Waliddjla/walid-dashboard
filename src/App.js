import React from "react";
import "./App.css";

import DashboardEmp from "./Pages/DashboardEmployees/DashboardEmp";
import DashboardFin from "./Pages/DashboardFinance/DashboardFin";
import Sidebar from "./Components/Sidebar/Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";



export default function App() {
  return (
    <Router>
      <Sidebar />
      <Switch>
        <Route path="/" exact component = {DashboardFin}></Route>
        <Route path="/DashboardEmp" exact component = {DashboardEmp}></Route>
      </Switch>

    </Router>
  );
}
