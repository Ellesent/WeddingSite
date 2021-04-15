import Image from 'next/image'

export default function Home() {
  return (
    <div className="flex items-center flex-col">
      <img className="m-5" src="/mainimage.png" alt="main image" width="900"/>
      <p className="font-serif">Summer 2022</p>
    </div>
  )
}
