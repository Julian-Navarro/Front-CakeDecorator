import { useEffect, useState } from "react"
import s from "./FormCoursePostAndEdit.module.css"
import axios from "axios";
import { HOST } from "../../../../utils";
export default function FormCoursePostAndEdit2 () {
    const [input, setInput] = useState({
    category: "",
    description: "",
    title: "",
    price: "",
    img: "",
    type: "",
    videos: [],
    duration: "",
    startDate: "",
    learnDescriptions: []
  })
  const [errors, setErrors] = useState({
    category: "",
    description: "",
    title: "",
    price: "",
    img: "",
    type: "",
    duration: "",
    startDate: "",
    learnDescriptions: "" 
  })
  function handlerSetInput(e){
      e.preventDefault();
      if(e.target.value !== "default") {
        setInput({ 
          ...input,
          [e.target.name]: e.target.value
        })
      } else {
        setInput({
          ...input,
          [e.target.name]: ""
        }) 
      }
      console.log("INPUT: ", input);
  }
  let [users, setUsers] = useState([])
  async function getUsers(){
    let users = await axios.get(HOST+ "/users");
    setUsers(users.data)
  }
  useEffect(()=>{
    getUsers()
  },[]) 

  useEffect(()=>{
    console.log("user ", typeof users[users.length-1]?.registerDate); 
    let a = new Date()
    console.log("a",typeof a);
  },[users]) 
return (
  <div className={s.container}>
    <div className={s.div}>
      <div>
        <p>algo</p>
        <input onChange={(e)=>handlerSetInput(e)}
          type="text"
          name="category"
          value={input.category}
        />
      </div>
      <div>
        <p>algo</p>
        <input onChange={(e)=>handlerSetInput(e)}
          type="text"
          name="description"
          value={input.description}
        />
      </div>
      <div>
        <p>algo</p>
        <input onChange={(e)=>handlerSetInput(e)}
          type="text"
          name="title"
          value={input.title}
        />
      </div>
      <div>
        <p>algo</p>
        <input onChange={(e)=>handlerSetInput(e)}
          type="text"
          name="price"
          value={input.price}
        />
      </div>
      <div>
        <p>algo</p>
        <input onChange={(e)=>handlerSetInput(e)}
          type="text"
          name="img"
          value={input.img}
        />
      </div>
      <div>
        <p>algo</p>
        <input onChange={(e)=>handlerSetInput(e)}
          type="text"
          name="type"
          value={input.type}
        />
      </div>
      <div>
        <p>algo</p>
        <input onChange={(e)=>handlerSetInput(e)}
          type="text"
          name="duration"
          value={input.duration}
        />
      </div>
      <div>
        <p>algo</p>
        <input onChange={(e)=>handlerSetInput(e)}
          type="text"
          name="startDate"
          value={input.startDate}
        />
      </div>
      <div>
        <p>algo</p>
        <input onChange={(e)=>handlerSetInput(e)}
          type="text"
          value={input.learnDescriptions}
          name="learnDescriptions"
        />
      </div>
      <div>
        <p>algo</p>
        <input onChange={(e)=>handlerSetInput(e)}
          type="text"
          name="videos"
          value={input.videos}
        />
      </div>
    </div>
  </div>
    )
}