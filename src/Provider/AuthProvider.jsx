import React, { createContext, useEffect, useMemo, useState } from "react";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  createUserWithEmailAndPassword
} from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import auth, { db } from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const provider = new GoogleAuthProvider();

  
  const ADMIN_EMAIL = "adminshopnest@gmail.com";

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  const registerWithEmailPassword = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password);

  const loginWithEmailPassword = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);

  const googleSignin = () => signInWithPopup(auth, provider);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        let role = "user";

       
        if (firebaseUser.email === ADMIN_EMAIL) {
          role = "admin";
        } else {
          try {
            const docRef = doc(db, "users", firebaseUser.uid);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
              role = docSnap.data().role || "user";
            }
          } catch (err) {
            console.error("Error fetching user role:", err);
          }
        }

        setUser({
          uid: firebaseUser.uid,
          email: firebaseUser.email,
          displayName: firebaseUser.displayName,
          photoURL: firebaseUser.photoURL,
          role,
        });
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const authdata = {
    registerWithEmailPassword,
    loginWithEmailPassword,
    googleSignin,
    logOut,
    user,
    setUser,
    loading,
  };

  return (
    <AuthContext.Provider value={authdata}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;