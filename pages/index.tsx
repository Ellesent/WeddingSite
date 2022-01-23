import { CustomMasonry } from '@components/CustomMasonry'
import Image from 'next/image'
import Link from 'next/link'
import GiftRegistry from './giftregistry'
import RSVP from './rsvp'
import Travel from './travel'
import Venue from './venue'

export default function Home() {
  return (
    <div className="flex items-center flex-col">
      <CustomMasonry></CustomMasonry>
      <RSVP/>
      <Venue/>
      <Travel/>
      <GiftRegistry/>
    </div>
  )
}
