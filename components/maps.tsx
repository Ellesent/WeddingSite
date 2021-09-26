import { ReactElement, useState } from "react"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

interface Props {
    isMarkerShown: boolean;
    googleMapURL: string;
    loadingElement: ReactElement;
    containerElement: ReactElement;
    mapElement: ReactElement;
}

const venueDetails= {
    lat: 38.83398018165691,
    lng: -104.8185433317237
}

const Maps = withScriptjs(withGoogleMap((props: Props) => {

    return (
        <GoogleMap
            defaultZoom={15}
            defaultCenter={{ lat: venueDetails.lat, lng: venueDetails.lng }}
        >
            {props.isMarkerShown && <Marker position={{ lat: venueDetails.lat, lng: venueDetails.lng,}} title="Clay Venues" />}
        </GoogleMap>
    )
}))

export { Maps }