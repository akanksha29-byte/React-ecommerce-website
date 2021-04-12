import React from "react";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import { Button } from "@material-ui/core";

const Item = ({ productName, id, productImage, productPrice, onAddToCart }) => {
  return (
    <Card>
      <CardMedia
        title={`item-${id}`}
        style={{ height: "300px" }}
        image={productImage}
      />
      <CardContent>
        <Typography variant="h4" gutterBottom>
          {productName}
        </Typography>
        <Typography variant="h5" gutterBottom>
          {productPrice}
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => {
            onAddToCart({
              id: id,
              itemName: productName,
              count: 1,
              itemPrice: productPrice,
            });
          }}
        >
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  );
};

export default Item;
