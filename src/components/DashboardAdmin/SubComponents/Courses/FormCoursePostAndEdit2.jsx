import { useEffect, useState } from "react"
import s from "./FormCoursePostAndEdit.module.css"
import axios from "axios";
import { HOST, getCourse, postCourses, updateCourse } from "../../../../utils";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import es from 'date-fns/locale/es';
import { registerLocale, setDefaultLocale } from  "react-datepicker";
import CloudinaryUploader from "../../../../utils/Cloudinary/UploadImage"
import { useNavigate, useParams } from "react-router-dom";


export default function FormCoursePostAndEdit2 ({isPost}) {
  const navigate = useNavigate()

  registerLocale('es', es)
  let { id } = useParams()
  const [date, setDate] = useState(null)
  const [courseToEdit, setCourseToEdit] = useState(false)
  const [input, setInput] = useState({
    category: "",
    description: "",
    title: "",
    price: "",
    img: "",
    type: "",
    videos: [],
    duration: "",
    startDate: "Seleccione una fecha",
    learnDescriptions: ["", "", ""],
    limit: "20"
  })
  let errors = {
    category: "",
    description: "",
    title: "",
    price: "",
    img: "",
    type: "",
    duration: "",
    startDate: "",
    learnDescriptions: "",
    limit: ""
  }
  const durations = [
    "1 Clase",
    "1 Mes (2 Clases)",
    "2 Meses (4 Clases)",
    "3 Meses (6 Clases)",
    "4 Meses (8 Clases)",
    "5 Meses (10 Clases)",
    "6 Meses (12 Clases)",
    "7 Meses (14 Clases)",
    "8 Meses (16 Clases)",
    "9 Meses (18 Clases)"
  ]
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
  function translateDateToSpanish(date){
    let days = {
      Mon: 'Lun',
      Tue: "Mar",
      Wed: "Mie",
      Thu: "Jue",
      Fri: "Vie",
      Sat: "Sab",
      Sun: "Dom"
    };
    let months = {
      Jan: "Enero",
      Feb: "Febrero",
      Mar: "Marzo",
      Apr: "Abril",
      May: 'Mayo',
      Jun: "Junio",
      Jul: "Julio",
      Aug: "Agosto",
      Sep: "Septiembre",
      Oct: "Octubre",
      Nov: "Noviembre",
      Dec: "Diciembre"
    }
    let arrStr = date.split(" ");
    let newDate = `${days[arrStr[0]]} ${arrStr[2]} de ${months[arrStr[1]]} ${arrStr[3]}`
    console.log(newDate);
    return newDate
  }
  // Función para manejar cambios en los inputs
  const handleInputChange = (index, event) => {
    const newValues = [...input.learnDescriptions];
    newValues[index] = event.target.value;
    setInput({
      ...input,
      learnDescriptions: newValues
    });
    console.log(input);
  };

  // Función para agregar un nuevo input
  const addInput = () => {
    setInput({...input, 
      learnDescriptions: [...input.learnDescriptions, ""]
  });
  };

  // Función para eliminar un input
  const removeInput = (index) => {
    const newValues = [...input.learnDescriptions];
    newValues.splice(index, 1);
    setInput({
      ...input,
      learnDescriptions: newValues
    });
  };
  function validate(){
    let newErrors = {
      category: "",
      description: "",
      title: "",
      price: "",
      img: "",
      type: "",
      duration: "",
      startDate: "",
      learnDescriptions: "",
      limit: ""
    }
    if(input.title.trim() === ""){
      newErrors.title = "Falta ingresar el nombre"
    } else {
      newErrors.title = ""
    }
    if(input.category === ""){
      newErrors.category = "Falta ingresar la categoría"
    } else {
      newErrors.category = ""
    }
    if(input.description.trim() === ""){
      newErrors.description = "Falta ingresar la descripción"
    } else {
      newErrors.description = ""
    }
    if(input.price === "" || input.price.toString().includes("e")){
      newErrors.price = "Falta ingresar el precio"
    } else {
      newErrors.price = ""
    }
    if(input.img === ""){
      newErrors.img = "Falta cargar la imagen"
    } else {
      newErrors.img = ""
    }
    if(input.type === ""){
      newErrors.type = "Falta ingresar el tipo"
    } else {
      newErrors.type = ""
    }
    if(input.duration === ""){
      newErrors.duration = "Falta ingresar la duración"
    } else {
      newErrors.duration = ""
    }
    if(input.startDate === "Seleccione una fecha"){
      newErrors.startDate = "Falta ingresar la fecha de inicio"
    } else {
      newErrors.startDate = ""
    }
    if(input.learnDescriptions.length < 3
      || input.learnDescriptions[0]?.trim().length < 10
      || input.learnDescriptions[1]?.trim().length < 10
      || input.learnDescriptions[2]?.trim().length < 10
      ) {
      newErrors.learnDescriptions = "Falta ingresar lo que van a aprender\nDebes mencionar al menos 3 puntos"
    } else {
      newErrors.learnDescriptions = ""
    }
    if(input.limit > 40 || input.limit < 1) {
      newErrors.limit = "El limite debe ser entre 1 y 40"
    } else {
      newErrors.limit = ""
    }
    console.log("NEW ERRORS: ",newErrors);
    errors = newErrors
  }
  async function handlePostOrEdit(isPost) {
    validate();
    for(let prop in errors) {
      if(errors[prop]) {
        return alert(errors[prop])
      }
    }
    try {
      if(isPost) {
        await postCourses(input)
        alert(`Se creó el ${input.category} con éxito`)
      } else {
        await updateCourse(input)
        alert(`Se editó el ${input.category} con éxito`)
      }
      navigate("/dashboardAdmin?render=courses")
    } catch (error) {
      console.log(error);
      alert(`No se pudo realizar ${isPost?"el posteo":"la edición"}`)
    }
  };
  async function handleSetCourseToEdit(){
    if(!id) return
    let course = await getCourse(id)
    setCourseToEdit(course)
  }
  useEffect(() => {
    handleSetCourseToEdit()
  },[])
  useEffect(() => {
    console.log(courseToEdit);
    if(courseToEdit) setInput(courseToEdit)
  },[courseToEdit])

return (
  <div className={s.container}>

    <button className={s.btnBack}
     onClick={() => navigate("/dashboardAdmin?render=courses")} 
    >Volver</button>

    <div className={s.formContainer}>

      <div className={s.div}> {/* title */}
          <p>Nombre</p>
          <input onChange={(e)=>handlerSetInput(e)}
            type="text"
            name="title"
            value={input.title}
          />
      </div>

      <div className={s.div}> {/* type */}
          <p>Tipo</p>
          <select onChange={(e)=>handlerSetInput(e)}
            type="text"
            name="type"
            value={input.type}
          >
            <option value=""className={s.option}>Selecciona tipo</option>
            <option value="Presencial"className={s.option1}>Presencial</option>
            <option value="Grabado"className={s.option}>Grabado</option>
          </select>
      </div>

      <div className={s.div}> {/* category */}
         <p>Categoría</p>
         <select onChange={(e)=>handlerSetInput(e)}
           type="text"
           name="category"
           value={input.category}
         >
          <option value=""className={s.option}>Selecciona categoría</option>
          <option value="Seminario"className={s.option1}>Seminario</option>
          <option value="Curso"className={s.option}>Curso</option>
         </select>
      </div>

      <div className={s.div}> {/* price */}
       <p>Precio</p>
       <input onChange={(e)=>handlerSetInput(e)}
         type="number"
         name="price"
         value={input.price}
       />
      </div>

      <div className={s.dateInput}> {/* startDate */}
        <p>Fecha de inicio</p>
        <p>{"(MM-DD-AAAA)"}</p>
        <DatePicker startDate={date}
          locale={"es"}
          placeholderText={date}
          name="startDate"
          value={input.startDate}
          onChange={(date) => {
            setDate(translateDateToSpanish(date.toString()))
            setInput({...input, startDate: translateDateToSpanish(date.toString())})
            }}/>
            <p>{input.startDate}</p>
      </div>

      <div className={s.div}> {/* img */}
          <div>
            <p>Imagen </p>
            <CloudinaryUploader name="img" folder={"imagenes_de_cursos"} inputCourse={input} setInputCourse={setInput}/>
            <img src={input.img} alt="..."className={s.imgCourse} />
          </div>
      </div>

      <div className={s.div}> {/* duration */}
        <p>Duración</p>
        <select onChange={(e)=>handlerSetInput(e)}
          type="text"
          name="duration"
          value={input.duration}
        >
          <option value=""className={s.option}>Selecciona la duracion</option>
          {
            durations.map((duration, index)=>
              <option value={duration}className={index%2===1?s.option:s.option1}>
                {duration}
              </option>
            )
          }
        </select>

      </div>

      <div className={s.div}> {/* limit */}
       <p>Limite</p>
       <input onChange={(e)=>handlerSetInput(e)}
         type="number"
         name="limit"
         value={input.limit}
       />
      </div>

      <div className={s.divDescription}>
        <p>Descripción</p>
        <textarea onChange={(e)=>handlerSetInput(e)}
          type="text"
          name="description"
          value={input.description}
        />
      </div>

      <div className={s.containerLearnDescription}>
        <p>Lo que van a aprender</p>
        {input.learnDescriptions.map((value, index) => (
        <div key={index}className={s.divLearnDescription}>
          <p className={s.pLearnDescription}>{index + 1 + "-"}</p>
          <input
            type="text"
            value={value}
            onChange={(event) => handleInputChange(index, event)}
          />
          <button onClick={() => removeInput(index)}>X</button>
        </div>
        ))}
      </div>

      <div className={s.divBtns}>
        <button onClick={addInput}className={s.btnAdd}>Agregar Input</button>
        <button onClick={()=>{handlePostOrEdit(isPost)}}className={s.btnSubmit}>
          {isPost?`Postear ${input.category}`:`Guardar Cambios`}  
        </button>
      </div>


    </div>
  </div>
    )
}