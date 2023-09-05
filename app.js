import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyChdDFqJW3x9nUdJ2jOK0bZPlcBuJb26zw",
    authDomain: "authentication-223e1.firebaseapp.com",
    projectId: "authentication-223e1",
    storageBucket: "authentication-223e1.appspot.com",
    messagingSenderId: "281253225224",
    appId: "1:281253225224:web:2761de0dfffb30d053c2bd",
    measurementId: "G-M8Y01PVEDC"
};

const app = initializeApp(firebaseConfig); // Initialize Firebase

const auth = getAuth(); // Initialize Firebase Authentication

// Your login and signup code here
document.addEventListener("DOMContentLoaded", () => {
    const signup = () => {
        console.log(auth);
        // let username = document.getElementById("username")
        let email = document.getElementById("signup-email")
        let password = document.getElementById("signup-password")
        createUserWithEmailAndPassword(auth, email.value, password.value)
            .then((resolve) => {
                alert("successfully Signup", resolve)
                // window.location = "https://www.daraz.pk/#hp-just-for-you"
            }).catch((reject) => {
                alert(reject)
            })
    }
    
    
    let signup_btn = document.getElementById("signup-btn")
    signup_btn.addEventListener("click", signup)
});



document.addEventListener("DOMContentLoaded", () => {
    const auth = getAuth();

    const login = () => {
        let email = document.getElementById("login-email").value;
        let password = document.getElementById("login-password").value;

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                alert("Successfully logged in as " + user.email);
                // Redirect or do something else on successful login
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert("Error: " + errorMessage);
            });
    };

    let login_btn = document.getElementById("login-btn");
    login_btn.addEventListener("click", login);
});
