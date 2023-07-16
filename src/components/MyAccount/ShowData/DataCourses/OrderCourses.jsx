import React, { useEffect, useState } from "react";

export default function OrderCourses({
  allMyCourses,
  getSortedCoursesByName,
  noMatch,
}) {
  const [sortedByNameCourses, setSortedCourses] = useState([]);
  const [select, setSelect] = useState("");

  function handlerSelect(e) {
    setSelect(e.target.value);
    const filterCategoryReset = document.getElementById("category");
    const filterTypeReset = document.getElementById("types");
    filterCategoryReset.options.selectedIndex = 0;
    filterTypeReset.options.selectedIndex = 0;
  }

  function sortedArray(e) {
    if (e.target.value === "default") {
      setSortedCourses(allMyCourses);
    } else if (e.target.value === "ascendente") {
      const sorted_A_Z = allMyCourses
        .map((course) => course)
        .sort((a, b) => {
          if (a.title > b.title) {
            return 1;
          }
          if (b.title > a.title) {
            return -1;
          } else {
            return 0;
          }
        });
      setSortedCourses(sorted_A_Z);
    } else {
      const sorted_Z_A = allMyCourses
        .map((course) => course)
        .sort((a, b) => {
          if (a.title > b.title) {
            return -1;
          }
          if (b.title > a.title) {
            return 1;
          } else {
            return 0;
          }
        });
      setSortedCourses(sorted_Z_A);
    }
  }

  useEffect(() => {
    if (select !== "") {
      getSortedCoursesByName(sortedByNameCourses);
      setSelect("");
    }
  });

  return (
    <div>
      <select
        disabled={noMatch === "no-match"}
        name="sorted-order"
        id="sorted-order"
        onChange={(e) => [
          handlerSelect(e),
          sortedArray(e),
          getSortedCoursesByName(sortedByNameCourses),
        ]}
      >
        <option value="default">Ordenar por titulo</option>
        <option value="ascendente">A-Z</option>
        <option value="descendente">Z-A</option>
      </select>
    </div>
  );
}
