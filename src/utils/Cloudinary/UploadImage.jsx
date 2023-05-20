import React, { useEffect, useState } from "react";
import sha256 from "js-sha256";

export default function CloudinaryUploader({
  setAvatarImg,
  folder,
  input,
  setInput,
}) {
  //Realizar aqui la configuracion de la imagen en la nube y conseguir la URL para
  //setearle a la propiedad "img" del objeto USER con el "setImg()"
 
  const [uploadImageUrl, setUploadUrl] = useState("")//Genero un estado local URL para que la firma se cree dependiendo de la folder que asigna la ubicacion. Folder, además de ser la ubicacion en donde quedara la img em la nube, tambien es un parametro necesario para crear la firma.

  useEffect(()=>{
    const generateSignature = async () => {
      //CREAR CADENA DE TEXTO QUE INCLUYE LOS PARAMETROS PARA LA SOLICITUD DE SUBIDA FIRMADA
      const API_SECRET = process.env.REACT_APP_CLOUDYNARY_API_SECRET;
      const API_KEY = process.env.REACT_APP_CLOUDYNARY_API_KEY;
      const uploadImagesPreset = "signed_images_preset"
      const timestamp = Math.floor(Date.now() / 1000);
      let paramsToSign =
        "folder=" +
        folder +
        "&timestamp=" +
        timestamp +
        "&upload_preset=" +
        uploadImagesPreset +
        API_SECRET;
      let signature = sha256(paramsToSign); //SE CREA LA FIRMA USANDO TODOS LOS PARAMETROS DE paramsToSign
      // console.log(signature)
      let uploadImageUrl = `https://api.cloudinary.com/v1_1/dcq2glrhg/image/upload?upload_preset=${uploadImagesPreset}&timestamp=${timestamp}&signature=${signature}&api_key=${API_KEY}`;
      setUploadUrl(uploadImageUrl)
    }
    generateSignature()
  },[folder])

  const handleUpload = async (e) => {
    const file = e.target.files[0];

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "signed_images_preset");
    formData.append("folder", folder);

    const response = await fetch(uploadImageUrl, {
      method: "POST",
      body: formData,
    });
    const data = await response.json();

    // console.log("DATA", data);
    // console.log(folder)
    if (folder === "imagenes_de_cursos") {
      setInput({
        ...input,
        img: data.secure_url,
      });
    }
    if(folder) {
      console.log("SETEO?")
      await setAvatarImg(data.secure_url);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleUpload} />
    </div>
  );
}
