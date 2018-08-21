import firebase from "firebase";
var config = {
  apiKey: "AIzaSyAXvO68S7HSBKBBfzDTyxkZz68uWjvf0UA",
  authDomain: "opportunity-costs.firebaseapp.com",
  databaseURL: "https://opportunity-costs.firebaseio.com",
  projectId: "opportunity-costs",
  storageBucket: "opportunity-costs.appspot.com",
  messagingSenderId: "662359530077"
};
firebase.initializeApp(config);
export default firebase;
