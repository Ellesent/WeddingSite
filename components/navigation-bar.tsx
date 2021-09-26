
import Link from 'next/link'
import styles from '../styles/navigation-bar.module.css'

const NavigationBar = () => {

    const font = "font-serif";
    return (
        <>
            <div className="flex flex-col items-center">
                <p className={"text-4xl " + font}>CASEY</p>
                <p className={"text-xs " + font}>AND</p>
                <p className={"text-4xl " + font}>TOM</p>
            </div>
            <div className={`m-5 flex flex-row justify-evenly ${styles.navigationBar}`}>
                <Link href='/'>
                    <a className={font}>Home</a>
                </Link>
                <Link href='/rsvp'>
                    <a className={font}>RSVP</a>
                </Link>
                <Link href='/venue'>
                    <a className={font}>Venue</a>
                </Link>
                <Link href='/travel'>
                    <a className={font}>Travel</a>
                </Link>
                <Link href='/giftregistry'>
                    <a className={font}>Gift Registry</a>
                </Link>
                <Link href='/admin'>
                    <a className={font}>Admin</a>
                </Link>
            </div>
        </>
    )
}

export { NavigationBar }