import { Maps } from "../components/maps"
import config from "../config.json"

const Venue = () => {

    return (
        <div className="m-5 flex flex-col" id='venue'>
            <span className={`text-5xl m-5`}>-VENUE INFORMATION-</span>
            <div className='flex flex-col justify-center content-center items-center justify-items-center justify-self-center'>
            <p>Name: Cedar Springs</p>
            <p className="pb-5">Address: 7354 Bethel Burley RD SE Port Orchard, WA 98367</p>
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

