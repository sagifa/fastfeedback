import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/functions';
import 'firebase/firestore';

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyCAExj1Lijp8RZOSbFMrRAGQIeIBioOPRw",
    authDomain: "fast-feedback-99c20.firebaseapp.com",
    projectId: "fast-feedback-99c20"
  });
}

export default firebase;