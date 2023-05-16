import React from "react";
import sha256 from "js-sha256";

export default function CloudinaryUploader({ setImg }) {
  //Realizar aqui la configuracion de la imagen en la nube y conseguir la URL para
  //setearle a la propiedad "img" con el "setImg()"

  const handleUpload = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "signed_preset");

    //CREAR CADENA DE TEXTO QUE INCLUYE LOS PARAMETROS PARA LA SOLICITUD DE SUBIDA FIRMADA
    const API_SECRET = process.env.REACT_APP_CLOUDYNARY_API_SECRET;
    const API_KEY = process.env.REACT_APP_CLOUDYNARY_API_KEY;
    const timestamp = Math.floor(Date.now() / 1000);
    let paramsToSign =
      "timestamp=" +
      timestamp +
      "&upload_preset=" +
      "signed_preset" +
      API_SECRET;
    let signature = sha256(paramsToSign); //SE CREA LA FIRMA USANDO TODOS LOS PARAMETROS DE paramsToSing
    let uploadUrl = `https://api.cloudinary.com/v1_1/dcq2glrhg/image/upload?upload_preset=signed_preset&timestamp=${timestamp}&signature=${signature}&api_key=${API_KEY}`;

    const response = await fetch(uploadUrl, {
      method: "POST",
      body: formData,
    });
    const data = await response.json();
    console.log("DATA", data);
    setImg(data.secure_url);
  };

  return (
    <div>
      <input type="file" onChange={handleUpload} />
    </div>
  );
}
