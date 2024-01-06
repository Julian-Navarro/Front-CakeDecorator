import { useNavigate } from "react-router-dom";
import { Div, H1, Button, P } from "../../../utils/StyledComponents/StyledComponents";
import { useEffect, useState } from "react";
import CardsCart from "./CardsCart";
import s from "./Cart.module.css"
export default function Cart () {
    const navigate = useNavigate()
    const cart = JSON.parse(localStorage.getItem("cart"))
    const [cartFlag, setCartFlag] = useState(false);
    const total = cart?.reduce((acc, el) => acc + el.total, 0);
    function handlerSetCartFlag(){
        setCartFlag(!cartFlag)
    }
    useEffect(()=>{
        // console.log("Rendering CART");
        // console.log("CART FLAG: ", cartFlag);
    },[cartFlag])
    return (
        // <Div flexDir="column"wd="100%"mt="1.8rem"bg="#fff"br="0"> 
        //     <Div hg="10rem"wd="100%"jfCont="space-between"
        //     pd="0 0 0 1rem"alItems="center"
        //     bg=""
        //     >
        //       <Button wd="20%"onClick={()=>navigate("/shop")}
        //          bg="#333">
        //          Seguir comprando
        //       </Button>
        //       <Div wd="20%"hg="100%"brL=""flexDir="column"
        //          jfCont="space-between"bdL="2px solid #333"br="0">
        //         <P bg="#333"color="#fff"wd="100%"
        //           br="0">
        //              Total del carrito
        //         </P>
        //         <P>${total.toLocaleString()}</P>
        //         <Button wd="60%">Pagar</Button>          
        //       </Div>
        //     </Div>

        //     <CardsCart 
        //     handlerSetCartFlag={handlerSetCartFlag}
        //     cart={cart}/>

        // </Div>
        //!!!!!!!!!!!!!!!!!!!!!!!!!!!!! 05-01-24
        <div className={s.container}>
            <button onClick={()=>navigate("/shop")}
            className={s.btnBack}>
              Seguir comprando
            </button>
            <CardsCart 
            handlerSetCartFlag={handlerSetCartFlag}
            cart={cart}total={total}/>
        </div>
    )
}