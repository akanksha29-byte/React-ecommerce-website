import React from "react";
const Cart = ({
  cartItem,
  onRemoveFromCart,
  onQuantityIncrement,
  onQuantityDecrement,
  itemCount,
}) => {
  {
    if (itemCount === 0) {
      return (
        <>
          <p style={{ textAlign: "center" }}>Your Cart is empty.</p>
        </>
      );
    }
  }
  return (
    <table className="table">
      <thead>
        <tr>
          <td>Item</td>
          <td>Quantity</td>
          <td>Price</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </thead>
      <tbody>
        {cartItem.map((item) => {
          return (
            <tr key={`item-${item.id}`}>
              <td>{item.itemName}</td>
              <td>{item.count}</td>
              <td>{item.itemPrice}</td>
              <td>
                <button
                  className=" btn btn-outline-secondary  btn-md"
                  onClick={() => {
                    onQuantityIncrement(item);
                  }}
                >
                  +
                </button>
              </td>
              <td>
                <button
                  className=" btn btn-outline-secondary btn-md"
                  onClick={() => {
                    onQuantityDecrement(item);
                  }}
                >
                  -
                </button>
              </td>

              <td>
                <button
                  className=" btn btn-danger"
                  onClick={() => {
                    onRemoveFromCart(item);
                  }}
                >
                  Remove
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Cart;
