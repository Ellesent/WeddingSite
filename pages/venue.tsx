import { Maps } from "../components/maps"
import config from "../config.json"

const Venue = () => {

    return (
        <div className="m-5">
            <p>Name: The Edgewater House</p>
            <p className="pb-5">Address: 11967 Luna Vista Ave SE, Olalla, WA 98359</p>
            <p>{process.env.REACT_APP_GOOGLE_MAPS_API_KEY}</p>
            <Maps
                isMarkerShown
                googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${config["google-api-key"]}&libraries=geometry,drawing,places`}
                loadingElement={<div className="flex h-1/2" />}
                containerElement={<div className="flex h-96" />}
                mapElement={<div className="flex-auto" />}
            />
        </div>
    )
}

export default Venue

