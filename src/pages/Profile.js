import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useUserAuth } from "../context/UserAuthContext";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DiamondIcon from '@mui/icons-material/Diamond';


const Profile = () => {
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

  return (
    <>
      <AccountCircleIcon data-testid="AccountCircleIcon" sx={{fontSize:100}} />
      <br/>
      Ajay Arumugam
      250 <DiamondIcon/>
      <br/>
      <Button variant="primary" onClick={handleLogout}>
        Log out
      </Button>
    </>
  );
};

export default Profile;