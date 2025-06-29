import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCaZ0LNgFzxH7cuZwrcaKYVvoSjKt2WbIM",
  authDomain: "carpio-data.firebaseapp.com",
  projectId: "carpio-data",
  storageBucket: "carpio-data.appspot.com",
  messagingSenderId: "777642243714",
  appId: "1:777642243714:web:6bacd9f13cce77fd96269b",
  measurementId: "G-7HK3980DXE"
}

const app = initializeApp(firebaseConfig)

const auth = getAuth(app)
const provider = new GoogleAuthProvider()

export { auth, provider, signInWithPopup }
