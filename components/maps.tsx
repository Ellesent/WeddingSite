import { ReactElement, useState } from "react"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

import { MarkerWithLabel } from "react-google-maps/lib/components/addons/MarkerWithLabel";

interface Props {
    isMarkerShown: boolean;
    googleMapURL: string;
    loadingElement: ReactElement;
    containerElement: ReactElement;
    mapElement: ReactElement;
}

const Maps = withScriptjs(withGoogleMap((props: Props) => {


    const labelAnchor = { x: 0, y: 0 };
    return (
        <GoogleMap
            defaultZoom={15}
            defaultCenter={{ lat: 47.481830442998195, lng: -122.63334678803176 }}
        >
            {props.isMarkerShown &&
                <MarkerWithLabel
                    position={{ lat: 47.481830442998195, lng: -122.63334678803176 }}
                    labelAnchor={labelAnchor}
                    title="Cedar Springs"
                    labelStyle={{
                        backgroundColor: "lightgreen",
                        fontSize: "10px",
                        padding: "5px"
                    }}
                >
                    <div>Cedar Springs</div>

                </MarkerWithLabel>
            }
        </GoogleMap>
    )
}))

export { Maps }