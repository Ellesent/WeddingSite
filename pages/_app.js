import 'tailwindcss/tailwind.css'
import {NavigationBar} from '../components/navigation-bar'

function MyApp({ Component, pageProps }) {
  return (
  <>
  <NavigationBar></NavigationBar>
  <Component {...pageProps} />
  </>
  )
}

export default MyApp
