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
            defaultZoom={8}
            defaultCenter={{ lat: -34.397, lng: 150.644 }}
        >
            {props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} />}
        </GoogleMap>
    )
}))

export { Maps }