import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router";
import { useUserAuth } from "../context/UserAuthContext";
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import { IconButton } from "@mui/material";
import { useState } from "react";
import { get, getDatabase, ref, child } from "firebase/database";

const stylingObject = {
  imageContainer: {
    width: "100%",
    height: "30px"
  }
}

const Recipe = (props) => {
  const { user, logout } = useUserAuth();
  const [loading, setLoading] = useState(true);
  const [Ingredients, setIngredients] = useState([]);
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState([]);
  const { search } = useLocation();
  const searchParams = new URLSearchParams(search);
  const recipeParam = searchParams.get("name");
  const mealParam = searchParams.get("mealType");
  console.log(recipeParam);
  console.log(mealParam);

  var isLoading = true;

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  async function getRecipe() { 
    const db = getDatabase();
    const dbRef = ref(db);
    await get(child(dbRef, 'Recipes')).then((snapshot) => {
      if (snapshot.exists()){
        console.log(snapshot.val()[mealParam]);
        snapshot.val()[mealParam].forEach(element => {
          console.log(element);
          if (element.RecipeName == recipeParam) {
            console.log(element);
            setRecipe(element);
            setLoading(false);
            setIngredients(element.Ingredients);
            console.log(element.Ingredients);
          }
        });;
        
      }
      else {
        console.log("no data");
      }
    }).catch((error) => {
      console.error(error);
    })
  };

  function cameraClick(){
    navigate("/uploadphoto")
  }

  useEffect(() => {
    console.log("asd");
    getRecipe();
  }, []);

  console.log(recipe.Instructions);
  return (
    <div>
      {!loading ? <div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
  

        <h1>{recipe.RecipeName}</h1>
        <div style={stylingObject.imageContainer}>
          <img src={recipe.thumbnail}></img>
        </div>

        <h3>Ingredients</h3>
        {Ingredients.map((item, index) => {
          return (<h5>{item.quantity} {item.name}</h5>)
        })}
        <h3>Nutrition</h3>
        <h5>Calories: 250</h5>
        <h5>Protein: 7.4g</h5>
        <h5>Carbohydrates: 25mg</h5>
        <h5>Fat: 9.2g</h5>
        <h5>Cholestrol: 110.7mg</h5>
        <h5>Sodium: 235mg</h5>

        <h1>{loading}</h1>
        {!loading ? recipe.Instructions.map((item, index) => {
          return (<h5>{item}</h5>)
        }) : null}

        <IconButton aria-label="camera" onClick={cameraClick}>
          <CameraAltIcon/>
        </IconButton>
      </div> : null}
    </div>

  )
};

export default Recipe;