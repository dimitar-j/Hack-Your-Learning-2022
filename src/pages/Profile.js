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
      fontSize: '150px',
      color: '#613DC1'
    },
    button: {
      width: '200px',
      height: '50px',
      backgroundColor: '#613DC1'
    }
  }

  return (
    <>
      <ChevronLeftIcon 
        sx={{fontSize:'70px', mr: 50}}
        onClick={() => handleClick("/")}
        style={{marginTop:"20px"}}
      />
      <AccountCircleIcon data-testid="AccountCircleIcon" style={stylingObject.profile} />
      <br/>
      Dimitar Janevski
      150 <DiamondIcon style={stylingObject.points}/>
      <br/>
      <br/>
      <Button variant="contained" style={stylingObject.button} onClick={handleLogout}>
        Log out
      </Button>
    </>
  );
};

export default Profile;