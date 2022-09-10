import { onLoginWithAccountAndPassword } from "./module_firebase.js";
window.onClick = function onClick() {

    const account = document.getElementById('admin_account').value
    const password = document.getElementById('admin_password').value

    console.log(account + "_" + password);

    onLoginWithAccountAndPassword(account,password)


    // const auth = getAuth();
    // createUserWithEmailAndPassword(auth, email, password)
    //   .then((userCredential) => {
    //     // Signed in
    //     const user = userCredential.user;
    //     // ...
    //   })
    //   .catch((error) => {
    //     const errorCode = error.code;
    //     const errorMessage = error.message;
    //     // ..
    //   }); 
}