import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useUserAuth } from "../context/UserAuthContext";
import { useState } from "react";
import db from "../firebaseConfig";
import NavBar from "../components/NavBar"

const Home = () => {
  const { user, logout } = useUserAuth();
  const [recipes, setRecipes] = useState([]);

  console.log(db);
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