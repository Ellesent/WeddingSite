import { Maps } from "../components/maps"
import config from "../config.json"

const Venue = () => {

    return (
        <div>
        <div className="m-5 flex flex-col items-center">
            <p className="text-4xl">Clay Venues</p>
            <p className="pb-5 text-xl">Address: 10 N. Wahsatch Ave. Colorado Springs, CO 80903</p>
                <img className={`m-5`} src="/DowntownSprings.png" alt="venue drawing" width="600"/>
                <a className='text-lg px-10'>Google Maps</a>
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

