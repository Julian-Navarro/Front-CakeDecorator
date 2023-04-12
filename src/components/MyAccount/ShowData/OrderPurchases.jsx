import React, {useState, useEffect} from "react";

export default function OrderByName({allMyProducts}){




    return(
        <div>
            <label >Ordenar: </label>
            <select name="" id="">
                <option value="ascendente">A-Z</option>
                <option value="descendente">Z-A</option>
            </select>
        </div>
    )
}