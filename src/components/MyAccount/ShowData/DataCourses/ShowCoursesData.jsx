import React, { useEffect, useState } from "react";
import axios from "axios";
import { HOST } from "../../../../utils";
import CoursesCards from "../../Cards/Courses/CoursesCards";
import SearchCourses from "./SearchCourses";
import FilterCourses from "./FilterCourses";
import OrderCourses from "./OrderCourses";

export default function ShowCoursesData() {
  const userInfo = JSON.parse(localStorage.getItem("loggedUser"));

  const [allMyCourses, setAllMyCourses] = useState([]);
  const [myCourses, setMyCourses] = useState([]);
  const [noMatch, setNoMatch] = useState("");

  // const [selectType, setSelectType] = useState("");
  // const [input, setInput] = useState("");

  // console.log("SELECT STATE", selectType);
  // console.log("COPY", myCourses);

  async function getMyCourses() {
    const response = await axios.get(
      `${HOST}/courses/getUserCourses?id=${userInfo.id}`
    );
    if (response.data.length > 0 || response.data !== false) {
      setAllMyCourses(response.data);
      setMyCourses(response.data);
    }
  }

  function getCoursesByName(input) {
    // console.log("LLEGAA!!", input);
    if (input !== "") {
      const inputTrim = input.toLowerCase().trim();
      const searched = [];
      allMyCourses.forEach((course) => {
        if (course.title.toLowerCase().indexOf(inputTrim) !== -1) {
          searched.push(course);
        }
      });
      if (searched.length > 0) {
        setMyCourses(searched);
        setNoMatch("");
      } else {
        setNoMatch("no-match");
      }
    }
  }

  async function filterCoursesByTypes(select) {
    // setSelectType(select);
    // setInput("");

    if (select !== "" || select !== undefined) {
      const filtered = allMyCourses.filter((course) => course.type === select);
      if (filtered.length > 0) {
        setMyCourses(filtered);
      }
    }
    if (select === "Todos") {
      await getMyCourses();
    }
  }

  async function filterCoursesByCategory(select) {
    // setSelectType(select);
    // setInput("");

    // console.log("SElECT PADRE", select);
    if (select !== "" || select !== undefined) {
      const filtered = allMyCourses.filter(
        (course) => course.category === select
      );
      if (filtered.length > 0) {
        setMyCourses(filtered);
      }
    }
    if (select === "Todos") {
      await getMyCourses();
    }
  }

  async function getSortedCoursesByName(sortedByNameCourses) {
    if (sortedByNameCourses.length > 0) {
      setMyCourses(sortedByNameCourses);
    }
  }

  const resetCourses = async () => {
    const select = document.getElementById("types"); //Para reiniciar el select filter => defaultValue
    const select2 = document.getElementById("category"); 
    const orderOptions = document.getElementById("sorted-order"); 
    select.options.selectedIndex = 0;
    select2.options.selectedIndex = 0;
    orderOptions.options.selectedIndex = 0;
    await getMyCourses();
    setNoMatch("");
  };

  useEffect(() => {
    if (allMyCourses.length === 0 && myCourses.length === 0) {
      getMyCourses();
    }
  }, [allMyCourses]);

  return (
    <div>
      <h1>Explora tus cursos</h1>
      <SearchCourses
        allMyCourses={allMyCourses}
        getCoursesByName={getCoursesByName}
        resetCourses={resetCourses}
      />
      <FilterCourses
        filterCoursesByTypes={filterCoursesByTypes}
        filterCoursesByCategory={filterCoursesByCategory}
        allMyCourses={allMyCourses}
        noMatch={noMatch}
      />
      <OrderCourses
        allMyCourses={allMyCourses}
        getSortedCoursesByName={getSortedCoursesByName}
        noMatch={noMatch}
      />
      {noMatch === "no-match" ? (
        <div>
          <h3>No hay coincidencias</h3>
        </div>
      ) : (
        <div>
          <h3>
            {myCourses.length === 1
              ? `Viendo ${myCourses.length} resultado`
              : myCourses.length > 1
              ? `Viendo ${myCourses.length} resultados`
              : null}
          </h3>
          <CoursesCards allMyCourses={myCourses} />
        </div>
      )}
    </div>
  );
}
