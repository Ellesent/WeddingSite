import 'tailwindcss/tailwind.css'
import { Layout } from '@components/Layout'
import {NavigationBar} from '../components/navigation-bar'
import firebase from "firebase/app"
import "firebase/auth"
import { FirebaseAuthProvider } from '@react-firebase/auth'
import {firebaseConfig} from "../firebase-config"

import '../styles/styles.css'
import { HamburgerMenu } from '@components/hamburger-menu'

function MyApp({ Component, pageProps }) {
  return (
  <Layout>
    {// @ts-ignore
    <FirebaseAuthProvider  firebase={firebase} {...firebaseConfig}>
  <NavigationBar></NavigationBar>
  <Component {...pageProps} />
  </FirebaseAuthProvider>
    }
  </Layout>
  )
}

export default MyApp
