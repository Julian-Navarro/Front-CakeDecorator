import React, { useState } from "react";
import { ImCheckmark } from "react-icons/im";
import { CloudinaryContext, Video, Transformation } from "cloudinary-react";
import { useDropzone } from "react-dropzone";
import sha1 from "crypto-js/sha1";

export default function CloudinaryUploadVideo({ input, setInput }) {
  const [videoUrls, setVideoUrls] = useState([]);
  console.log("LOCAL STATE ", videoUrls);
  const [isUploading, setIsUploading] = useState(false);

  const cloudName = process.env.REACT_APP_CLOUDYNARY_NAME;
  const apiKey = process.env.REACT_APP_CLOUDYNARY_API_KEY;
  const apiSecret = process.env.REACT_APP_CLOUDYNARY_API_SECRET;
  
    const videoName = `${input.title}`;
    const nameVideoUpdated = videoName.replace(/ /g, "_").toLowerCase();
    const folders =
      `${input.type}`.toLowerCase() + "/" + input.category.toLowerCase();
    const uploadPresetName = "signed_video_preset";

    const verifyInputs = ()=>{
      if(!input.title || !input.type || !input.category){
        alert(
          "¡Antes de cargar videos debes haber seleccionado un titulo, categoría y tipo de dictacion!"
        );
        return null
      }
    }
    

  const handleVideoUpload = async (files) => {
    console.log("FILES", files);
    setIsUploading(true);

    const uploadPromises = Array.from(files).map(async (file) => {
      
      const uniqueNameVideoUpdated = `${nameVideoUpdated}_${Date.now()}`;

      const generateSignature = () => {
        const timestamp = Math.floor(Date.now() / 1000);
        let paramsToSign = `folder=${folders}&public_id=${uniqueNameVideoUpdated}&timestamp=${timestamp}&upload_preset=${uploadPresetName}${apiSecret}`;
        const signature = sha1(paramsToSign).toString();

        return {
          timestamp,
          signature,
        };
      };

      const { timestamp, signature } = generateSignature();

      const formData = new FormData();
      formData.append("file", file);
      formData.append("folder", folders);
      formData.append("public_id", uniqueNameVideoUpdated);
      formData.append("timestamp", timestamp);
      formData.append("signature", signature);
      formData.append("api_key", apiKey);

      const uploadVideoUrl = `https://api.cloudinary.com/v1_1/${cloudName}/video/upload?upload_preset=${uploadPresetName}&timestamp=${timestamp}&signature=${signature}&api_key=${apiKey}`;

      try {
        const response = await fetch(uploadVideoUrl, {
          method: "POST",
          body: formData,
        });
        console.log("RES ", response);
        if (response.ok) {
          const data = await response.json();
          console.log("DATA ", data);
          const { secure_url } = data;
          return secure_url;
        } else {
          console.error(`Error al cargar el archivo "${file.name}"`);
          return null;
        }
      } catch (error) {
        console.error(
          `Error subiendo el archivo "${file.name}" : ${error.message}`
        );
        return null;
      }
    });
    console.log("PROMISE", uploadPromises);

    Promise.all(uploadPromises)
      .then((results) => {
        setIsUploading(false);
        const validUrls = results.filter((url) => url !== null);
        console.log("VALID URLS", validUrls);

        const newVideosUrls = [...videoUrls, ...validUrls];
        setVideoUrls(newVideosUrls);
        setInput({
          ...input,
          videos: newVideosUrls,
        });
      })
      .catch((err) => {
        console.error("ERR", err);
        setIsUploading(false);
      });
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: "video/*",
    multiple: true,
    onDrop: (acceptedFiles) => {
      verifyInputs()
      handleVideoUpload(acceptedFiles);
    },
  });

  return (
    <div>
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Suelta los videos aquí...</p>
        ) : (
          <p>Arrastra y suelta los videos aquí, o haz click para seleccionar</p>
        )}
      </div>
      {isUploading && <p>Subiendo, espere por favor...</p>}
      {videoUrls.length > 0 && (
        <div>
          <h3>
            <ImCheckmark />
            Videos completados:
          </h3>
          <CloudinaryContext cloudName={cloudName}>
            {videoUrls.map((url) => {
              return (
                <div key={url}>
                  <Video publicId={url} controls>
                    <Transformation width="300" crop="scale" />
                  </Video>
                </div>
              );
            })}
          </CloudinaryContext>
        </div>
      )}
    </div>
  );
}
