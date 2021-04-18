import { Maps } from "../components/maps"
import config from "../config.json"

const Venue = () => {

    return (
        <div>
            <Maps
  isMarkerShown
  googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${config["google-api-key"]}&libraries=geometry,drawing,places`}
  loadingElement={<div style={{ height: `100%` }} />}
  containerElement={<div style={{ height: `400px` }} />}
  mapElement={<div style={{ height: `100%` }} />}
/>
        </div>
    )
}

export default Venue