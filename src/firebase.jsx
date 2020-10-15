import firebase from 'firebase'



const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDA4umRr0gPoUr6KnFgL_0X4lTuwx7EuRs",
  authDomain: "clone-36659.firebaseapp.com",
  databaseURL: "https://clone-36659.firebaseio.com",
  projectId: "clone-36659",
  storageBucket: "clone-36659.appspot.com",
  messagingSenderId: "967442976403",
  appId: "1:967442976403:web:e7e47976934e6ead498766",
  measurementId: "G-CJ4EJJKGQH"
});



const auth = firebase.auth()


export default  auth ;