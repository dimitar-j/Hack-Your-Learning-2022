import React from "react";
import Button from '@mui/material/Button';
import { useNavigate } from "react-router";
import { useUserAuth } from "../context/UserAuthContext";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DiamondIcon from '@mui/icons-material/Diamond';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

const Profile = () => {
  const { user, logout } = useUserAuth();
  const navigate = useNavigate();

  const handleClick = (URL) =>{
    navigate(URL);
  }

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  const stylingObject = {
    points: {
      fontSize: '20px',
      color: '#613DC1'
    },
    profile: {
      color: '#613DC1'
    },
    button: {
      backgroundColor: '#613DC1'
    }
  }

  return (
    <>
      <ChevronLeftIcon 
        sx={{fontSize:'70px', mr: 50}}
        onClick={() => handleClick("/")}
      />
      <AccountCircleIcon data-testid="AccountCircleIcon" style={stylingObject.profile} sx={{fontSize:100}} />
      <br/>
      Ajay Arumugam
      75 <DiamondIcon style={stylingObject.points}/>
      <br/>
      <br/>
      <Button variant="contained" style={stylingObject.button} onClick={handleLogout}>
        Log out
      </Button>
    </>
  );
};

export default Profile;