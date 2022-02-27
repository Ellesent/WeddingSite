import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className="flex items-center flex-col gap-10 justify-center content-center h-full m-5">
     <img className="" src='WebsiteHomePageDesign.png'/>
     <p className={`${styles.subText} text-2xl leading-relaxed`}>{"Casey & Thomas are getting married on March 19th, 2022"}</p>
     <p className={`${styles.subText} text-xl leading-relaxed`}>{"Ceremony begins at 5PM"}</p>

    </div>
  )
}
