import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className="flex items-center flex-col gap-10 justify-center  h-full">
     <p className="text-9xl transform-gpu -rotate-6">HOORAY!</p>
     <p className={`${styles.subText} text-xl`}>{"Casey & Thomas are getting married on March 19th, 2022"}</p>
    </div>
  )
}
