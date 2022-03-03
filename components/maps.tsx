import { ReactElement, useState } from "react"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

interface Props {
    isMarkerShown: boolean;
    googleMapURL: string;
    loadingElement: ReactElement;
    containerElement: ReactElement;
    mapElement: ReactElement;
}

const Maps = withScriptjs(withGoogleMap((props: Props) => {



    return (
        <GoogleMap
            defaultZoom={15}
            defaultCenter={{ lat:  47.481830442998195, lng: -122.63334678803176}}
        >
            {props.isMarkerShown && <Marker position={{lat: 4481830442998195, lng: -122.63334678803176}} />}
        </GoogleMap>
    )
}))

export { Maps }