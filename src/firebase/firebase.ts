import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyDoydIhggTcI0EKETfA48-tDeTXMwCsTQI",
	authDomain: "cg-playground-5c8cb.firebaseapp.com",
	projectId: "cg-playground-5c8cb",
	storageBucket: "cg-playground-5c8cb.appspot.com",
	messagingSenderId: "543021136883",
	appId: "1:543021136883:web:9047860b1a222b3d897086"
  };
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

const auth = getAuth(app);
const firestore = getFirestore(app);

export { auth, firestore, app };
