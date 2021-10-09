import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyD5WYmrmNc5bcBYlM4L-SGvjKXyhGKnUnU",
    authDomain: "chatbox-102bc.firebaseapp.com",
    databaseURL: "https://chatbox-102bc-default-rtdb.firebaseio.com",
})

const base = Rebase.createClass(firebase.database())

export { firebaseApp }

export default base