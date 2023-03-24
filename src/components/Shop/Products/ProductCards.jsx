import axios from "axios";
import React, { useEffect, useState } from "react";
import { HOST } from "../../../utils";
import ProductCard from "./ProductCard";
import { Div } from "../../../utils/StyledComponents/StyledComponents";
export default function ProductCards () {
    let [products, setProducts] = useState(false);
    async function getProducts() {
        products = await axios.get(`${HOST}/products`)
        setProducts(products.data)
        console.log("PRODUCTS: ",products.data);
    }
    useEffect(()=>{
        getProducts()
    },[])
    return (
        <Div flWr="wrap" wd="100%">
            {
                products?.length > 0 
                ? products.map((pr) => (<ProductCard name={pr.name} price={pr.price} stock={pr.stock} category={pr.category} id={pr.id} img={pr.img} description={pr.description}/>) )
                : "null"
            } 
        </Div>
    )
}