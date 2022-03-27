import { getStorage } from "@firebase/storage";
import React from "react";
import Webcam from "react-webcam";
import { uploadString, ref, child, getDownloadURL } from "firebase/storage";
import axios from "axios";
import { useLocation, useNavigate } from "react-router";

const WebcamCapture = () => {
    const videoConstraints = {
      height: 300,
      width: 300,
      facingMode: "user"
    }
    const webcamRef = React.useRef(null);
    const [imgSrc, setImgSrc] = React.useState(null);
    const [isValid, setIsValid] = React.useState(null);
    const { search } = useLocation();
    const searchParams = new URLSearchParams(search);
    const recipeParam = searchParams.get("name");
    const words = recipeParam.split(" ");
  
    const capture = React.useCallback(() => {
      const imageSrc = webcamRef.current.getScreenshot();
      const db = getStorage();
      const dbRef = ref(db, "child.png");
      uploadString(dbRef, imageSrc.substring(23), "base64").then((snapshot) => {
        console.log("uploaded image");
        getDownloadURL(snapshot.ref).then((downloadURL) => {
          console.log('File available at', downloadURL);
          const response = axios.post(
            'http://localhost:3001/image-checker',
            { imageURL: downloadURL, words: words },
            { headers: { 'Content-Type': 'application/json' } }
          ).then((data) => {
            console.log(data.data);
            setIsValid(data.data.match);
          }) 
        });
      });
      setImgSrc(imageSrc);
      
    }, [webcamRef, setImgSrc]);
  
    return (
      <>
        <Webcam
          audio={false}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          videoConstraints={videoConstraints}
        />
        <button onClick={capture}>Capture photo</button>
        {imgSrc && (
          <img
            src={imgSrc}
          />
        )}
        <h2>{isValid}</h2>
      </>
    );
};

export default WebcamCapture;