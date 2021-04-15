
import Link from 'next/link'

export const NavigationBar = () => {

    const font = "font-serif";
    return (
        <div className="mt-5 flex flex-row justify-evenly">
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
        </div>
    )
}