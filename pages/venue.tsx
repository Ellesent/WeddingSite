import { Maps } from "../components/maps";
import config from "../config.json";

const Venue = () => {
  return (
    <div>
      <div className="flex justify-center">
        <p className="text-4xl m-5">Clay Venues</p>
      </div>
      <div className="flex justify-around">
        <div className="m-5 flex flex-col items-center">
          <p className="pb-5 text-xl">
            Address: 10 N. Wahsatch Ave. Colorado Springs, CO 80903
          </p>
          <img
            className={`m-5`}
            src="/DowntownSprings.png"
            alt="venue drawing"
            width="600"
          />
        </div>
        <div className="m-5 flex flex-col items-center">
          <p className="pb-5 text-xl">Parking Lot Details</p>
          <p>
            Park at Colorado Springs First Baptist Church. Address: 317 E Kiowa
            St
          </p>
        </div>
      </div>
      <div className="flex justify-center">
        <a className="text-lg px-10">Google Maps</a>
      </div>
      {/* Maps cannot be in flex or it causes issues */}
      <Maps
        isMarkerShown={true}
        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${config["google-api-key"]}&libraries=geometry,drawing,places`}
        loadingElement={<div className="flex h-1/2" />}
        containerElement={<div className={`flex h-96 justify-center`} />}
        mapElement={<div className="flex-1 max-w-4xl" />}
      />
    </div>
  );
};

export default Venue;
