import React from "react";
import { Div, P, Button, H1, Img } from "../../../utils/StyledComponents/StyledComponents";

export default function ProductCard ({name,category, description, id, img, price, stock}) {

    return (
        <Div wd="18rem" flexDir="column"bd="black" mt="1rem" mr="1rem">
            <P bg="red">Producto: {name}</P>
            <Img br=".5rem"wd="100%"src={img} alt="img not found" />
            <P bg="red">Precio: {price}</P>
            <P bg="red">Category: {category}</P>
            <P bg="red">Stock: {stock}</P>
            {/* <P bg="red">Descripción: {description}</P> */}
        </Div>
    )
}