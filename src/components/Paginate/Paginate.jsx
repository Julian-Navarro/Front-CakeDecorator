import React from "react";
import s from "./Paginate.module.css"
import iconNext from "../../utils/IMAGES/imgsPaginate/NextBtn.png"
import iconPrevious from "../../utils/IMAGES/imgsPaginate/PreviousBtn.png"
export default function Paginate ({ paginate, currentPage, usersPerPage, allUsers }) {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(allUsers/usersPerPage); i++) {
        pageNumbers.push(i)
    };
    
    return (
       <div className={s.paginateContainer}>
            { currentPage > 1 
            ? <button className={s.btnPrevious}
                onClick={()=>{paginate(currentPage - 1)}}>
                  <img src={iconPrevious}className={s.iconBtn}/> 
              </button>
            : <button className={s.btnPrevious}disabled="true">
                  <img src={iconPrevious}className={s.iconBtn}/> 
              </button> }
            { pageNumbers &&
              pageNumbers.map((number)=>(
                  <p key={number}onClick={()=>{paginate(number)}}
                    className={`${s.pNumber} ${number===currentPage?s.btnSelected:""}`}>
                      {number}
                  </p>
              ))
            }
           { currentPage < pageNumbers.length
            ? <button className={s.btnNext}
                onClick={()=>{paginate(currentPage + 1)}}>
                <img src={iconNext}className={s.iconBtn}/> 
              </button>
            : <button className={s.btnNext}disabled="true">
                <img src={iconNext}className={s.iconBtn}/> 
              </button> }
        </div>
    )
};