import React from "react";
import "./App.css";
import HomePage from "./Pages/HomePage/HomePage";
import { Route, Switch } from "react-router-dom";
import PageNotFound from "./Components/PageNotFound/PageNotFound";
import ShopPage from "./Pages/Shop/ShopPage";



function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop-page" component={ShopPage} />
        <Route component={PageNotFound} />
        
      </Switch>
    </div>
  );
}

export default App;
