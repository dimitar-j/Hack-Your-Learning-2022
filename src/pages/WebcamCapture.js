import React from "react";
import Webcam from "react-webcam";
import { Dialog, DialogTitle } from "@mui/material";
import CheckIcon from '@mui/icons-material/Check';
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";

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
    
    const capture = React.useCallback(() => {
      const imageSrc = webcamRef.current.getScreenshot();
      setOpen(true);
      setWebCamOn(false)
      setImgSrc(imageSrc);
    }, [webcamRef, setImgSrc]);
    
    function SimpleDialog(props) {
      const{onClose, selectedValue, open} = props
      
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
    }

    const handleClick = (URL) =>{
      navigate(URL);
    }

    const handleClose = (value) => {
      setOpen(false);
      setSelectedValue(value)
    }

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
          {open && 
            <SimpleDialog
              selectedValue={selectedValue}
              open={open}
              onClose={handleClose}
            />
          }
        </div>
      </div>
    );
};

export default WebcamCapture;