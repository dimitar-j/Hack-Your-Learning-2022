import React from "react";
import { useNavigate } from "react-router";
import { useUserAuth } from "../context/UserAuthContext";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import FeedCard from "../components/FeedCard.js"
import DiamondIcon from '@mui/icons-material/Diamond';
import { color } from "@mui/system";

const Feed = () => {
  const { user, logout } = useUserAuth();
  let navigate = useNavigate();
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
    }
  }

  return (
    <>
      <ChevronLeftIcon 
        sx={{fontSize:'70px', mr: 50}}
        onClick={() => handleClick("/")}
      />
      <div className="leaderboard">
        <h2>Leaderboard</h2>
            <p>
              Topan Budiman<br/>
              Dimitar Janevski<br/>
              Brian Nguyen<br/>
              Ajay Arumugam<br/>
              Jason Nguyen<br/>
            </p>
            <p className="leaderboard-points">
              250<DiamondIcon style={stylingObject.points}/><br/>
              150<DiamondIcon style={stylingObject.points}/><br/>
              100<DiamondIcon style={stylingObject.points}/><br/>
              75<DiamondIcon style={stylingObject.points}/><br/>
              50<DiamondIcon style={stylingObject.points}/><br/>
            </p>
      </div>
      <FeedCard />
    </>
  );
};

export default Feed;