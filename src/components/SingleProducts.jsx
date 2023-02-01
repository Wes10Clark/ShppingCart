import React from "react";
import { Button, Card, CardImg } from "react-bootstrap";
import { CartState } from "../context/Context";
import Rating from "./Rating";

const SingleProducts = ({ product }) => {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  return (
    <div className="products">
      <Card>
        <CardImg variant="top" src={product.image} alt={product.name} />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Subtitle style={{ paddingBottom: 10 }}>
            <span> $ {product.price.split(".")[0]}</span>
            {product.fastDelivery ? (
              <div>fast Delivery</div>
            ) : (
              <div>4 days delivery</div>
            )}
            <Rating rating={product.ratings} />
          </Card.Subtitle>
          {cart.some((p) => p.id === product.id) ? (
            <Button
              onClick={() => {
                dispatch({
                  type: "REMOVE_FROM_CART",
                  payload: product,
                });
              }}
              className="mb-3"
              variant="danger"
            >
              Remove from Cart
            </Button>
          ) : (
            <div className="d-flex justify-content-center">
              <Button
                onClick={() => {
                  dispatch({
                    type: "ADD_TO_CART",
                    payload: product,
                  });
                }}
                disabled={!product.inStock}
                variant="success"
              >
                {!product.inStock ? "out of stock" : "Add to Cart"}
              </Button>
            </div>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

export default SingleProducts;
