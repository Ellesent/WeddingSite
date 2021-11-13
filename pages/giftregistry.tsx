import styles from '../styles/giftregistry.module.css'

const GiftRegistry = () => {
    return (
        <div className='m-5 p-10 flex items-center flex-col'>
            <p className={`${styles.text} text-4xl`}>Check Back Soon!</p>
            <img className={`m-5 ${styles.img}`} src="/GiftRegistry.png" alt="presents drawing"/>
        </div>
    )
}

export default GiftRegistry
