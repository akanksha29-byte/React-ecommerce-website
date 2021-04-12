import React from "react";
import Item from "./Item";
import { Grid } from "@material-ui/core";
const MainBody = ({ product, searchResults, onAddToCart }) => {
  return (
    <Grid container spacing={4}>
      {product
        .filter((p) => {
          if (searchResults === "") {
            return p;
          } else if (
            p.itemName.toLowerCase().includes(searchResults.toLowerCase())
          ) {
            return p;
          }
        })
        .map((p) => {
          return (
            <Grid item xs={12} sm={4} key={`cart-items-${p.id}`}>
              <Item
                key={p.id}
                productName={p.itemName}
                id={p.id}
                productImage={p.itemImage}
                productPrice={p.price}
                onAddToCart={onAddToCart}
              />
            </Grid>
          );
        })}
    </Grid>
  );
};

export default MainBody;
