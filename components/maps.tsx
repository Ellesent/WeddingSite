import { ReactElement, useState } from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";

import { MarkerWithLabel } from "react-google-maps/lib/components/addons/MarkerWithLabel";

interface Props {
  isMarkerShown: boolean;
  googleMapURL: string;
  loadingElement: ReactElement;
  containerElement: ReactElement;
  mapElement: ReactElement;
}

const venueDetails = {
  lat: 38.83398018165691,
  lng: -104.8185433317237,
};

const parkingDetails = {
  lat: 38.83507,
  lng: -104.81959,
};

// @ts-ignore
const labelAnchor = new google.maps.Point(0, 0);

const Maps = withScriptjs(
  withGoogleMap((props: Props) => {
    return (
      <GoogleMap
        defaultZoom={17}
        defaultCenter={{ lat: venueDetails.lat, lng: venueDetails.lng }}
      >
        {props.isMarkerShown && (
          <>
            <MarkerWithLabel
              position={{ lat: venueDetails.lat, lng: venueDetails.lng }}
              labelAnchor={labelAnchor}
              labelStyle={{
                backgroundColor: "red",
                fontSize: "10px",
                padding: "5px",
              }}
              title="Clay Venues"
            >
              <div>Clay Venues</div>
            </MarkerWithLabel>
            <MarkerWithLabel
              position={{ lat: parkingDetails.lat, lng: parkingDetails.lng }}
              title="Parking"
              labelAnchor={labelAnchor}
              labelStyle={{
                backgroundColor: "blue",
                fontSize: "10px",
                padding: "5px",
              }}
            >
              <div>Parking</div>
            </MarkerWithLabel>
          </>
        )}
      </GoogleMap>
    );
  })
);

export { Maps };
