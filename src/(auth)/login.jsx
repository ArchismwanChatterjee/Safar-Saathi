import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.VITE_API_KEY,
  authDomain: process.env.VITE_AUTH_DOMAIN,
  projectId: process.env.VITE_PROJECT_ID,
  storageBucket: process.env.VITE_STORAGE_BUCKET,
  messagingSenderId: process.env.VITE_MESSAGE_ID,
  appId: process.env.VITE_AP_ID,
  measurementId: process.env.VITE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  return new Promise((resolve, reject) => {
    // Add the prompt parameter to force the account picker
    provider.setCustomParameters({
      prompt: "select_account",
    });

    signInWithPopup(auth, provider)
      .then((result) => {
        const name = result.user.displayName;
        const email = result.user.email;
        const profilePic = result.user.photoURL;
        localStorage.setItem("user", name);
        localStorage.setItem("email", email);
        localStorage.setItem("profilePic", profilePic);
        localStorage.setItem("isLoggedIn", true);
        resolve(); // Resolve the promise if sign-in is successful
      })
      .catch((error) => {
        console.error(error);
        reject(error); // Reject the promise if there's an error
      });
  });
};
