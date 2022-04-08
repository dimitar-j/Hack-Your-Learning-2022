import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import { useUserAuth } from "../context/UserAuthContext";
import { useDatabase } from "../context/DatabaseContext";
import { useState } from "react";
import { get, getDatabase, ref, child } from "firebase/database";
import { StepLabel, Stepper, Step } from "@mui/material";
import DiamondIcon from "@mui/icons-material/Diamond";
import NavBar from "../components/NavBar"
import FoodItem from "../components/FoodItem"
import { ThemeProvider, createTheme } from '@mui/material/styles';

const stylingObject = {
  bannerContainer: {
    height: "100px",
    textAlign: "left",
    padding: "60px 0",
    fontSize: "28px",
    borderBottom: "3px solid #613DC1",
    marginBottom: "50px",
    fontWeight: "700"
  },

  title: {
    textAlign: "left",
    fontSize: "22px",
    fontWeight: "500"
  },

  subtitle: {
    textAlign: "left",
    fontSize: "18px",
    fontWeight: "300"
  },

  progress: {
    marginBottom: "30px",
  },

  progressSpot: {
    iconColor: "#858AE3"
  },

  points: {
    color: "#613DC1",
    fontSize: "30px"
  }
}

const theme = createTheme({
  components: {
    MuiStepIcon: {
      styleOverrides: {
        root: {
          "&.Mui-completed": {
            color: "#613DC1"
          },
          "&.Mui-active": {
            color: "#613DC1"
          }
        }
      }
    }
  }
});

const Home = () => {
  const { user } = useUserAuth();
  const { recipes, users } = useDatabase();
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const steps = [
    'Mar 25th',
    'Mar 26th',
    'Mar 27th',
    'Mar 28th'
  ]
  
  return (
    <ThemeProvider theme={theme}>
      <div style={stylingObject.bannerContainer}>
        Welcome Back, {users.length != 0 ? users[user.uid].FirstName : ""}<br/>
      </div>
      <p className="progress-count">
        Your progress: {users.length != 0 ? users[user.uid].TotalPoints : ""} <DiamondIcon style={stylingObject.points}/>
      </p>
      <Stepper 
        activeStep={2} 
        alternativeLabel
        style={stylingObject.progress}
      >
        {steps.map((label) => (
          <Step 
            key={label}
          >
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div style={stylingObject.title}>
        What do you want to cook today?
      </div>
      <br></br>
      <div style={stylingObject.subtitle}>
        Breakfast
      </div>
      <br></br>
      <div style={{display:"flex", gap: "20px", overflowX: "auto", padding: "10px"}}>
        {recipes.Breakfast.map((item, index) => 
            <FoodItem recipe={item} mealType="Breakfast"></FoodItem>
        )}
      </div>
      <br></br>
      <div style={stylingObject.subtitle}>
        Lunch
      </div>
      <br></br>
      <div style={{display:"flex", gap: "10px", overflowX: "auto", padding: "10px"}}>
        {recipes.Lunch.map((item, index) => 
            <FoodItem recipe={item} mealType="Lunch"></FoodItem>
        )}
      </div>
      <br></br>
      <div style={stylingObject.subtitle}>
        Dinner
      </div>
      <br></br>
      <div style={{display:"flex", gap: "10px", overflowX: "auto", padding: "10px"}}>
        {recipes.Dinner.map((item, index) => 
            <FoodItem recipe={item} mealType="Dinner"></FoodItem>
        )}
      </div>
      <br></br>
      <br></br>
      <br></br>
      <div>
        <NavBar />
      </div>
    </ThemeProvider>
  );
};

export default Home;