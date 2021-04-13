import React, { Component } from "react";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.css";
import { Route } from "react-router-dom";
import MainBody from "./components/MainBody";
import { Grid } from "@material-ui/core";
import Cart from "./components/Cart";

class App extends Component {
  state = {
    products: [
      {
        id: 1,
        itemName: "Hero cycle",
        itemImage:
          "https://images.unsplash.com/photo-1529422643029-d4585747aaf2?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8Y3ljbGV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        price: 40000,
      },
      {
        id: 2,
        itemName: "Catwalk Heels",
        itemImage:
          "https://images.unsplash.com/photo-1581101767113-1677fc2beaa8?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8aGVlbHN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        price: 2500,
      },
      {
        id: 3,
        itemName: "Woolen Tops",
        itemImage:
          "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fGNsb3RoZXN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        price: 1500,
      },
      {
        id: 4,
        itemName: "Men Shirts (Combo)",
        itemImage:
          "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
        price: 5000,
      },
    ],
    cartItems: [],
    searchTerm: "",
  };

  handleAddToCart = (item) => {
    const cartItems = [...this.state.cartItems];
    const present = cartItems.filter((x) => {
      return x.id === item.id;
    });
    if (present.length === 0) {
      cartItems.push(item);
      this.setState({ cartItems });
    }
  };

  handleRemoveFromCart = (item) => {
    const cartItems = this.state.cartItems.filter((x) => x.id !== item.id);
    this.setState({ cartItems });
  };

  handleQuantityIncrement = (item) => {
    const cartItems = [...this.state.cartItems];
    const product = this.state.products.filter((x) => x.id === item.id);
    const index = cartItems.indexOf(item);
    cartItems[index] = { ...item };
    cartItems[index].count++;
    cartItems[index].itemPrice += product[0].price;
    this.setState({ cartItems });
  };

  handleQuantityDecrement = (item) => {
    if (item.count > 1) {
      const cartItems = [...this.state.cartItems];
      const product = this.state.products.filter((x) => x.id === item.id);
      const index = cartItems.indexOf(item);
      cartItems[index] = { ...item };
      cartItems[index].count--;
      cartItems[index].itemPrice -= product[0].price;
      this.setState({ cartItems });
    }
  };
  handleSearch = (search) => {
    const searchTerm = search;
    this.setState({ searchTerm });
  };

  componentDidMount = () => {
    if (window.localStorage.length !== 0) {
      const cartItemsString = window.localStorage.getItem("Ecommerce-website");
      const cartItems = JSON.parse(cartItemsString);
      this.setState({ cartItems });
    }
  };

  componentDidUpdate = () => {
    window.localStorage.setItem(
      "Ecommerce-website",
      JSON.stringify(this.state.cartItems)
    );
  };

  render() {
    return (
      <div className="container">
        <Header
          onSearch={this.handleSearch}
          itemCount={this.state.cartItems.length}
        />
        <Grid style={{ marginTop: "3rem" }} container direction="column">
          <Grid item xs={false} sm={2} />
          <Route path="/cart">
            <Cart
              cartItem={this.state.cartItems}
              itemCount={this.state.cartItems.length}
              onRemoveFromCart={this.handleRemoveFromCart}
              onQuantityIncrement={this.handleQuantityIncrement}
              onQuantityDecrement={this.handleQuantityDecrement}
            />
          </Route>
          <Route path="/(|React-ecommerce-website)" exact>
            <MainBody
              product={this.state.products}
              searchResults={this.state.searchTerm}
              onAddToCart={this.handleAddToCart}
            />
          </Route>
          <Grid item xs={false} sm={2} />
        </Grid>
      </div>
    );
  }
}

export default App;
