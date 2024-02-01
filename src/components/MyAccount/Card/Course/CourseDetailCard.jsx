import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { HOST } from "../../../../utils";

export default function CourseDetailCard() {
  const [myCourse, setMyCourse] = useState([]);
  const productId = useParams();
  async function getMyCourseDetail() {
    const oneCourse = await axios.get(`${HOST}/courses/id?id=${productId.id}`);
    setMyCourse(oneCourse.data);
  }

  useEffect(() => {
    // console.log("ME RENDERIZO EN COURSE DETAILE 1");
    getMyCourseDetail();
  },[]);

  useEffect(() => {
    // if (typeof myCourse === "object") {
    //   console.log("ME RENDERIZO EN COURSE DETAILE 2");
    // }
  }, [myCourse, productId]);
  return (
    <div>
      <h1>Detalles del curso</h1>
      <div>
        <img
          src={myCourse.img}
          alt="Sin imagen"
          height={"250px"}
          width={"250px"}
        />
        <h3>Nombre: {myCourse.title}</h3>
        <h3>Tipo: {myCourse.type}</h3>
        <h3>Categoria: {myCourse.category}</h3>
        <h3>Videos: {myCourse.videos}</h3>
        <h3>Descripción: {myCourse.description}</h3>

        <Link to={`/myAccount`}>
          <button>Volver atrás</button>
        </Link>
      </div>
    </div>
  );
}
