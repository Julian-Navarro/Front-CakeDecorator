import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";
import { HOST } from "../../../../utils/index.js";



export default function FormPostAndEditProducts({ setProductToEdit, product }) {
    const allProducts = useSelector((state) => state.products);
    const [input, setInput] = useState({
        name: "",
        price: "",
        category: "",
        description: "",
        stock: "",
        img: [''],
    });
    function handlerSetInputEditValues() {
        if(product !== undefined) {
            setInput({...product})
        }
    }

    const [errors, setErrors] = useState({
        name: "",
        price: "",
        category: "",
        description: "",
        stock: "",
        img: "",
    })
    
    function validate () {
        const inputValues = Object.entries(input) //genera un arreglo de tuplas de un objeto que vos le pases. Las tuplas son mini arreglos donde vos guardas el key por un lado y el valor por el otro.
        const objectError = {}
        const errorsMessages = {

            name: "el nombre es requerido",
            price: "la precio es requerido",
            category: "La categoría es requerida",
            description: "La descripción es requerida",
            stock: "Debes elegir un stock minimo",
            img: "La imagen es requerida"
        }

        inputValues.forEach(([key, value]) => {
            if(value === "" || value.length === 0 ) {
                return Object.assign(objectError, { 
                [key]: errorsMessages[key]
            })
            }
        })
        return setErrors(objectError)
    }

    useEffect(() => {
        validate()
    }, [input]);

    useEffect(()=>{
        handlerSetInputEditValues()
        console.log("USEEFFCT EDIT ");
    },[product])

    function handlerChange(e) {
        if(e.target.name === "img") {
            setInput({
                ...input,
                [e.target.name]: [e.target.value]
            })
        } else {
            setInput({
                ...input,
                [e.target.name]: e.target.value
            })
        }
      }
    
      async function handlerSubmit (e) {
        e.preventDefault();
        if(allProducts.some((e) => e.name === input.name)){

           return alert("Éste producto ya existe")
        } else {
            await axios.post(`${HOST}/products`, input)
            alert("El Producto ha sido creado con éxito")
            setInput({
                name: "",
                price: "",
                category: "",
                description: "",
                stock: "",
                img: [""],
            })
        }
    }

    return (
    <div>
        <div>
            {product !== undefined 
            ? <h1>Edita tu producto</h1> 
            : <h1>Crea tu Producto</h1>}
            {product !== undefined 
            ? <button onClick={()=>{setProductToEdit(false)}}>Cerrar Edición</button> 
            :null}

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
                {errors.name&&(<p >{errors.name}</p>)}
                <div>
                    <label>Precio:</label>
                    <input
                    type='number'
                    value={input.price}
                    name='price'
                    placeholder='0.00 - 50000.00'
                    min={0.00}
                    max={50000}
                    step={0.01}
                    onChange={e => handlerChange(e)}
                    required={true}
                    />
                </div>
                {errors.price&&(<p >{errors.price}</p>)}
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
                {errors.category&&(<p >{errors.category}</p>)}
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
                {errors.description&&(<p >{errors.description}</p>)}
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
                {errors.stock&&(<p >{errors.stock}</p>)}
                <div>
                    <label>Imagen:</label>
                    <input
                    type='text'
                    value={input.img}
                    name='img'
                    placeholder='Img URL'
                    onChange={e => handlerChange(e)}
                    required={true}
                    />
                </div>
                {errors.img&&(<p >{errors.img}</p>)}
            </div>
            <button type="submit" disabled={!input.name || !input.price || !input.category || !input.description || !input.stock || !input.img}>Crear Producto</button>
    
       </form>

    </div>
    )   
}
