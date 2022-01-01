import firebase from 'firebase';

const config = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: ""
};

firebase.initializeApp(config);

export default firebase;
const provider = new firebase.auth.GoogleAuthProvider();

  const auth1 = firebase.auth();
   const db = firebase.firestore();
   const storage = firebase.storage();
  // export default {auth, db, storage};
  export  {db};
  export  {auth1};
  export  {storage, provider};


firebase.firestore().settings({
    timestampsInSnapshots: true
})

export const myFirebase = firebase
export const myFirestore = firebase.firestore()
export const myStorage = firebase.storage()








