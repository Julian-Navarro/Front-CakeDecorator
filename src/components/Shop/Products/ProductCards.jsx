import axios from "axios";
import React, { useEffect, useState } from "react";
import { HOST } from "../../../utils";
import ProductCard from "./ProductCard";
import { Div } from "../../../utils/StyledComponents/StyledComponents";
export default function ProductCards ({ path, handlerEditProduct, handlerSetComponentProductListFlag, handlerSetEditFlag, products, handleRemoveItemCart, handlerSetCart}) {
    // console.log("PRODUCTS: ", products);
    return (
        <Div flWr="wrap" wd="100%"bg="#F8F0F6"pd="1rem 0 1rem 0"br="0">
            {
                products?.length > 0 
                ? products.map((pr) => (<ProductCard 
                    handleRemoveItemCart={handleRemoveItemCart}
                    handlerSetComponentProductListFlag={handlerSetComponentProductListFlag}
                    handlerSetCart={handlerSetCart}
                    key={pr.id}
                    brand={pr.brand}
                    path={path}
                    handlerSetEditFlag={handlerSetEditFlag}
                    handlerEditProduct={handlerEditProduct}
                    product={pr}
                    name={pr.name} 
                    price={pr.price} 
                    stock={pr.stock} 
                    categories={[...pr.categories]} 
                    id={pr.id} 
                    img={pr.img} 
                    description={pr.description}/>) )
                : null
            } 
        </Div>
    )
}