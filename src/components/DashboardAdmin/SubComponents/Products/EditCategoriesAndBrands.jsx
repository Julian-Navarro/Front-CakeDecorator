import React, { useEffect, useState } from "react";
import { HOST } from "../../../../utils";
import axios from "axios";
import s from "./EditCategoriesAndBrands.module.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MdDeleteForever } from "react-icons/md"
import iconDelete from "../../../../utils/IMAGES/ic_round-delete-forever.png"
export default function CreateCategoriesAndBrands () {
    const [categories, setCategories] = useState([]);
    const [brands, setBrands] =useState([])
    const [flag, setFlag] = useState(false);
    const [input, setInput] = useState({
        category: "",
        brand: ""
    });
    function handlerSetInput(e){
        setInput({
            ...input,
            [e.target.name]: e.target.value
        }) 
    }
    function notify (succes, msg) {
        toast[succes](msg);
    };
    async function getCategories(){
        const categoriesDB = await axios.get(`${HOST}/categories`)
        setCategories(categoriesDB.data)
    };
    async function getBrands(){
        const brandsDB = await axios.get(`${HOST}/brands`)
        setBrands(brandsDB.data)
    };

    async function handlerDeleteCategory(e) {
        try {
            await axios.delete(`${HOST}/categories?id=${e.target.value}`)
            notify('info',
                 `Eliminaste la categoría ${e.target.name}`
                )            
            setFlag(!flag)
        } catch (error) {
            console.log(error);
            notify('error', 'Error eliminando categoría')
        }
    }
    async function handlerDeleteBrand(e) {
        try {
        await axios.delete(`${HOST}/brands?id=${e.target.value}`)
        setFlag(!flag)
        notify('info',`Eliminaste la marca ${e.target.name}`)            
        } catch (error) {
            console.log(error);
            notify("error", "Error eliminando Marca")
        }

    };


    async function handleCreateCategory() {
        if(input.category.trim() === "") return notify("warning", "Categoría vacía")
        try {
            await axios.post(`${HOST}/categories`, {category: input.category.trim()});
            notify('success', `Creaste la categoría ${input.category}`);
            setInput({
                ...input,
                category: ""
            });
            setFlag(!flag);            
        } catch (error) {
            error.response?.data?.parent?.detail
            ? notify('error', error.response?.data?.parent?.detail)
            : notify('error', "Error creando categoría")
            console.log(error);
        }

    };
    async function handleCreateBrand() {
    try {
        if(input.brand.trim() === "") return notify('warning', 'Marca vacía')  
        await axios.post(`${HOST}/brands`, { name: input.brand.trim() })
        notify('success',`Creaste la marca ${input.brand}`)
        setInput({
            ...input,
            brand: ""
        });
        setFlag(!flag);
    } catch (error) {
        console.log(error);
        error.response?.data?.parent?.detail
        ? notify('error', error.response?.data?.parent?.detail)
        : notify('error', "Error creando categoría")
    }
    }


useEffect(()=>{
    getCategories()
    getBrands()
},[flag])
useEffect(()=>{
    // console.log(brands, categories)
},[categories, input])
    return (
        <div className={s.container}>

            <div className={s.divCategories}>

                <p className={s.categoriesTitle}>
                    Crea o elimina categorias de productos
                </p>
                <div className={s.divInputCategories}>
                    <input type="text"name="category"value={input.category}onChange={(e)=>handlerSetInput(e)}/>
                    <button onClick={()=>{handleCreateCategory()}}>
                        Crear
                    </button>
                </div>
                <div className={s.currentCategories}>

                {
                    categories.length > 0 
                    ? categories.map((cat) => 
                    <div key={cat.id}>
                        <p>{cat.category}</p>
                        <img src={iconDelete}className={s.imgDelete}
                            onClick={(e)=>handlerDeleteCategory({
                                target: { 
                                    value: cat.id,
                                    name: cat.category
                                }})
                            }
                        />
                    </div>)
                    : <p>No hay categorias creadas</p>
                }
                </div>
            </div>


<br /><br />

            <div className={s.divBrands}>

                <p className={s.brandsTitle}>
                    Crea o elimina marcas de productos
                </p>
                <div className={s.divInputBrands}>
                    <input type="text"name="brand"
                        value={input.brand}
                        onChange={(e)=>handlerSetInput(e)}/>
                    <button onClick={()=>{handleCreateBrand()}}>
                        Crear
                    </button>
                </div>


                <div className={s.currentBrands}>
                    {
                    
                    brands.length > 0 
                    ? brands.map((br) => 
                    <div key={br.id}>
                        <p>{br.brand}</p>
                        <img src={iconDelete}className={s.imgDelete}
                            onClick={(e)=>handlerDeleteBrand({
                                target: { 
                                    value:br.id,
                                    name:br.brand
                                }})
                            }
                        />
                    </div>)
                    : <p>No hay marcas creadas</p>
                    }
                </div>
            </div>
            <ToastContainer
                position="bottom-right"
                autoClose={8000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </div>
    )
}