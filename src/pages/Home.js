import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useUserAuth } from "../context/UserAuthContext";
import { useState } from "react";
import { get, getDatabase, ref, child } from "firebase/database";
import db from "../firebaseConfig";
import NavBar from "../components/NavBar"

const Home = () => {
  const { user, logout } = useUserAuth();
  const [recipes, setRecipes] = useState([]);
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

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
  
  function getUsers(){
    const db = getDatabase();
    const dbRef = ref(db);
    get(child(dbRef, 'Users')).then((snapshot) => {
      if (snapshot.exists()){
        setUsers(snapshot.val());
      }
      else {
        console.log("no data");
      }
    }).catch ((error) => {
      console.error(error);
    })
  };

  useEffect(() => {
    getRecipes();
    getUsers();
  }, []);

  
  return (
    <>
      <div className="p-4 box mt-3 text-center">
        Welcome back: {users.length != 0 ? users[user.uid].FirstName : ""}<br/>
        Temp homepage Hack Your Learning 2022 Hackathon<br />
        Curr email: {user && user.email}<br/>
        First breakfast recipe name:{recipes.length != 0 ? recipes.Breakfast[0].RecipeName : ""}
      </div>
      
      <div className="d-grid gap-2">
        <Button variant="primary" onClick={handleLogout}>
          Log out
        </Button>
        <NavBar />
      </div>
    </>
  );
};

export default Home;