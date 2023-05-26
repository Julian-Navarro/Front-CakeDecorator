import React, { useState } from "react";
import { ImCheckmark } from "react-icons/im";
import { CloudinaryContext, Video, Transformation } from "cloudinary-react";
import { useDropzone } from "react-dropzone";
import sha1 from "crypto-js/sha1";
import { Div, P, Button } from "../StyledComponents/StyledComponents";

export default function CloudinaryUploadVideo({ input, setInput }) {
  const [videoUrls, setVideoUrls] = useState([]);
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
      <Div {...getRootProps()} 
        flexDir="column"alItems="flex-start">
        <input {...getInputProps()} />
        <P ml="3rem">Selección de videos</P>
        {isDragActive ? (
          <P bg="lightgray"_hovBg="#eeee"bd="2px solid gray"
          boxSh="0 0 .5rem .2rem rgb(0,0,0,0.35), inset 0 0 1rem .2rem rgb(0,0,0,0.45)"mb=".5rem"
          fSize="1rem"wd="22rem"ml="3.5rem"hg="3.2rem"cursor="pointer">
            Suelta los videos aquí...</P>
        ) : (
          <P bg="lightgray"_hovBg="#eeee"bd="2px solid gray"
          boxSh="0 0 .5rem .2rem rgb(0,0,0,0.35), inset 0 0 1rem .2rem rgb(0,0,0,0.45)"mb=".5rem"
          fSize="1rem"wd="22rem"ml="3.5rem"hg="3.2rem"cursor="pointer">
            Arrastra y suelta los videos aquí, o haz click para seleccionar</P>
        )}
      </Div>
      {isUploading && <p>Subiendo, espere por favor...</p>}
      {videoUrls.length > 0 && (
        <Div flexDir="column" bg="#E5ADCA"pd="6px"
          boxSh="1px 1px .4rem .1rem #333">
          <P jfCont="flex-start"bg="orange">
            <ImCheckmark />
            Videos completados:
          </P>
          <CloudinaryContext cloudName={cloudName}>
            <Div bg="lightgray"pd=".5rem 0 .5rem 0"
            wd="28rem"flWr="wrap"jfCont="space-evenly"hg="12rem"overflowY="scroll"
              bd="#333"boxSh="2px 2px .6rem .2rem rgb(0,0,0,0.35), inset 0 0 3rem .2rem rgb(0,0,0,0.45)"br="0"
              >
              {videoUrls.map((url) => {
                return (
                  <Div key={url}bg="gray"hg="6.8rem"wd="12rem"mb=".2rem">
                    <Video publicId={url} controls>
                      <Transformation width="400" crop="scale"/>
                    </Video>
                  </Div>
                );
              })}
            </Div>
          </CloudinaryContext>
        </Div>
      )}
    </div>
  );
}
