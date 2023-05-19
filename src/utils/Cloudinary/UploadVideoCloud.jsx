import React, { useState } from "react";
import { ImCheckmark } from "react-icons/im";
import { CloudinaryContext, Video, Transformation } from "cloudinary-react";
import sha1 from "crypto-js/sha1";

export default function CloudinaryUploadVideo({ input, setInput }) {
  const [videoUrl, setVideoUrl] = useState("");
  const [isUploading, setIsUploading] = useState(false);

  const cloudName = process.env.REACT_APP_CLOUDYNARY_NAME;
  const apiKey = process.env.REACT_APP_CLOUDYNARY_API_KEY;
  const apiSecret = process.env.REACT_APP_CLOUDYNARY_API_SECRET;
  const videoName = `${input.title}`;
  const nameVideoUpdated = videoName.replace(/ /g, "_").toLowerCase();
  const folders = `${input.type}`.toLowerCase()+ "/" + input.category.toLowerCase();
  const uploadPresetName = "signed_video_preset";

  const generateSignature = () => {
    const timestamp = Math.floor(Date.now() / 1000);
    let paramsToSign = `folder=${folders}&public_id=${nameVideoUpdated}&timestamp=${timestamp}&upload_preset=${uploadPresetName}${apiSecret}`;
    const signature = sha1(paramsToSign).toString();

    return {
      timestamp,
      signature,
    };
  };

  const handleVideoUpload = async (event) => {
    const { timestamp, signature } = generateSignature();
    const file = event.target.files[0];
    setIsUploading(true);

    const formData = new FormData();
    formData.append("file", file);
    formData.append("folder", folders);
    formData.append("public_id", nameVideoUpdated);
    formData.append("timestamp", timestamp);
    formData.append("signature", signature);
    formData.append("api_key", apiKey);
    // formData.append("subfolder", category_class);


    let uploadVideoUrl = `https://api.cloudinary.com/v1_1/${cloudName}/video/upload?upload_preset=${uploadPresetName}&timestamp=${timestamp}&signature=${signature}&api_key=${apiKey}`;

    await fetch(uploadVideoUrl, {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("DATA ", data);
        setIsUploading(false);
        const { secure_url } = data;
        const arrayUrlSplit = secure_url.split()
        setVideoUrl(secure_url);
        setInput({
          ...input,
          videos: arrayUrlSplit
        })
      })
      .catch((error) => {
        console.error("ERR ", error);
        alert("Antes de cargar el video debes seleccionar titulo, categoría y tipo de dictacion.")
        setIsUploading(false);
      });
  };

  return (
    <div>
      <input type="file" onChange={handleVideoUpload} />
      {isUploading && <p>Subiendo video...</p>}
      {videoUrl && (
        <div>
          <h3>
            <ImCheckmark />
            Video completado:
          </h3>
          <CloudinaryContext cloudName={cloudName}>
            <Video publicId={videoUrl} controls>
              <Transformation width="300" crop="scale" />
            </Video>
          </CloudinaryContext>
        </div>
      )}
    </div>
  );
}
