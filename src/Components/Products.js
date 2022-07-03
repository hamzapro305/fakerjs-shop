import React, { useRef, useState } from "react";
import Card from "./Card";
import { RiLoader2Fill } from "react-icons/ri";
import { useSelector } from "react-redux";

const Products = () => {
  const [IsLoadingMore, setIsLoadingMore] = useState(false);
  const [isMore, setIsMore] = useState(true);
  const [Filter, setFilter] = useState({
    name: "",
    category: ""
  });
  const products = useSelector(state => state.Products.products)
  const ProductsPanel = useRef(0);
  const [N, setN] = useState(5);
  const filteredProducts = (p) => {
    const { name, category } = Filter
    if(name && category){
      return p.filter((prod) => {
        return prod.name.toUpperCase().includes(name.toUpperCase()) && prod.category.toUpperCase().includes(category.toUpperCase())
      })
    }else if(name) {
      return p.filter((prod) => {
        return prod.name.toUpperCase().includes(name.toUpperCase())
      })
    }else if(category){
      return p.filter((prod) => {
        return prod.category.toUpperCase().includes(category.toUpperCase())
      })
    }
    return p;
  };

  const Bottom = () => {
    if (ProductsPanel.current) {
      let { scrollTop, scrollHeight, clientHeight } = ProductsPanel.current;
      if (scrollTop + clientHeight === scrollHeight) {
        if (N < filteredProducts(products).length) {
          setIsLoadingMore(true);
          setN(N + 20);
          setIsLoadingMore(false);
        } else {
          setIsLoadingMore(false);
          setIsMore(false);
        }
      }
    }
  };

  const handler = (e) => {
    setN(10)
    setFilter({
      ...Filter,
      [e.target.name]: e.target.value
    })
  }
  return (
    <div className="Products-Panel" onScroll={Bottom} ref={ProductsPanel}>
      <div className="wrap">
        <div className="filter-container">
          <div className="filter-wrapper">
            <input onChange={handler} type="text" name="name" placeholder="Name" />
            <input onChange={handler} type="text" name="category" placeholder="Category" />
          </div>
        </div>
        <div className="products-container">
          <div className="products-wrapper">
            {filteredProducts(products)
              .slice(0, N)
              .map((product, i) => (
                <React.Fragment key={product.id}>
                  <Card product={product} />
                </React.Fragment>
              ))}
          </div>
          <div className="More-Products">
            <button
              onClick={() => {
                if (N < filteredProducts(products).length) {
                  setIsLoadingMore(true);
                  setN(N + 20);
                  setIsLoadingMore(false);
                } else {
                  setIsLoadingMore(true);
                  setIsMore(false);
                }
              }}
            >
              {IsLoadingMore ? (
                isMore ? (
                  <RiLoader2Fill />
                ) : (
                  "No More Items"
                )
              ) : (
                "Load More"
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
