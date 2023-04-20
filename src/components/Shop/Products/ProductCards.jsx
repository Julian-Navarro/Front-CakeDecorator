import axios from "axios";
import React, { useEffect, useState } from "react";
import { HOST } from "../../../utils";
import ProductCard from "./ProductCard";
import { Div } from "../../../utils/StyledComponents/StyledComponents";
export default function ProductCards ({ path, handlerEditProduct, handlerSetEditFlag, products, handleRemoveItemCart, handlerSetCart}) {
    return (
        <Div flWr="wrap" wd="100%">
            {
                products?.length > 0 
                ? products.map((pr) => (<ProductCard 
                    handleRemoveItemCart={handleRemoveItemCart}
                    handlerSetCart={handlerSetCart}
                    key={pr.id}
                    path={path}
                    handlerSetEditFlag={handlerSetEditFlag}
                    handlerEditProduct={handlerEditProduct}
                    product={pr}
                    name={pr.name} 
                    price={pr.price} 
                    stock={pr.stock} 
                    category={pr.category} 
                    id={pr.id} 
                    img={pr.img} 
                    description={pr.description}/>) )
                : null
            } 
        </Div>
    )
}