import { CustomMasonry } from '@components/CustomMasonry'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex items-center flex-col">
       <p className="mt-5 font-serif">Summer 2022</p>
       <h1>Under renovation - still a work in progress!</h1>
      <CustomMasonry></CustomMasonry>
    </div>
  )
}
