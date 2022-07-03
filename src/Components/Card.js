import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Loader from "./Loader";

const Card = ({ product }) => {
    const [ImageLoaded, setImageLoaded] = useState(false)
  return (
    <div className="single-product">
      <div className="product-wrapper">
        <div className="product">
          <div className="image" >
            {!ImageLoaded && <Loader extraStyles={{height: '100%', top: '0', left: '0',}} container />}
            <img
              src={product.image}
              onLoad={() => setImageLoaded(true)}
              alt=""
            />
          </div>
          <NavLink to={`/single-product/${product.id}/${product.category}/${product.name}`}>
            <div className="content">
              <div className="name-wrapper">
                {!ImageLoaded && <Loader extraStyles={{height: '100%', top: '0', left: '0',}} container />}
                <div className="name">Name: {product.name}</div>
              </div>
              <div className="categ-wrapper">
                {!ImageLoaded && <Loader extraStyles={{height: '100%', top: '0', left: '0',}} container />}
                <div className="categ">Category: {product.category}</div>
              </div>
            <div className="price-wrapper">
            {!ImageLoaded && <Loader extraStyles={{height: '100%', top: '0', left: '0',}} container />}
              <div className="price">Price: ${product.price}</div>
            </div>
              <div className="desc-wrapper">
                {!ImageLoaded && <Loader extraStyles={{height: '100%', top: '0', left: '0',}} container />}
                <div className="desc">Description: {product.desc.slice(0, 100)}...</div>
              </div>
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Card;
