import { useNavigate } from "react-router-dom";
import { Div, H1, Button } from "../../../utils/StyledComponents/StyledComponents";
import { useEffect, useState } from "react";
import CardsCart from "./CardsCart";
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
        <Div flexDir="column">
            <Div>
            { 
                "TOTAL: $" + total.toLocaleString()
            }
            </Div>
            <Button onClick={()=>navigate("/shop")}>Volver</Button>

            <CardsCart 
            handlerSetCartFlag={handlerSetCartFlag}
            cart={cart}/>

        </Div>
    )
}