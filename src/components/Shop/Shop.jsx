import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductCards from "./Products/ProductCards";
import { HOST } from "../../utils";

export default function Shop () {
    const [flag, setFlag] = useState(false);
    const [allProducts, setAllProducts] = useState([])
    const [products, setProducts] = useState([])
    async function getProductsDB() {
        const productsDB = await axios.get(`${HOST}/products`);
        setAllProducts(productsDB.data)
        setProducts(productsDB.data)
        setFlag(!flag)
    }

    
    //!  ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓ LOGICAS SETEADO DE CARRITO LOCALSTORAG ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓

    const [cart, setCart] = useState();

  function handleRemoveItemCart(e, id) {
    e.preventDefault();
    try {
      let currentCart = JSON.parse(window.localStorage.getItem("cart"));
      let flag = false;
      let index;
      currentCart.forEach((pr, i) => {
        if (pr.id === id) {
          flag = true;
          index = i;
        }
      });

      if (flag) {
        // console.log("CASO FLAG TRUE");
        if (currentCart[index].amount === 1) {
          // console.log("CASO FLAG TRUE & AMOUNT == 1");
          if (index === 0) {
            // console.log("CASO FLAG TRUE & AMOUNT == 1 & INDEX === 0");
            currentCart.shift();
            // console.log(currentCart);
          }
        } else {
          // console.log("CASO FLAG TRUE & AMOUNT !== 0");
        }
      } else {
        // console.log("CASO FLAG FALSE");
      }
    } catch (error) {
      console.log(error);
    }
  }

  const handlerSetCart = (e, id, price, image, name, stock) => {
    e.preventDefault();

    try {
      let product = {
        name,
        image,
        price,
        id,
        stock,
        amount: 1,
      };
      let oldCart = JSON.parse(window.localStorage.getItem("cart"));

      if (oldCart) {
        let index = false;
        oldCart.forEach((pr, i) => {
          if (pr.id === product.id) {
            index = i;
          }
        });
        if (index !== false) {
          if (stock === oldCart[index].amount) { //! SAQUÉ "stock === 0 ||..."" del if 
            return alert("Se llegó al limite de stock actual");
          } else {
            oldCart[index].amount += 1;

            oldCart[index].total = oldCart[index].price * oldCart[index].amount;
            let newCart = window.localStorage.setItem(
              "cart",
              JSON.stringify([...oldCart])
            );
            getProductsDB()
console.log("CASO SI EXISTE CARRITO Y SIIIII TENGO INDEX",JSON.parse(localStorage.getItem("cart")));
            return alert(`Agregaste de nuevo el producto ${name}`);
          }
        } else {
          if (stock !== 0) {
            product.total = product.price;
            let newCart = window.localStorage.setItem(
              "cart",
              JSON.stringify([...oldCart, product])
            );
            getProductsDB()
            console.log(
              "CASO SI EXISTE CARRITO Y NOOOOO TENGO INDEX",
              JSON.parse(localStorage.getItem("cart"))
            );
            return alert(`Agregaste el producto ${name}`);
          } else {
            return alert("El producto no tiene stock");
          }
        }
      } else {
        if (stock !== 0) {
          product.total = product.price;
          let newCart = window.localStorage.setItem(
            "cart",
            JSON.stringify([product])
          );
          getProductsDB()
          console.log(
            "CASO NO EXISTE CARRITO",
            JSON.parse(localStorage.getItem("cart"))
          );
          return alert(`Agregaste el producto ${name}`);
        } else {
          return alert("El producto no tiene stock");
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

    //!  ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑ LOGICAS SETEADO DE CARRITO LOCALSTORAG ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
useEffect(()=>{
    console.log("RENDERING SHOP!");
    console.log("PRODUCTS: ", products);
    getProductsDB()
},[])
useEffect(()=>{
    
},[flag, cart])
    return (
        <div>
            <h1>Shop</h1>
            <ProductCards 
                handlerSetCart={handlerSetCart}
                handleRemoveItemCart={handleRemoveItemCart}   
                products={products}
            />
        </div>
    )
}