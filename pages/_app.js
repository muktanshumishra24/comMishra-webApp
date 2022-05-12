import "../styles/globals.css";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../firebase";
import Login from "./login";
import firebase from "../node_modules/firebase";
import { useEffect } from "react";
function MyApp({ Component, pageProps }) {
  // if user is logged in, user varibale will be defined, otherwise false
  const [user, loading] = useAuthState(auth);

  useEffect(() => {
    if (user) {
      db.collection("users").doc(user.uid).set(
        {
          email: user.email,
          lastSeen: firebase.firestore.FieldValue.serverTimestamp(),
          photoURL: user.photoURL,
        },
        { merge: true }
      );
    }
  }, [user]);

  if (!user) return <Login />;
  return <Component {...pageProps} />;
}

export default MyApp;
