import { createContext, useContext, useEffect, useState } from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    GoogleAuthProvider,
    signInWithPopup
} from "firebase/auth";
import { firebaseAuth } from "../firebaseConfig";

const userAuthContext = createContext();

export function UserAuthContextProvider({children}) {
    const [user, setUser] = useState("");
    function signup(email, password){
        return createUserWithEmailAndPassword(firebaseAuth, email, password);
    }

    function login(email, password){
        return signInWithEmailAndPassword(firebaseAuth, email, password);
    }

    function logout(){
        return signOut(firebaseAuth);
    }
    
    function googleSignIn(){
        const googleAuthProvider = new GoogleAuthProvider();
        return signInWithPopup(firebaseAuth, googleAuthProvider);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(firebaseAuth, (currentUser) => {
            setUser(currentUser);
        });
        return () => {
            unsubscribe();
        }
    }, []);

    return (
        <userAuthContext.Provider value={{ user, signup, login, logout, googleSignIn }}>
            {children}
        </userAuthContext.Provider>
    )
}

export function useUserAuth() {
    return useContext(userAuthContext);
}