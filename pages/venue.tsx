import { Maps } from "../components/maps"
import config from "../config.json"

const Venue = () => {

    return (
        <div className="m-5">
            <p>Name: Clay Venues</p>
            <p className="pb-5">Address: 10 N. Wahsatch Ave. Colorado Springs, CO 80903</p>
            <Maps
                isMarkerShown={true}
                googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${config["google-api-key"]}&libraries=geometry,drawing,places`}
                loadingElement={<div className="flex h-1/2" />}
                containerElement={<div className="flex h-96" />}
                mapElement={<div className="flex-auto" />}
            />
        </div>
    )
}

export default Venue

