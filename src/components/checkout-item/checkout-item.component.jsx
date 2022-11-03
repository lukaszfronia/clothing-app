import {
  CheckoutItemContainer,
  ImageContainer,
  Span,
  Quantity,
  Arrow,
  Value,
  RemoveButton,
} from "./checkout-item.styles";

import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  const { clearItemFromCart, addItemToCart, remoweItemFromCart } =
    useContext(CartContext);

  const clearCartHandler = () => clearItemFromCart(cartItem);
  const incrementItemHandler = () => addItemToCart(cartItem);
  const decrementItemHandler = () => remoweItemFromCart(cartItem);

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={name} />
      </ImageContainer>

      <Span>{name}</Span>
      <Quantity>
        <Arrow onClick={decrementItemHandler}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={incrementItemHandler}>&#10095;</Arrow>
      </Quantity>

      <Span>{price}</Span>
      <RemoveButton onClick={clearCartHandler}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
