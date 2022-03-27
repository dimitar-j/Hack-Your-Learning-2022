import { getStorage } from "@firebase/storage";
import React from "react";
import Webcam from "react-webcam";
import { uploadString, ref, child, getDownloadURL } from "firebase/storage";
import axios from "axios";
import { useLocation, useNavigate } from "react-router";
import { Dialog, DialogTitle } from "@mui/material";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import CheckIcon from '@mui/icons-material/Check';
import { Button } from "react-bootstrap";

const WebcamCapture = () => {
    const videoConstraints = {
      height: 500,
      width: 300,
      facingMode: "user"
    }
    const webcamRef = React.useRef(null);
    const navigate = useNavigate();
    const [imgSrc, setImgSrc] = React.useState(null);
    const [open, setOpen] = React.useState(false);
    const [selectedValue, setSelectedValue] = React.useState('');
    const [webCamOn, setWebCamOn] = React.useState(true);

    const stylingObject = {
      container: {
        display: "flex",
        flexDirection:"column",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px",
        height: "800px",
      }
    }
    const [isValid, setIsValid] = React.useState(null);
    const { search } = useLocation();
    const searchParams = new URLSearchParams(search);
    const recipeParam = searchParams.get("name");
    const words = recipeParam.split(" ");
  
    const capture = React.useCallback(() => {
      setWebCamOn(false);
      setOpen(true);
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
    
    function SimpleDialog(props) {
      const { onClose, selectedValue, open } = props;
    
      const handleClose = () => {
        onClose(selectedValue);
      };
    
      const handleListItemClick = (value) => {
        onClose(value);
      };
      
    return (
        <Dialog
          onClose={handleClose}
          open={open}
        >
          <DialogTitle>
            Good job<CheckIcon />
          </DialogTitle>
        </Dialog>
      )
    };

    function SimpleDialog2(props) {
      const { onClose, selectedValue, open } = props;
    
      const handleClose = () => {
        onClose(selectedValue);
      };
    
      const handleListItemClick = (value) => {
        onClose(value);
      };
      
    return (
        <Dialog
          onClose={handleClose}
          open={open}
        >
          <DialogTitle>
            You suck<CheckIcon />
          </DialogTitle>
        </Dialog>
      )
    };

    const handleClick = (URL) =>{
      navigate(URL);
    }

    const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
    };

    return (
      <div style={stylingObject.container}>
        <ChevronLeftIcon 
        sx={{fontSize:'70px', mr: 40}}
        onClick={() => handleClick("/")}
        style={{marginTop:"20px"}}
      />
        {webCamOn && (
          <Webcam
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            videoConstraints={videoConstraints}
          />
        )}
        {webCamOn && <Button onClick={capture} style={{backgroundColor: "#613DC1"}}>Capture photo</Button>}
        <div>
          {imgSrc && (<img src={imgSrc}/>)}
          {isValid && 
            <SimpleDialog
              selectedValue={selectedValue}
              open={open}
              onClose={handleClose}
            />
          }
          {!isValid && 
            <SimpleDialog2
              selectedValue={selectedValue}
              open={open}
              onClose={handleClose}
            />
          }
        </div>
          <h2>{isValid}</h2>
      </div>
    );
};

export default WebcamCapture;