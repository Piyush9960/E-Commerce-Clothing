import React, { Component } from "react";
import ShopData from "./ShopData";

class ShopPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
        collection : ShopData
    };
  }

  render() {
    return <div>
        SHOP PAGE
    </div>;
  }
}

export default ShopPage;
