import React from "react";
import axios from "axios";

export default function UploadImage({ setImg }) {


  async function setProfileImage(e) {
    const data = new FormData();
    const obj = e.target.files[0];
    data.append("file", obj);
    data.append("upload_preset", "ProfileUserImage");

    const res = await axios.post(
      "https://api.cloudinary.com/v1_1/dcq2glrhg/image/upload/",
      data
    );
    const image = res.data.url
    console.log("RES POST", image);
    setImg(image);

  }

  return (
    <div>
      <input
        type="file"
        name="file"
        placeholder="Selecciona una imagen"
        onChange={(e) => setProfileImage(e)}
      />
    </div>
  );
}
