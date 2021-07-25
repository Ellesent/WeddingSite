import { Maps } from "../components/maps"

const Venue = () => {

    return (
        <div className="m-5">
            <p>Name: Semiahmoo Resort</p>
            <p className="pb-5">Address: 9565 Semiahmoo Pkwy Blaine, WA 98230</p>
            <Maps
                isMarkerShown
                googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}&libraries=geometry,drawing,places`}
                loadingElement={<div className="flex h-1/2" />}
                containerElement={<div className="flex h-96" />}
                mapElement={<div className="flex-auto" />}
            />
        </div>
    )
}

export default Venue

