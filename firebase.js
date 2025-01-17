import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.12.1/firebase-app.js'
import {
  addDoc,
  collection,
  getFirestore,
  onSnapshot,
  deleteDoc,
  doc,
  updateDoc,
} from 'https://www.gstatic.com/firebasejs/10.12.1/firebase-firestore.js'

const firebaseConfig = {
  apiKey: "AIzaSyAmH02KEW4qFKYcPtDKFaJtPMYkrAMT4Wc",
  authDomain: "citas-daf74.firebaseapp.com",
  projectId: "citas-daf74",
  storageBucket: "citas-daf74.appspot.com",
  messagingSenderId: "61742851561",
  appId: "1:61742851561:web:af4fd7aa981e67d7715778",
  measurementId: "G-TD465CN3FF"
};

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export const save = (citas) => {
  addDoc(collection(db, 'Citas'), citas)
}

export const getAll = (data) => {
  onSnapshot(collection(db, 'Citas'), data)
}

export const remove = (id) => {
  deleteDoc(doc(db, 'Citas', id))
}
export const getDocumento = (id) => getDoc(doc(db, 'Citas', id))
export const selectOne = (id) => getDoc(doc(db, 'Citas', id))

export const edit = (id, citas) => {
  
  updateDoc(doc(db, 'Citas', id), citas)
}
