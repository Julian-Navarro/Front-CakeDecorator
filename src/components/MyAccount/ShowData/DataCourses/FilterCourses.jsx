import React, { useEffect, useState } from "react";

export default function FilterCourses({
  filterCoursesByTypes,
  filterCoursesByCategory,
  allMyCourses,
  noMatch,
}) {
  const [selectType, setSelectType] = useState("");
  const [selectCategory, setSelectCategory] = useState("");
  const [mapMyCoursesTypes, setMapMyCoursesTypes] = useState([]);
  const [mapMyCoursesCategories, setMapMyCoursesCategories] = useState([]);

  function getAllSelectsToFilter() {
    if (allMyCourses.length > 0) {
      allMyCourses.forEach((course) => {
        if (!mapMyCoursesTypes.includes(course.type)) {
          mapMyCoursesTypes.push(course.type);
        }
        if (!mapMyCoursesCategories.includes(course.category)) {
          mapMyCoursesCategories.push(course.category);
        }
      });
    }
  }

  function handlerAllSelectsToFilter(e) {
    // e.preventDefault();
    if (e.target.id === "types") {
      setSelectType(e.target.value);
    } else {
      setSelectCategory(e.target.value);
    }
    const orderReset = document.getElementById("sorted-order");
    orderReset.options.selectedIndex = 0;
  }

  useEffect(() => {
    if (mapMyCoursesCategories.length === 0 && mapMyCoursesTypes.length === 0) {
      getAllSelectsToFilter();
    }
  });

  useEffect(() => {
    if (selectType !== "" || selectCategory !== "") {
      filterCoursesByCategory(selectCategory);
      setSelectCategory("");
      filterCoursesByTypes(selectType);
      setSelectType("");
    }
  });

  return (
    <div>
      <div>
        <label>Tipo de cursada: </label>
        <select
          disabled={noMatch === "no-match"}
          name="types"
          id="types"
          onChange={(e) => [
            handlerAllSelectsToFilter(e),
            filterCoursesByTypes(selectType),
          ]}
        >
          <option value="Todos">Todos</option>
          {mapMyCoursesTypes.length > 0
            ? mapMyCoursesTypes.map((type, id) => (
                <option value={type} key={id}>
                  {type}
                </option>
              ))
            : null}
        </select>
      </div>
      <div>
        <label>Categoría: </label>
        <select
          disabled={noMatch === "no-match"}
          name="category"
          id="category"
          onChange={(e) => [
            handlerAllSelectsToFilter(e),
            filterCoursesByCategory(selectCategory),
          ]}
        >
          <option value="Todos">Todos</option>
          {mapMyCoursesCategories.length > 0
            ? mapMyCoursesCategories.map((category, id) => (
                <option value={category} key={id}>
                  {category}
                </option>
              ))
            : null}
        </select>
      </div>
    </div>
  );
}
