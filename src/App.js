import React from "react";
import "./App.css";
import { auth, db } from "./firebase/init";
import { collection, addDoc } from "firebase/firestore";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

function App() {
  const [user, setUser] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  function createPost() {
    const post = {
      title: "Land a $100k job",
      description: "Finish Frontend Simplified",
    };
    addDoc(collection(db, "post"), post);
  }

  React.useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setLoading(false);
      console.log(user);
      if (user) {
        setUser(user);
      }
    });
  }, []);
  function register() {
    console.log("register");
    createUserWithEmailAndPassword(auth, "email@email.com", "test123")
      .then((user) => {
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function login() {
    setLoading(true);
    signInWithEmailAndPassword(auth, "email@email.com", "test123")
      .then(({ user }) => {
        console.log(user);
        setUser(user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

  function logout() {
    signOut(auth);
    setUser(null);
  }

  return (
    <div className="App">
      {user ? (
        <div className="user__profile" onClick={logout}>
          {user.email[0].toUpperCase()}
        </div>
      ) : (
        <>
          <button onClick={register}>Register</button>
          <button onClick={login}>{loading ? "Loading..." : "Login"}</button>
          <button onClick={createPost}>Create Post</button>
        </>
      )}
    </div>
  );
}

export default App;
