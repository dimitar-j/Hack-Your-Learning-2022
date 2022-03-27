import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useUserAuth } from "../context/UserAuthContext";
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import { IconButton } from "@mui/material";
import Webcam from "react-webcam";

const Recipe = () => {
  const { user, logout } = useUserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  function cameraClick(){
    navigate("/uploadphoto")
  }

  return (
    <IconButton aria-label="camera" onClick={cameraClick}>
      <CameraAltIcon/>
    </IconButton>
  )
};

export default Recipe;