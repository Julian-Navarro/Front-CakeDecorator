import React, { useEffect } from "react";

export default function CourseCard({ title, type, category, img, videos }) {
  useEffect(() => {
    console.log("ME RENDERIZO EN CARD");
  }, []);
  return (
    <div>
      <div>
        <img src={img} alt="Sin imagen" height={"200px"} width={"200px"} />
        <h3>{title}</h3>
        <h3>{type}</h3>
        <h3>{category}</h3>
        <h3>{videos}</h3>
      </div>
    </div>
  );
}
