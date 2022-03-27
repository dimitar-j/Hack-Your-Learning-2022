import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router";
import { useUserAuth } from "../context/UserAuthContext";
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import { IconButton } from "@mui/material";
import { useState } from "react";
import { get, getDatabase, ref, child } from "firebase/database";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

const stylingObject = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "20px"
  },
  subtitle: {
    color: "#613DC1",
    fontSize:"35px",
    fontWeight:"500"
  },
  cameraContainer: {
    textAlign: "center",
    width: "100%",
    display: "flex",
    justifyContent: "center",
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

  const handleClick = (URL) =>{
    navigate(URL);
  }

  function cameraClick(){
    navigate("/uploadphoto")
  }

  useEffect(() => {
    getRecipe();
  }, []);

  return (
    <React.Fragment>
      {!loading ?
      <div style={stylingObject.container}>
        <ChevronLeftIcon 
        sx={{fontSize:'70px', mr: 50}}
        onClick={() => handleClick("/")}
        style={{marginTop:"20px", position: "relative", left: "-20px"}}
        />
        <div style={{fontSize:"2.2em", fontWeight:"900"}}>{recipe.RecipeName}</div>
        <div style={stylingObject.imageContainer}>
          <img src={recipe.thumbnail} width="100%" style={{borderRadius:"10%", boxShadow: "rgba(149, 157, 165) 0px 8px 24px"}}></img>
        </div>

        <div style={stylingObject.subtitle}>Ingredients</div>
        {Ingredients.map((item, index) => {
          return (<h5>{item.quantity} {item.name}</h5>)
        })}
        <div style={stylingObject.subtitle}>Nutrition</div>
        <h5>Calories: 250</h5>
        <h5>Protein: 7.4g</h5>
        <h5>Carbohydrates: 25mg</h5>
        <h5>Fat: 9.2g</h5>
        <h5>Cholestrol: 110.7mg</h5>
        <h5>Sodium: 235mg</h5>

        <div style={stylingObject.subtitle}>Instructions</div>
        <div style={{textAlign: "left"}}>
          {!loading ? recipe.Instructions.map((item, index) => {
            return (<h5 style = {{marginBottom:"25px"}}>{item}</h5>)
          }) : null}
        </div>

        <div style={stylingObject.cameraContainer}>
          <IconButton aria-label="camera" onClick={cameraClick} style={{background:"#613DC1", marginBottom: "40px", width: "75px", height: "75px", boxShadow: "rgba(149, 157, 165) 0px 8px 24px"}}>
            <CameraAltIcon style={{color:"white", width: "35px", height: "35px"}}/>
          </IconButton>
        </div>
      </div> 
      : null}
    </React.Fragment>
  )
};

export default Recipe;