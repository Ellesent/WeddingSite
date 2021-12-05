import styles from '../styles/travel.module.css'
const Travel = () => {
    return (
    <div className='flex flex-col items-center mt-20 gap-5'>
        <a className="text-2xl p-5">Clay Venus is located in Downtown Colorado Springs!</a>
        <div className='driving directions'>
            <a>Add Driving Directions here if needed</a>
        </div>
        <div className='flex flex-col items-center m-10'>
        <TravelItem href='https://www.wyndhamhotels.com/wyndham-grand/colorado-springs-colorado/the-mining-exchange-a-wyndham-grand-hotel/overview' imageRight={true} description='Just a 4 minute walk away, The Mining Exchange hotel is a cute and easy choice for your stay!' imageName='HotelExample.png'/>
        <TravelItem href='https://antlers.com/index.shtml' imageRight={false} description='The Antlers is only a 5 minute walk and has numerous special offers!' imageName='HotelExample2.png'/>
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