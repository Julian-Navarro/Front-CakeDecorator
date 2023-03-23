import React from "react";
import FormPostProducts from '../DashboardAdmin/SubComponents/Products/FormPostProducts';
// import { useDispatch, useSelector } from "react-redux";
// import { getCoursesFromDB } from "../../redux/actions.js";
// import CourseLists from "../CourseLists/CourseLists";

export default function Home () {
    // const dispatch = useDispatch()
    // const courses = useSelector((state) => state.courses)
    
    // useEffect(()=>{
    //   dispatch(getCoursesFromDB())  
    // }, [dispatch])
    return (
        <div>
            <h2>HOME</h2>
            {/* <CourseLists lists={courses}/> */}
            <FormPostProducts/>
        </div>

    )
}