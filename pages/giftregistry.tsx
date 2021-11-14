import styles from '../styles/giftregistry.module.css'

const GiftRegistry = () => {
    return (
        <div className='m-5 p-10 flex items-center align-center justify-center flex-col h-full'>
            <a href='https://www.crateandbarrel.com/gift-registry/casey-martinez-and-thomas-hamrick/r6404601' 
            target="_blank"
            className={`${styles.text} text-4xl underline lg:no-underline lg:hover:underline lg:transition lg:duration-500 lg:ease-in-out lg:transform lg:hover:-translate-y-1 lg:hover:scale-110`}>
                Click Here to View the Registry!
                </a>
            <img className={`m-10 ${styles.img}`} src="/GiftRegistry.png" alt="presents drawing" width='600'/>
        </div>
    )
}

export default GiftRegistry
