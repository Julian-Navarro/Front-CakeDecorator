import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductCards from "./Products/ProductCards";
import { HOST } from "../../utils";
import { Div, P } from "../../utils/StyledComponents/StyledComponents"; 
import LeftSideBar from "./LifeSideBar/LeftSideBar";

export default function Shop() {
  const [isOpen, setIsOpen] = useState(false);
  const [flag, setFlag] = useState(false);
  const [allProducts, setAllProducts] = useState([]);
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({
    categories: ["all"],
    brands: ["all"]
  });
  function handlerSetFilters(e) {
    if(e.target.value === "all") {
      console.log(`Caso value All en key: ${e.target.name}`);
      setFilters({
        ...filters,
        [e.target.name]: ["all"]
      })
    } else {
      console.log(`Caso NO es All en key: ${e.target.name}`);
      if(!filters[e.target.name].includes("all")) {
        console.log("Caso all no está");
        if(filters[e.target.name].includes(e.target.value)) {
          console.log("Caso hay que borrar el valor");
          if(filters[e.target.name].length === 1){
            console.log("Caso borrar Length es 1");
            setFilters({
             ...filters,
             [e.target.name]: ["all"]
            });
          } else {
            console.log("Caso borrar y length no es 1");
            let index = filters[e.target.name].indexOf(e.target.value)
            let firstPart = filters[e.target.name].slice(0, index);  //? Se puede poner directamente el resultado de .slice() en el setFilters
            let secondPart = filters[e.target.name].slice(index + 1);//? Se puede poner directamente el resultado de .slice() en el setFilters
            setFilters({
              ...filters,
              [e.target.name]: [...firstPart, ...secondPart]
            });
          };
        } else {
          console.log("Caso no incluye el valor");
          setFilters({
            ...filters,
            [e.target.name]: [...filters[e.target.name], e.target.value]
          }); 
        };
      } else {
        console.log("Caso el primer valor es 'all' ");
        console.log("VALUE: ", e.target.value);
        console.log(filters[e.target.name][0]);
          setFilters({
          ...filters,
          [e.target.name]: [e.target.value]
        }); 
      };
    };
  };
  function applyFilters() {
    const filteredProducts = [];
    if(filters.categories[0] === "all" && filters.brands[0] === "all") {
      console.log("Caso todo ALL");
      setProducts(allProducts)
    } else if(filters.categories[0] !== "all" && filters.brands[0] !== "all") {
      console.log("Caso ninguno es ALL, hay que filtrar ambos");
      allProducts.forEach((pr)=> {
        let strCategories = pr.categories.join(" "); 
        let brandFlag = false;
        let categoryFlag = false;
        filters.brands.forEach((br)=> pr.brand === br ?brandFlag=true:null);
        filters.categories.forEach((cat)=>strCategories.includes(cat)?categoryFlag=true:null);
        if(brandFlag && categoryFlag) {
          filteredProducts.push(pr)
        }
      });     
      setProducts(filteredProducts)
    } else if(filters.categories[0] === "all") {
      console.log("Caso hay que filtrar un valor");
      console.log("Caso hay que filtrar por marca");
      allProducts.forEach((pr)=> {
        let flag = false;
        filters.brands.forEach((br)=>pr.brand===br?flag=true:null)
        if(flag) { 
          filteredProducts.push(pr)
        }
      });
      setProducts(filteredProducts)
    } else {
      console.log("Caso hay que filtrar un valor");
      console.log("Caso hay que filtrar por categoria");
      allProducts.forEach((pr)=> {
        let flag = false;
        let str = pr.categories.join(" ");
        filters.categories.forEach((cat)=>str.includes(cat)?flag=true:null);
        if(flag) {
          filteredProducts.push(pr)
        }
      });
      setProducts(filteredProducts)
    }
  }

  function handlerSearchProducts (value) {
    setProducts(allProducts.filter((pr)=>pr.name.toLowerCase().includes(value.toLowerCase())))
  }
  function handlerSetProductsCategory(value) {

    if(value === "default") {
      setProducts(allProducts)
    } else {
      let array = []
      allProducts.forEach((pr)=>pr.categories.forEach((cat)=>cat===value?array.push(pr):null))
      setProducts(array)
    }
  }
  function handlerSetProductsBrands(value) {
    if(value === "default") {
      setProducts()
    }
  }
  async function getProductsDB() {
    const productsDB = await axios.get(`${HOST}/products`);
    setAllProducts(productsDB.data);
    setProducts(productsDB.data);
    setFlag(!flag);
  }

  //!  ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓ LOGICAS SETEADO DE CARRITO LOCALSTORAGE ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓

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
            if(amountToAdd <= stock) {
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

  //!  ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑ LOGICAS SETEADO DE CARRITO LOCALSTORAGE ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
  useEffect(() => {
    // console.log("RENDERING SHOP!");
    getProductsDB();
    // console.log("PRODUCTS: ", products);
  }, []);

  useEffect(() => {
    console.log("RENDERING SHOP!");
    console.log("FILTERS {}: ", filters);
    applyFilters()
  }, [flag, filters]);

  return (
    <Div flexDir="column" wd="100%"bg="#fff"br="0">
      <Div>


      <Div minHg="100vh"wd="100%"bg="transparent"
      jfCont="space-between"
      >
        {/* <Div mr="3rem"flexDir="column"alSelf="flex-start"pos="sticky"wd={isOpen?"14rem":"3rem"}posTop="0px"mt="0px"alItems="flex-start"> */}
          {/* <LeftSideBar handlerSetFilters={handlerSetFilters} handlerSetProductsCategory={handlerSetProductsCategory}handlerSetProductsBrands={handlerSetProductsBrands} setIsOpen={setIsOpen}isOpen={isOpen}filters={filters}/> */}
        {/* </Div> */}
        { 
        products.length 
        ? 
        <Div posTop="-53px"wd="100%"bg="transparent">
          <br /><br /><br />
          <ProductCards
          handlerSetCart={handlerSetCart}
          handleRemoveItemCart={handleRemoveItemCart}
          products={products}
          />
        </Div>
        : <P wd="100%">Cargando Productos</P>
      }
      </Div>
      </Div>
      <br/>

    </Div>
  );
}
