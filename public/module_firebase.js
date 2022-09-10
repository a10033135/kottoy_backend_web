import "https://www.gstatic.com/firebasejs/9.4.0/firebase-app-compat.js";

import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-auth.js";

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";

import { collection, addDoc, getDocs, getFirestore } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js";

const firebaseConfig = {

    apiKey: "AIzaSyAA5-215u9ArobO8bfqs_nxCy1jnTKz7FY",

    authDomain: "kottoy.firebaseapp.com",

    projectId: "kottoy",

    storageBucket: "kottoy.appspot.com",

    messagingSenderId: "942911666642",

    appId: "1:942911666642:web:fe78ab718c20160507700b",

    measurementId: "G-GH6VR5MYCY"

};

const app = initializeApp(firebaseConfig)


export function onLoginWithAccountAndPassword(email = "", password = "") {
    console.log("onLogin: " + email + " , " + password);
    const auth = getAuth()
    // 設定兩個 cookie 叫 test1, test2
    // 在瀏覽器關閉後會自動被刪除
    document.cookie = 'test1=Hello';
    document.cookie = 'test2=World';

    // 設定一個 username cookie 裡面的值是 Mike，儲存一個月
    document.cookie = 'username=Mike; max-age=2592000; path=/';

    console.log(document.cookie);

    // signInWithEmailAndPassword(auth, email, password)
    //     .then((userCredential) => {
    //         console.log("login");
    //         const user = userCredential.user;
    //         console.log(user)

    //         document.cookie = "admin_email=email";

    //     })
    //     .catch((error) => {
    //         window.alert('登入失敗')
    //         const errorCode = error.code;
    //         const errorMessage = error.message;
    //     });
}