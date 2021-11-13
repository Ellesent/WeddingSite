import Link from 'next/link'
import { ReactNode, useState } from 'react';
import styles from '../styles/hamburger-menu.module.css'
import Hamburger from 'hamburger-react'

interface Props  {
    classNames?: string;
    children?: ReactNode;
}

const HamburgerMenu = (props: Props) => {
    const [isOpen, setIsOpen] = useState(false);

    const menuClickHandler = () => {
        setIsOpen(!isOpen);
    }
    return (
        <div className={`flex flex-col ${styles.text} ${props.classNames}`}>
            <div className='flex content-center' onClick={menuClickHandler}>
               <Hamburger toggled={isOpen}/>
                <span className='px-3 self-center cursor-pointer'>Menu</span>
            </div>
            {isOpen && props.children}
        </div>
        )
    };


export {HamburgerMenu}