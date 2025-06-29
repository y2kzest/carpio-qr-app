
import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCnnWYlgSOu3cRwE4eciIvVTounYfxLzUs",
  authDomain: "jubinal-qr-scanner.firebaseapp.com",
  projectId: "jubinal-qr-scanner",
  storageBucket: "jubinal-qr-scanner.firebasestorage.app",
  messagingSenderId: "1052604294727",
  appId: "1:1052604294727:web:9c892f7543faf7e435f362",
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const provider = new GoogleAuthProvider()

export { auth, provider, signInWithPopup }
