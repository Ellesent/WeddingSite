import Link from "next/link";
import Head from "next/head";
import styles from "../styles/navigation-bar.module.css";
import { useEffect, useState } from "react";
import { HamburgerMenu } from "./hamburger-menu";

const NavigationBar = () => {

    const [width, setWidth] = useState<number>(0);

    function handleWindowSizeChange() {
        setWidth(window.innerWidth);
    }


    useEffect(() => {
        handleWindowSizeChange();
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);

    const isMobile = width <= 768;

    const links = <> <Link href="/">
    <a>Home</a>
  </Link>
  <Link href="#rsvp">
    <a >RSVP</a>
  </Link>
  <Link href="#venue">
    <a >Venue</a>
  </Link>
  <Link href="#travel">
    <a >Travel</a>
  </Link>
  <Link href="#giftregistry">
    <a >Gift Registry</a>
  </Link></>

    const mobileNav = <HamburgerMenu>
        {links}
    </HamburgerMenu>

    const normalNav =  <div
    className={`m-5 flex flex-row justify-evenly ${styles.navigationBar}`}
  >
      {links}
      </div>
    

  return (
    <div>
      <Head>
      <link href="https://fonts.googleapis.com/css2?family=Dancing+Script&family=Old+Standard+TT:ital@0;1&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className={`flex flex-col items-center`}>
        <img src="/water-color-trees.png" width="400" />
        <span className={`text-4xl ${styles.textOutline} ${styles.mainFont}`}>{`FRANCESCA & DOMINIC`}</span>
        <span className={`${styles.cursiveFont}`}>July 25th 2022 <span className={`text-xl`}>&middot; </span> Port Orchard, WA</span>
      </div>
     {isMobile ? mobileNav : normalNav}
    </div>
  );
};

export { NavigationBar };
