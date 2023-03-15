import React from "react";
import "./CourseListCard.css"

export default function CourseListCard ({ course, path, type, category, description, id, img, price, title, videos }) {
    
    function handlerEditCourse(e) {
        e.preventDefault();
        console.log(course);
    }
    return (
        <div className="divContainerCard">
            <h3 className="cardTitle">{title}</h3>
            <img src={img} alt="img not found" />    
            <div className="divCardH4">
                <p>Categoría: {category}</p>
                <p>Modalidad: {type}</p>
                <p>Precio: ${price}</p>
            </div>
            <div className="divCardButtons">
                <button>Ver Detalles</button>
                {
                  path === "adm"
                  ?<button onClick={(e)=>{handlerEditCourse(e)}}>Editar</button>
                  :<button>Comprar Curso</button>
                }
            </div>
        </div>
    )
}