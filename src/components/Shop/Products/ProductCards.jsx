import axios from "axios";
import React, { useEffect, useState } from "react";
import { HOST } from "../../../utils";
import ProductCard from "./ProductCard";
import { Div, P } from "../../../utils/StyledComponents/StyledComponents";
export default function ProductCards ({ path, handlerEditProduct, handlerSetComponentProductListFlag, handlerSetEditFlag, products, handleRemoveItemCart, handlerSetCart}) {
    useEffect(()=>{
        console.log("RENDERING PRODUCTS CARDS !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
    },[products])
    return (
        <Div flWr="wrap" wd="100%"bg="#F8F0F6"pd="4rem 0 1rem 0"br="0">
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
                : <P mt="3rem"hg="10rem"fWeight="bold"fSize="1.8rem"color="#525252"
                    letterSp=".1rem">
                    No se encontraron productos que coincidan con los filtros seleccionados
                  </P>
            } 
        </Div>
    )
}