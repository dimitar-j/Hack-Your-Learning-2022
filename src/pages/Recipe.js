import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useUserAuth } from "../context/UserAuthContext";

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

  return (
    <>
      <div>
          Recipe Page
      </div>
    </>
  );
};

export default Recipe;