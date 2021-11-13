import Link from 'next/link'
import { useState } from 'react';
import styles from '../styles/hamburger-menu.module.css'
import Hamburger from 'hamburger-react'

const font = "font-serif";

const HamburgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const menuClickHandler = () => {
        setIsOpen(!isOpen);
    }
    return (
        <div className={`flex flex-col m-8  p-3 fixed`}>
            <div className='flex content-center'>
               <Hamburger toggled={isOpen} toggle={setIsOpen}>
                </Hamburger>
            <span className='px-3 self-center'>Menu</span>
            </div>
            {isOpen && <MenuItems/>}
        </div>
        )
    };


    const MenuItems = () => {
        return (
            <div className='flex flex-col'>
                <Link href='/'>
                    <a className={font}>Home</a>
                </Link>
                <Link href='/photos'>
                    <a className={font}>Photos</a>
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
            </div>
        )
    }

export {HamburgerMenu}