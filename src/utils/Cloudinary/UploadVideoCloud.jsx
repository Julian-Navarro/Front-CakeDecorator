import React, { useEffect, useState } from "react";
import { ImCheckmark } from "react-icons/im";
import { CloudinaryContext, Video, Transformation } from "cloudinary-react";
import sha1 from "crypto-js/sha1";
import sha256 from "js-sha256";

export default function CloudinaryUploadVideo({ input, setInput }) {
  const [videoUrl, setVideoUrl] = useState("");
  const [isUploading, setIsUploading] = useState(false);

  const cloudName = process.env.REACT_APP_CLOUDYNARY_NAME;
  const apiKey = process.env.REACT_APP_CLOUDYNARY_API_KEY;
  const apiSecret = process.env.REACT_APP_CLOUDYNARY_API_SECRET;
  const videoName = `${input.title}`;
  const nameVideoUpdated = videoName.replace(/ /g, "_").toLowerCase();
  const type_class = `${input.type}`.toLowerCase();
  const category_class = `${input.category}`.toLowerCase();
  const uploadPresetName = "signed_video_preset";

  const generateSignature = () => {
    const timestamp = Math.floor(Date.now() / 1000);
    let paramsToSign = `folder=${type_class}&public_id=${nameVideoUpdated}&timestamp=${timestamp}&upload_preset=${uploadPresetName}${apiSecret}`;
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
    formData.append("folder", type_class);
    formData.append("subfolder", category_class);
    formData.append("public_id", nameVideoUpdated);
    formData.append("timestamp", timestamp);
    formData.append("signature", signature);
    formData.append("api_key", apiKey);


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
        console.log("URL ", secure_url);
        setVideoUrl(secure_url);
      })
      .catch((error) => {
        console.error("ERR ", error);
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
