
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import { getAuth, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider, signOut, SAMLAuthProvider } from "firebase/auth"

export function googleSignout() {
    const auth = getAuth()
    signOut(auth).then(() => {
        console.log("Google Auth Sign out.")
    }).catch((error) => {
        console.log("Google Sign out error.")
    })
}

export default function authGoogle() {

    
    const provider = new GoogleAuthProvider()
    
    const firebaseConfig = {
        apiKey: "AIzaSyDoHBYd6X8hE6X8_33KS0I_YU_C3hLAoss",
        authDomain: "easydev-tony-01.firebaseapp.com",
        projectId: "easydev-tony-01",
        storageBucket: "easydev-tony-01.appspot.com",
        messagingSenderId: "378641027421",
        appId: "1:378641027421:web:e7bf008fe9725ec50358b4",
        measurementId: "G-D535S2G60C"
      };
      
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
    console.log(app.name)


    const auth = getAuth()
    
    signInWithPopup(auth, provider)
        .then((result) => {
            const user = result.user
            console.log("Auth succeed: ", user)

        }).catch((error) => {
            console.log(error, 'Auth Error Message.')
        })
}


export function authFacebook() {
    const provider = new FacebookAuthProvider()
    const auth = getAuth()

    signInWithPopup(auth, provider)
        .then((result) => {
            const user = result.user
            console.log("Auth succeed: ", user)

        }).catch((error) => {
            console.log(error, 'Auth Error Message.')
        })
}