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
            defaultCenter={{ lat: 47.44027027849685, lng: -122.53465527045456}}
        >
            {props.isMarkerShown && <Marker position={{lat: 47.44027027849685, lng: -122.53465527045456}} />}
        </GoogleMap>
    )
}))

export { Maps }