import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyDBso3UjV2Cq-Zf20_XE2-KHrBVXeKWGAo",
  authDomain: "ecomdemo-41485.firebaseapp.com",
  databaseURL: "https://ecomdemo-41485.firebaseio.com",
  projectId: "ecomdemo-41485",
  storageBucket: "",
  messagingSenderId: "702318550700"
};
firebase.initializeApp(config); 
export const database = firebase.database().ref('items/');