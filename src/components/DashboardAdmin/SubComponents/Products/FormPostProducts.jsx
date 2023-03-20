import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postProduct } from '../../../../redux/actions.js'
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
        img: [""],
      });

    const [errors, setErrors] = useState({
        name: "",
        price: "",
        category: "",
        description: "",
        stock: "",
        img: "",
    })
    
    useEffect(() => {
        dispatch(getCourses()) // action y reducer no creada, revisar y crear. No olvidarse
      }, []);

    

    useEffect(() => {
        // validate()           //el validate todavía no está desarrollado, crear.
      }, [input]);

    function handlerChange(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
      }
    
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
                    <input
                    type='text'
                    value={input.name}
                    name='name'
                    placeholder='Producto'
                    onChange={e => handlerChange(e)}
                    required={true}
                    />
                </div>

                <div>
                    <label>Precio:</label>
                    <input
                    type='number'
                    value={input.price}
                    name='price'
                    placeholder='0.00 - 5000.00'
                    min={0.00}
                    max={50000}
                    step={0.01}
                    onChange={e => handlerChange(e)}
                    required={true}
                    />
                </div>

                <div>
                    <label>Categoría:</label>
                    <input
                    type='text'
                    value={input.category}
                    name='category'
                    placeholder='Categoría'
                    onChange={e => handlerChange(e)}
                    required={true}
                    />
                </div>

                <div>
                    <label>Descripción:</label>
                    <input
                    type='text'
                    value={input.description}
                    name='description'
                    placeholder='Descripción'
                    onChange={e => handlerChange(e)}
                    required={true}
                    />
                </div>

                <div>
                    <label>Stock:</label>
                    <input
                    type='number'
                    value={input.stock}
                    name='stock'
                    placeholder='0.00 - 100.00'
                    min={0.00}
                    max={50000}
                    step={0.01}
                    onChange={e => handlerChange(e)}
                    required={true}
                    />
                </div>

                <div>
                    <label>Imagen:</label>
                    <input
                    type='text'
                    value={input.img}
                    name='image'
                    placeholder='Colocar un link con la imagen'
                    onChange={e => handlerChange(e)}
                    required={true}
                    />
                </div>
            </div>
        </form>

    </div>
    )   
}
