import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductCards from "./Products/ProductCards";
import { HOST } from "../../utils";
import Navbar from "../Navbar/Navbar";
import { Div, Button, H1, Img } from "../../utils/StyledComponents/StyledComponents"; 
import LeftSideBar from "./LifeSideBar/LeftSideBar";
import { ShopNavbar } from "./ShopNavbar";

export default function Shop() {
  const [flag, setFlag] = useState(false);
  const [allProducts, setAllProducts] = useState([]);
  const [products, setProducts] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  function handlerSearchProducts (value) {
    setProducts(allProducts.filter((pr)=>pr.name.toLowerCase().includes(value.toLowerCase())))
  }
  function handlerSetProducts(value) {
    if(value === "default") {
      setProducts(allProducts)
    } else {
      setProducts(allProducts.filter((pr)=>pr.category === value))
    }
  }
  async function getProductsDB() {
    const productsDB = await axios.get(`${HOST}/products`);
    setAllProducts(productsDB.data);
    setProducts(productsDB.data);
    setFlag(!flag);
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

  const handlerSetCart = (e, {id, price, img, name, stock, amountToAdd}) => {
    e.preventDefault();

    try {
      let product = {
        name,
        img,
        price,
        id,
        stock,
        amount: amountToAdd, 
      };
      let oldCart = JSON.parse(window.localStorage.getItem("cart"));

      if (oldCart) {
        //! CASO TENGO CARRITO 
        //? Recorro oldcart y busco si en el carrito existe el producto que se quiere agregar, guardo su index
        let index = false;
        oldCart.forEach((pr, i) => {
          if (pr.id === product.id) { //? Se puede sacar "product."
            index = i;
          }
        });
        //? Pregunto si encontré en oldcart el producto que quiero agregar nuevamente
        if (index !== false) {
          console.log("SARASA");
          if (stock >= oldCart[index].amount + amountToAdd) {
            console.log("CASO HAY CARRITO HAY INDEX & NO SE SUPERA EL STOCK",JSON.parse(localStorage.getItem("cart")));

            oldCart[index].amount += amountToAdd;
            oldCart[index].total = oldCart[index].price * oldCart[index].amount;
            let newCart = window.localStorage.setItem(
              "cart",
              JSON.stringify([...oldCart])
            );
            getProductsDB(); //! NO SÉ SI HACE FALTA ESTA LINEA
            return alert(`Agregaste de nuevo el producto ${name}`);
          } else {
            console.log("CASO HAY CARRITO HAY INDEX & SE SUPERA EL STOCK DISPONIBLE");
            oldCart[index].amount = stock
            oldCart[index].total = stock * oldCart[index].price;
            window.localStorage.setItem(
              "cart",
              JSON.stringify([...oldCart])
            );
            console.log("SARACATUNGA");

            return alert("La cantidad que se quiere agregar excede el stock");
          }
        } else {
          console.log(
            "CASO SI EXISTE CARRITO Y NOOOOO TENGO INDEX",
            JSON.parse(localStorage.getItem("cart"))
          );
          if (stock !== 0) {
            if(amountToAdd < stock) {
              product.total = product.price * amountToAdd;
              let newCart = window.localStorage.setItem(
                "cart",
                JSON.stringify([...oldCart, product])
              );
            } else {
              product.total = product.price * stock;
              product.amount = stock
              let newCart = window.localStorage.setItem(
                "cart",
                JSON.stringify([...oldCart, product])
              );
              return alert("La cantidad solicitada excede el stock")
            }
            getProductsDB();
            return alert(`Agregaste ${amountToAdd} producto/s de ${name}`);
          } else {
            return alert("El producto no tiene stock");
          }
        }
      } else {
        console.log("CASO NO EXISTE CARRITO", JSON.parse(localStorage.getItem("cart")));
        if (stock !== 0) {
          if(amountToAdd < stock) {
            product.total = product.price * amountToAdd; //! agregado "* amountToAdd"
  
            let newCart = window.localStorage.setItem(
              "cart",
              JSON.stringify([product])
            );
            getProductsDB(); //! NO SÉ SI HACE FALTA ESTA LINEA
            return alert(`Agregaste el producto ${name}`);
          } else {
              product.total = product.price * stock;
              product.amount = stock
              let newCart = window.localStorage.setItem(
                "cart",
                JSON.stringify([product])
              );           
              alert("La cantidad solicitada excede el stock actual")
          }
        } else {
          return alert("El producto no tiene stock");
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  //!  ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑ LOGICAS SETEADO DE CARRITO LOCALSTORAG ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
  useEffect(() => {
    console.log("RENDERING SHOP!");
    getProductsDB();
    // console.log("PRODUCTS: ", products);
  }, []);

  useEffect(() => {
    console.log("RENDERING SHOP!");
  }, [flag, cart]);
  return (
    <Div flexDir="column" wd="100%">
      <Div wd="100%">
        <Navbar/>
      </Div>
        <ShopNavbar isOpen={isOpen} setIsOpen={setIsOpen} handlerSearchProducts={handlerSearchProducts}/>
      <Div wd="100%" bg="lightgray">
        
        <LeftSideBar handlerSetProducts={handlerSetProducts} isOpen={isOpen} setIsOpen={setIsOpen}/>
        
        <ProductCards
          handlerSetCart={handlerSetCart}
          handleRemoveItemCart={handleRemoveItemCart}
          products={products}
          />
      </Div>

    </Div>
  );
}
