import React from "react";
import { useNavigate } from "react-router";
import { useUserAuth } from "../context/UserAuthContext";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import FeedCard from "../components/FeedCard.js"
import DiamondIcon from '@mui/icons-material/Diamond';
import { color } from "@mui/system";
import { useDatabase } from "../context/DatabaseContext";
 
const Feed = () => {
  const { user, logout } = useUserAuth();
  const { users } = useDatabase();
  let navigate = useNavigate();
  const handleClick = (URL) =>{
      navigate(URL);
  }

  const stylingObject = {
    points: {
      fontSize: '20px',
      color: '#613DC1'
    }
  }

  const posts = [
    {
      key: 0,
      initials:"BN",
      name:"Brian Nguyen",
      food:"Rib Eye Steak",
      date:"March 26th, 2022",
      description:"Brian made Rib Eye Steaks! Yummy!",
      image:"https://firebasestorage.googleapis.com/v0/b/hack-your-learning-2022.appspot.com/o/RecipeName%2FDinner%2Fcarneasada.jpeg?alt=media&token=f95e01bf-afdb-423a-bfce-031307f9b320"
    },

    {
      key: 1,
      initials:"AA",
      name:"Ajay Arumugam",
      food:"Scrambled Eggs",
      date:"March 22nd 2022",
      description:"Ajay made scrambled eggs, delicious!",
      image:"https://firebasestorage.googleapis.com/v0/b/hack-your-learning-2022.appspot.com/o/RecipeName%2FBreakfast%2Fscrambled-eggs-1.jpeg?alt=media&token=fcc7e9a3-e421-41aa-a9a1-b4ebbde55d33"
    },

    {
      key: 2,
      initials:"TB",
      name:"Topan Budiman",
      food:"Chicken Fried Rice",
      date:"March 3rd 2022",
      description:"Topan made some chicken fried rice! :D",
      image:"https://firebasestorage.googleapis.com/v0/b/hack-your-learning-2022.appspot.com/o/RecipeName%2FLunch%2FChicken-Fried-Rice-SQ.png?alt=media&token=8b8429d1-e561-4b58-9d69-c82966b21e6e"
    },

    {
      key: 3,
      initials:"JN",
      name:"Jason Nguyen",
      food:"Nachos",
      date:"March 1st 2022",
      description:"Jason made some yummy nachos!!",
      image:"https://firebasestorage.googleapis.com/v0/b/hack-your-learning-2022.appspot.com/o/RecipeName%2FDinner%2FBlue-Ribbon-Beef-Nachos_EXPS_THJJ21_12416_B02_10_9b.jpeg?alt=media&token=0c8a1edc-4265-48c8-94b6-5c810c74167b"
    },
  ]

  let fullNames = [];
  let userPoints = []

  for (var key in users) {
    fullNames.push(users[key].FirstName + " " + users[key].LastName);
    userPoints.push(users[key].TotalPoints);
  }

  return (
    <>
      <ChevronLeftIcon 
        sx={{fontSize:'70px', mr: 50}}
        onClick={() => handleClick("/")}
        style={{marginTop:"20px"}}
      />

      <div className="leaderboard">
        <h2>Leaderboard</h2>
            {fullNames.map((name, index) =>
              <ul className="names" key={index}><li>{name}</li></ul>
            )}
            {userPoints.map((point, index) =>
              <ul className="points" key={index}><li>{point}<DiamondIcon style={stylingObject.points}/></li></ul>
            )}
      </div>
      <br/>
      <br/>
      {posts.map((person, index) => (
        <FeedCard
          key={person.key}
          initials={person.initials}
          name={person.name}
          food={person.food}
          date={person.date}
          image={person.image}
          description={person.description}
        />
      ))}
    </>
 );
};
 
export default Feed;
