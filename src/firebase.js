import * as firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyBAAuV5HMU10UkaewR-O5bCDoyjY1UBUi4",
    authDomain: "react-project-34544.firebaseapp.com",
    databaseURL: "https://react-project-34544.firebaseio.com",
    projectId: "react-project-34544",
    storageBucket: "react-project-34544.appspot.com",
    messagingSenderId: "1099196570615",
    appId: "1:1099196570615:web:2fdb8454d02c1f7d1decf2"
  };
  // Initialize Firebase
  var fireDb =firebase.initializeApp(firebaseConfig);

  export default fireDb.database().ref();