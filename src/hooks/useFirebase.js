import { useEffect, useState } from "react";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import FirebaseInit from "../firebase/firebase.init";

FirebaseInit();
const useFirebase = () => {
  // state
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  // variable
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
  //   function
  const logOut = () => {
    signOut(auth).then(() => {
      setUser(null);
    });
  };
  const signInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null);
      }
      setLoading(false);
    });
    return () => unsubscribe;
  }, []);
  return { user, loading, signInWithGoogle, logOut };
};

export default useFirebase;
