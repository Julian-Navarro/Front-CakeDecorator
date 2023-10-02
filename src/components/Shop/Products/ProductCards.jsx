import axios from "axios";
import React, { useEffect, useState } from "react";
import { HOST } from "../../../utils";
import ProductCard from "./ProductCard";
import { Div, P } from "../../../utils/StyledComponents/StyledComponents";
export default function ProductCards ({ path, handlerEditProduct, handlerSetComponentProductListFlag, handlerSetEditFlag, products, handleRemoveItemCart, handlerSetCart, displayOption, breakPoint}) {
    useEffect(()=>{
    },[products, breakPoint])
    return (
        <Div flWr={breakPoint!="1"?displayOption==="grid"?"wrap":"":"wrap"}
            flexDir={breakPoint!="1"?displayOption==="line"?"column":"row":"row"}
            wd="100%"bg="#F8F0F6"pd="0"mt="2.5rem"
            br="0"jfCont="space-evenly"
            >
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
                    description={pr.description}
                    displayOption={displayOption}
                    breakPoint={breakPoint}
                    />) )
                : <P mt="3rem"hg="10rem"fWeight="bold"fSize="1.8rem"color="#525252"
                    letterSp=".1rem">
                    No se encontraron productos que coincidan con los filtros seleccionados
                  </P>
            } 
        </Div>
    )
}