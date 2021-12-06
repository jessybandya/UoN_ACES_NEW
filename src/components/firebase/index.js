import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyDLXSPti08D9lynzBA8e9pfBz7R5PiYxXM",
  authDomain: "odero-85bdb.firebaseapp.com",
  projectId: "odero-85bdb",
  storageBucket: "odero-85bdb.appspot.com",
  messagingSenderId: "437962805696",
  appId: "1:437962805696:web:2ed9b8f9eddbc1a1637825",
  measurementId: "G-RR75VG7ELL"
};

firebase.initializeApp(config);

export default firebase;
const provider = new firebase.auth.GoogleAuthProvider();

  const auth = firebase.auth();
   const db = firebase.firestore();
   const storage = firebase.storage();
  // export default {auth, db, storage};
  export  {db};
  export  {auth};
  export  {storage, provider};


firebase.firestore().settings({
    timestampsInSnapshots: true
})

export const myFirebase = firebase
export const myFirestore = firebase.firestore()
export const myStorage = firebase.storage()








