
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyCjpAggjHFznyOuPnX49u7okMFO4UQnIwg",
    authDomain: "reactnativefirebase-7baac.firebaseapp.com",
    projectId: "reactnativefirebase-7baac",
    storageBucket: "reactnativefirebase-7baac.appspot.com",
    messagingSenderId: "725932981523",
    appId: "1:725932981523:web:87949888248ca461332ee6"
  };
firebase.initializeApp(firebaseConfig);
export default firebase;