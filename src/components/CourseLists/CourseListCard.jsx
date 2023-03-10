import React from "react";
import "./CourseListCard.css"

export default function CourseListCard ({ type, category, description, id, img, price, title, videos }) {
    // let newDescription = description
    // if(description.length > 100) {
    //     newDescription = description.slice(0, 100) + "..."
    // }

    return (
        <div className="divContainerCard">
            <h3 className="cardTitle">{title}</h3>
            <img src={img} alt="img not found" />    
            <div className="divCardH4">
                {/* <h4 className="h4card">{newDescription}</h4> */}
                <p>Categoría: {category}</p>
                <p>Modalidad: {type}</p>
                <p>Precio: ${price}</p>
                {/* <p className="h4card">Cantidad de videos: {videos.length}</p> */}
            </div>
            <div className="divCardButtons">
                <button>Ver Detalles</button>
                <button>Comprar Curso</button>
            </div>
        </div>
    )
}