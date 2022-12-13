import React, { Fragment } from "react";
import AddShoppingCartTwoToneIcon from "@mui/icons-material/AddShoppingCartTwoTone";


const AmazonProduct = (props) => {
  console.log(props);
  const { id, productName, price, productImage } = props.data;
  return (
    <div className="product">
      <img src={productImage} alt={productName} />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p>{price}</p>
      </div>
      <button className="addToCartBttn"> <AddShoppingCartTwoToneIcon /> </button>
    </div>
  );
};

export default AmazonProduct;
