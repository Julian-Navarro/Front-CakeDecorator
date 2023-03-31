import React, { useEffect, useState } from "react";
import s from "./UserProfileCard.module.css"
import userIcon from "../../../../utils/user-icon.png"

export default function UserProfileCard({ user: {name, surname, email, status, phone, id, img} }) {

    useEffect(()=>{
    },[])
    return (
        <div className={s.divContainer}>
            {
                img !== null
                  ? <img src={img} alt="img not found" />
                  : <img src={userIcon} alt="img not found" />
            }
            <div>
              <h3>{name} {surname}</h3>
              <p>email: {email}</p>
              <p>Tel: {phone}</p>
              <p>Estado: {status}</p>
              {/* <p>Id: {id}</p> */}
            </div>
        </div>
    )
}