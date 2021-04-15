import 'tailwindcss/tailwind.css'
import { Layout } from '../components/Layout'
import {NavigationBar} from '../components/navigation-bar'

function MyApp({ Component, pageProps }) {
  return (
  <Layout>
  <NavigationBar></NavigationBar>
  <Component {...pageProps} />
  </Layout>
  )
}

export default MyApp
