
import Link from 'next/link'

const NavigationBar = () => {

    const font = "font-serif";
    return (
        <>
        <div className="mt-10 flex flex-col items-center">
            <p className="text-4xl">FRANCESCA</p>
            <p className="text-xs">AND</p>
            <p className="text-4xl">DOMINIC</p>
        </div>
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
        </>
    )
}

export {NavigationBar}