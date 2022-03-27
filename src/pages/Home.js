import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useUserAuth } from "../context/UserAuthContext";
import { useState } from "react";
import { get, getDatabase, ref, child } from "firebase/database";
import db from "../firebaseConfig";
import NavBar from "../components/NavBar"
import FoodItem from "../components/FoodItem"
import Grid from '@mui/material/Grid';

const stylingObject = {
  bannerContainer: {
    height: "100px",
    textAlign: "left",
    padding: "100px 0",
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
  }
}

const Home = () => {
  const { user, logout } = useUserAuth();
  const [recipes, setRecipes] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  function getRecipes(){
    const db = getDatabase();
    const dbRef = ref(db);
    get(child(dbRef, 'Recipes')).then((snapshot) => {
      if (snapshot.exists()){
        setRecipes(snapshot.val());
      }
      else {
        console.log("no data");
      }
    }).catch((error) => {
      console.error(error);
    })
  };
  
  async function getUsers(){
    const db = getDatabase();
    const dbRef = ref(db);
    await get(child(dbRef, 'Users')).then((snapshot) => {
      if (snapshot.exists()){
        setUsers(snapshot.val());
      }
      else {
        console.log("no data");
      }
    }).catch ((error) => {
      console.error(error);
    })
    setLoading(false);
  };

  useEffect(() => {
    getRecipes();
    getUsers();
  }, []);

  if (loading) {
    return (
      <div>
      </div>
    )
  }
  
  return (
    <>
      <div style={stylingObject.bannerContainer}>
        Welcome Back, {users.length != 0 ? users[user.uid].FirstName : ""}<br/>
        {/* Temp homepage Hack Your Learning 2022 Hackathon<br />
        Curr email: {user && user.email}<br/>
        First breakfast recipe name:{recipes.length != 0 ? recipes.Breakfast[0].RecipeName : ""} */}
      </div>
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
            <FoodItem recipe={item}></FoodItem>
        )}
      </div>
      <br></br>
      <div style={stylingObject.subtitle}>
        Lunch
      </div>
      <br></br>
      <div style={{display:"flex", gap: "10px", overflowX: "auto", padding: "10px"}}>
        {recipes.Lunch.map((item, index) => 
            <FoodItem recipe={item}></FoodItem>
        )}
      </div>
      <br></br>
      <div style={stylingObject.subtitle}>
        Dinner
      </div>
      <br></br>
      <div style={{display:"flex", gap: "10px", overflowX: "auto", padding: "10px"}}>
        {recipes.Dinner.map((item, index) => 
            <FoodItem recipe={item}></FoodItem>
        )}
      </div>
      <br></br>
      <br></br>
      <br></br>
      <div className="d-grid gap-2">
        <NavBar />
      </div>
    </>
  );
};

export default Home;