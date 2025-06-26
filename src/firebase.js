// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyA0ut7LHzwD8ZSYBQ944nCCcgHuA934Lfo',
  authDomain: 'bagsify-app.firebaseapp.com',
  projectId: 'bagsify-app',
  storageBucket: 'bagsify-app.firebasestorage.app',
  messagingSenderId: '327264786084',
  appId: '1:327264786084:web:a520c1fea6cd3b9d217831',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)
