import { Maps } from "../components/maps"
import config from "../config.json"

const Venue = () => {

    return (
        <div className="m-5 flex flex-col text-center" id='venue'>
            <span className={`text-5xl m-5`}>-VENUE INFORMATION-</span>
            <div className='flex flex-col items-start'>
            <p className="text-2xl font-bold">Cedar Springs</p>
            <p className="">Address: 7354 Bethel Burley RD SE Port Orchard, WA 98367</p>
            <p className="pb-5">Parking: The driveway is located on Bethel Burley RD it has large hedges on each side.
Please proceed past the blue house to the bottom of the hill. <br/>Park near the Cedar Springs sign (large log with metal lettering). If you wind up on Lider Rd you have gone too far
</p>
            </div>
            <Maps
                isMarkerShown={true}
                googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${config["google-api-key"]}&libraries=geometry,drawing,places`}
                loadingElement={<div className="flex h-1/2" />}
                containerElement={<div className={`flex h-96 justify-center`} />}
                mapElement={<div className="flex-1 max-w-4xl" />}
            />
        </div>
    )
}

export default Venue

