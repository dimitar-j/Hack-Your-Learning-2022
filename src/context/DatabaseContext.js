import { createContext, useContext, useEffect, useState } from "react";
import { get, getDatabase, ref, child } from "firebase/database";

const databaseContext = createContext();

export function DatabaseContextProvider({children}) {
  const [recipes, setRecipes] = useState("");
  const [users, setUsers] = useState("");

  async function getRecipes(){
    const db = getDatabase();
    const dbRef = ref(db);
    await get(child(dbRef, 'Recipes')).then((snapshot) => {
      if (snapshot.exists()){
        setRecipes(snapshot.val());
      }
      else {   
				console.log("no data");
      }}).catch((error) => {
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
				}}).catch ((error) => {
					console.error(error);
        })
    };

    useEffect(() => {
        getRecipes();
        getUsers();
		}, []);

		return (
			<databaseContext.Provider value={{recipes, users, getRecipes, getUsers}}>
				{children}
			</databaseContext.Provider>
		)
}

export function useDatabase(){
	return useContext(databaseContext);
}