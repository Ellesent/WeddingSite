import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex items-center flex-col">
       <p className="mt-5 font-serif">Summer 2022</p>
       <h1>Under renovation - still a work in progress!</h1>
      <img className="m-5" src="/mainimage.png" alt="main image" width="800"/>
      <Link href="/rsvp">
      <button className="font-serif text-5xl border-4 border-yellow-300 p-3 m-3 border-dotted hover:bg-coolGray-100">RSVP</button>
      </Link>
    </div>
  )
}
