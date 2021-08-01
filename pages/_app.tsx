import 'tailwindcss/tailwind.css'
import { Layout } from '@components/Layout'
import {NavigationBar} from '../components/navigation-bar'
import firebase from "firebase/app"
import "firebase/auth"
import { FirebaseAuthProvider } from '@react-firebase/auth'
import {firebaseConfig} from "../firebase-config"

import '../styles/styles.css'

function MyApp({ Component, pageProps }) {
  return (
  <Layout>
    <FirebaseAuthProvider  firebase={firebase} {...firebaseConfig}>
  <NavigationBar></NavigationBar>
  <Component {...pageProps} />
  </FirebaseAuthProvider>
  </Layout>
  )
}

export default MyApp
