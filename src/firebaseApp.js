
import firebase from 'firebase'


  // Initialize Firebase
  const config = {
    apiKey: "AIzaSyCvP_1Mh3WLDMeZwDFnYP0lCWtK7GC_GbM",
    authDomain: "turnout-b3684.firebaseapp.com",
    databaseURL: "https://turnout-b3684.firebaseio.com",
    projectId: "turnout-b3684",
    storageBucket: "turnout-b3684.appspot.com",
    messagingSenderId: "942129815485"
  };

export const firebaseApp = firebase.initializeApp(config)
export const eventsRef = firebaseApp.database().ref().child('events')
