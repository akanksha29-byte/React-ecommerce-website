import {
  AppBar,
  Grid,
  Input,
  Toolbar,
  Typography,
  Hidden,
} from "@material-ui/core";
import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link } from "react-router-dom";

const Header = ({ onSearch, itemCount }) => {
  return (
    <AppBar style={{ height: "5rem" }} className="bg-primary" position="static">
      <Toolbar>
        <Grid item sm={1} md={5}>
          <Typography variant="h4">
            E-com<span style={{ color: "black" }}>Website</span>
          </Typography>
        </Grid>
        <Hidden only="sm">
          <Grid item md={5}>
            <Input
              placeholder="Search"
              type="text"
              onChange={(event) => {
                onSearch(event.target.value);
              }}
            />
          </Grid>
        </Hidden>

        <Typography variant="h6">
          <Link style={{ color: "white" }} className="nav-link" to="/">
            <HomeIcon fontSize="large" />
          </Link>
        </Typography>

        <Typography variant="h6">
          <Link to="/cart" style={{ color: "white", textDecoration: "none" }}>
            <ShoppingCartIcon fontSize="large" />
          </Link>
          {itemCount !== 0 ? (
            <span className="badge bagde-pill badge-danger text-white">
              {itemCount}
            </span>
          ) : null}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
