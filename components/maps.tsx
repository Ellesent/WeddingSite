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
        defaultCenter={{ lat: 48.990517347960434, lng: -122.77349122673883}}
    >
        {props.isMarkerShown && <Marker position={{lat: 48.990517347960434, lng: -122.77349122673883}} />}
    </GoogleMap>
    )
}))

export { Maps }