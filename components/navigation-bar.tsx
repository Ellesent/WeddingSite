
import styles from '../styles/navigation-bar.module.css'
import { HamburgerMenu } from '@components/hamburger-menu'
import Link from 'next/link'

const NavigationBar = () => {

    return (
        <div className={`m-5 flex flex-row justify-between items-center px-3 py-1 ${styles.navigationBar} flex-nowrap flex-grow-0`}>
             <HamburgerMenu classNames={`flex-1 `}>
                 <MenuItems/>
             </HamburgerMenu>
            <div className="flex flex-col items-center flex-1">
                <p className={"text-2xl "}>CASEY</p>
                <p className={"text-xs"}>AND</p>
                <p className={"text-2xl"}>TOM</p>
            </div>
            <div className='flex-1'>

            </div>
        </div>
    )
}

const MenuItems = () => {
    return (
        <div className={`flex flex-col absolute ${styles.menuItems}`}>
            <Link href='/'>
                <a>Home</a>
            </Link>
            <Link href='/photos'>
                <a>Photos</a>
            </Link>
            <Link href='/rsvp'>
                <a>RSVP</a>
            </Link>
            <Link href='/venue'>
                <a>Venue</a>
            </Link>
            <Link href='/travel'>
                <a>Travel</a>
            </Link>
            <Link href='/giftregistry'>
                <a>Gift Registry</a>
            </Link>
        </div>
    )
}

export { NavigationBar }