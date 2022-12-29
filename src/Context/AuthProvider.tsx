import React, { createContext, useState } from "react";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  UserCredential,
  onAuthStateChanged,
  signOut,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
  Auth,
  User,
} from "firebase/auth";
import app from "../firebase/firebase.init";

export interface AuthContextModel {
  user: User | null;
  login: (email: string, password: string) => Promise<UserCredential>;
  signup: (email: string, password: string) => Promise<UserCredential>;
  googleSignIn: () => Promise<UserCredential>;
}

export const AuthContext = React.createContext<AuthContextModel>(
  {} as AuthContextModel
);
const auth = getAuth(app);

interface IAuth {
  children: React.ReactNode;
}

const AuthProvider: React.FC<IAuth> = ({ children }) => {
  const [user, setuser] = useState<any | null>("");
  const gProvider = new GoogleAuthProvider();
  const [loading, seLoading] = useState<boolean>(true);
  const signup = (email: string, password: string) => {
    seLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const login = (email: string, password: string) => {
    seLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logOut = () => {
    return signOut(auth);
  };

  const googleSignIn = (): Promise<UserCredential> => {
    return signInWithPopup(auth, gProvider);
  };

  const authInfo = {
    user,
    login,
    signup,
    googleSignIn,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
