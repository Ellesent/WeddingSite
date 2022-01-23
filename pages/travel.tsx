import styles from '../styles/travel.module.css'
const Travel = () => {
    return (
    <div className='flex flex-col items-center mt-20 gap-5' id='travel'>
        <a className="text-2xl p-5">The Edgewater House is located in Olalla, WA. We recommend staying in Gig Harbor!</a>
        <div className='driving directions'>
            <a>Add Driving Directions here if needed</a>
        </div>
        <div className='flex flex-col items-center m-10'>
        <TravelItem href='https://www.wesleyinn.com/' imageRight={false} description='The Best Western is an affordable option in Gig Harbor!' imageName='Wesley_Inn_R.jpg'/>
        </div>
    </div>
    )
}


interface TravelItemProps {
    description: string;
    imageName: string;
    imageRight: boolean;
    href: string;
}

const TravelItem=(props: TravelItemProps) => {

    const description =  <a className={`text-xl`}>{props.description}</a>;
    const image =  <a href={props.href} target="_blank"><img className={`border-dotted border-4`} width='400px' src={props.imageName}/></a>
    return (
    <div className={`${styles.travelItem} flex items-center justify-evenly gap-5 border-t-2 last:border-b-2 p-5`}>
        {props.imageRight ? <>
        {description}
        {image}
        </> : <>
        {image}
        {description}
         </>}
       
    </div>
    )
}

export default Travel