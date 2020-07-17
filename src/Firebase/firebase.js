import firebase from 'firebase';
import 'firebase/firestore'
import 'firebase/auth'
var firebaseConfig = {
    apiKey: "AIzaSyCvgGwLnJamd4ipzCelNcrlVbx4CVZyukw",
    authDomain: "getshade-86875.firebaseapp.com",
    databaseURL: "https://getshade-86875.firebaseio.com",
    projectId: "getshade-86875",
    storageBucket: "getshade-86875.appspot.com",
    messagingSenderId: "830257294602",
    appId: "1:830257294602:web:cc61559344b520af05def3"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export var auth = firebase.auth();
  export var firestore = firebase.firestore();
  export var storageRef = firebase.storage()
//   export var googleProvider = new firebase.auth.GoogleAuthProvider()
  export var serverTimeStamp = ()=> firebase.firestore.FieldValue.serverTimestamp()
  export default firebase