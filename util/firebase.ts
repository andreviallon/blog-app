import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBHEdynOf5tgr7BJN97Km6TIz3icCShqT0",
  authDomain: "blog-13966.firebaseapp.com",
  projectId: "blog-13966",
  storageBucket: "blog-13966.appspot.com",
  messagingSenderId: "988633790781",
  appId: "1:988633790781:web:9af81b98f7ea845b20ed54",
  measurementId: "G-09GQVN673C",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();
