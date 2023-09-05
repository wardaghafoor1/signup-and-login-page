import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js";

console.log("logging");
const auth = getAuth();

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

const login = () => {
    let email = document.getElementById("login-email")
    let password = document.getElementById("login-password")
    signInWithEmailAndPassword(auth, email.value, password.value)
        .then((resolve) => {
            alert("successfully Login")
            // window.location = "https://www.daraz.pk/#hp-just-for-you"
        }).catch((reject) => {
            alert(reject)
        })
}


let login_btn = document.getElementById("login-btn")

login_btn.addEventListener("click", login)
