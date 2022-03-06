import styles from '../styles/travel.module.css'
const Travel = () => {
    return (
        <div className='flex flex-col items-center mt-20 gap-5' id='travel'>
            <a className="text-2xl p-5">Cedar Springs is located in Port Orchard, WA. We recommend staying in Gig Harbor!</a>
            <div className='driving directions'>
                <a>Add Driving Directions here if needed</a>
            </div>
            <div className='flex flex-col items-center m-10'>
                <TravelItem href='https://www.wesleyinn.com/' imageRight={false} description={[
                    `The best Western has Standard rooms with larger suites for families. Non-smoking. Close to waterfront and restaurants.
                    Free parking. Trolley picks up across the street. Has a pool.`, 
                    `Price: $278 / night (weekend rate)`,
                    'Reservations: Unable to book a block of rooms in July or August, but all parties can reserve individually.'                    
                    ]} 
                    imageName='Wesley_Inn_R.jpg' />
                <TravelItem href='https://waterfront-inn.com/' imageRight={true} description={
                    [`The Waterfront Inn Has only 6 rooms, each with a king bed and private bath; different floors and different views. No elevator. Non-smoking.`,
                        `Price: averages $279 / night`,
                        `Reservations: Will hold with credit card, must cancel at least one week in advance, for refund. Please verify this if you reserve here.`]}
                    imageName='WaterFrontInn.jpg' />
                <TravelItem href='https://www.innatgigharbor.com/' imageRight={false} description={[
                    'The Inn at Gig Harbor is a Popular hotel, with elevator. Non-smoking in building. Parking lot.',
                    'Price: averages $223 / night',
                    'Reservations: TBD'
                    ]} imageName='InnAtGigHarbor.jpg' />

            </div>
        </div>
    )
}


interface TravelItemProps {
    description: string[];
    imageName: string;
    imageRight: boolean;
    href: string;
}

const TravelItem = (props: TravelItemProps) => {

    const description = props.description.map((d) => (<p className={`text-xl`}>{d}<br /></p>));
    const image = <a href={props.href} target="_blank"><img className={`border-dotted border-4`} width='400px' src={props.imageName} /></a>
    return (
        <div className={`${styles.travelItem} flex items-center justify-between gap-5 border-t-2 last:border-b-2 p-5`}>
            {props.imageRight ? <>
                <div className='flex flex-col'>
                    {description}
                </div>
                {image}
            </> : <>
                    {image}
                    <div className='flex flex-col'>
                    {description}
                </div>
                </>}

        </div>
    )
}

export default Travel