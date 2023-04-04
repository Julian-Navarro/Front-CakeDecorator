import React from "react";


export default function ShowMyCourses({allMyCourses}) {
  
  return (
    <div>
      <h1>Cursos para ver</h1>
      <div>
        {allMyCourses? allMyCourses.map((course)=> (
          <div>
            <h2>{course.title}</h2>
            <div>
              <h3>{course.category}</h3>
            </div>
            <div>
              <h4>{course.img}</h4>
            </div>
            <div>
              <h4>{course.type}</h4>
            </div>
            <button>Reproducir</button>
            <button>Ver Detalles</button>
          </div>
        )) : (<div><p>No hay cursos</p></div> )}
      </div>
    </div>
  );
}
