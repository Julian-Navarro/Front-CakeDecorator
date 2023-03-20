import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from 'react-router-dom';

export default function Products() {
    const dispatch = useDispatch();
    const allProducts = useSelector((state) => state.products);
    const history = useHistory();
    // const allProduct = useSelector((state) => state.product); 

    const [input, setInput] = useState({
        name: "",
        price: "",
        category: "",
        description: "",
        stock: "",
        image: [""],
      });

    const [errors, setErrors] = useState({
        name: "",
        price: "",
        category: "",
        description: "",
        stock: "",
        image: "",
    })
    
    useEffect(() => {
        dispatch(getCourses()) // action y reducer no creada, revisar y crear. No olvidarse
      }, []);

    

    useEffect(() => {
        // validate()           //el validate todavía no está desarrollado, crear.
      }, [input]);

    
      function handlerSubmit (e) {
        e.preventDefault();
        if(allProducts.some((e) => e.name === input.name)){

           return alert("Éste profucto ya existe")
        } else {

            dispatch(postProduct(input))    //crear el Action y el reducer de postProduct
            alert("El Producto ha sido creado con éxito")
            setInput({
                name: "",
                price: "",
                category: "",
                description: "",
                stock: "",
                image: [""],
            })
            history.push('/home')
        }
    }


    return (
    <div>
        <div>
            <h1>Crea tu Producto</h1>
        </div>
        <form onSubmit={e => handlerSubmit(e)}>
            <div>
                <div>
                    <label>Nombre:</label>
                    <input/>
                </div>

                <div>
                    <label>Precio:</label>
                    <input/>
                </div>

                <div>
                    <label>Categoría:</label>
                    <input/>
                </div>

                <div>
                    <label>Descripción:</label>
                    <input/>
                </div>

                <div>
                    <label>Stock:</label>
                    <input/>
                </div>

                <div>
                    <label>Imagen:</label>
                    <input/>
                </div>
            </div>
        </form>

    </div>
    )   
}
