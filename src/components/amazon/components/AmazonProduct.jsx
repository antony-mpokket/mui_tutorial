import React, { Fragment, useContext } from "react";
import AddShoppingCartTwoToneIcon from "@mui/icons-material/AddShoppingCartTwoTone";
import { ShopContext } from "../context/ShopContext";
import Badge, { BadgeProps } from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";


const AmazonProduct = (props) => {
  // console.log(props);
  const { id, productName, price, productImage } = props.data;
  const { addToCart, cartItem } = useContext(ShopContext);
  
  const cartItemAmount = cartItem[id]
  
  return (
    <div className="product">
      <img src={productImage} alt={productName} />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p>{price}</p>
      </div>
      <button className="addToCartBttn" onClick={() => addToCart(id)}>
        <Badge
          badgeContent={cartItemAmount > 0 && cartItemAmount}
          color="primary"
          invisible={cartItemAmount > 0 ? false:true}
        >
          <AddShoppingCartTwoToneIcon color="inherit" />
        </Badge>
      </button>
    </div>
  );
};

export default AmazonProduct;
