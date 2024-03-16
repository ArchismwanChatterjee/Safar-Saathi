import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: "AIzaSyDPdg9Hui5AU55oZgIjTERUH1AmSgF6pII",
//   authDomain: "safarsaathi5.firebaseapp.com",
//   projectId: "safarsaathi5",
//   storageBucket: "safarsaathi5.appspot.com",
//   messagingSenderId: "877375595622",
//   appId: "1:877375595622:web:c9f2c6b4dc0cf29460b9a7",
//   measurementId: "G-2QYEZT7LYN",
// };
const firebaseConfig = {
  apiKey: "AIzaSyBFfmoQHT6eatq04R9iVZKYQxYfJhsxMWA",
  authDomain: "safar-saathi1.firebaseapp.com",
  projectId: "safar-saathi1",
  storageBucket: "safar-saathi1.appspot.com",
  messagingSenderId: "944882466580",
  appId: "1:944882466580:web:55814a0d7400eadb560c01",
  measurementId: "G-FH293R4H76"
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
