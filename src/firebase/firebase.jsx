
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyD-ceoLZGsYsNhs_CueKaK3RT4GqleTGAY",
  authDomain: "consultorios-consciencia.firebaseapp.com",
  projectId: "consultorios-consciencia",
  storageBucket: "consultorios-consciencia.appspot.com",
  messagingSenderId: "373492873242",
  appId: "1:373492873242:web:d0be1bff7872bda7e679a3"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);