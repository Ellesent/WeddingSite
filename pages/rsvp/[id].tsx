import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Guest, Status } from "../../utils/Types";

const RSVPUnique = () => {
  const router = useRouter();

  const { id } = router.query;

  const [guestInfo, setGuestInfo] = useState<Guest>();

  const [success, setSuccess] = useState(""); // hold RSVP success message
  const [error, setError] = useState(""); // hold RSVP error message

  console.log(id);

  // checking if ID exists and getting guest details if so
  useEffect(() => {
    const fetchGuest = async () => {
      try {
        const response = await fetch(`/api/guests/${id}`, { method: "GET" });
        console.log(response);

        // check if guest was found
        if (response.status == 400) {
          console.error("guest not found!");
          setGuestInfo(null);
        }

        const guestInfoJSON = await response.json();
        console.log(guestInfoJSON);
        setGuestInfo(guestInfoJSON);
      } catch (ex) {
        console.error(`something went wrong fetching ${ex}`);
      }
    };
    if (id) {
      fetchGuest();
    }
  }, [id]);

  const UpdateStatus = async (status: Status) => {
    // reset messages
    setSuccess("");
    setError("");
    try {
      const response = await fetch(`/api/guests/${id}`, {
        method: "PUT",
        body: JSON.stringify({ status: status }),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      const responseJSON = await response.json();
      console.log(responseJSON);

      if (response.ok) {
        setSuccess(
          `You have successfully ${
            status === Status.RSVPed ? "accepted" : "declined"
          }!`
        );
      } else {
        setError(
          "Something went wrong RSVPing. Please try again, or reach out to the bride and groom."
        );
      }
    } catch (e) {
      setError(
        "Something went wrong RSVPing. Please try again, or reach out to the bride and groom"
      );
      console.error(e);
    }
  }

  return (
    <div className="flex justify-center items-center m-5">
      {guestInfo == undefined ? (
        <p>Guest information not found! Please make sure the URL is correct.</p>
      ) : (
        // TODO check if the guest has RSVPd already and let them know
        <div className="flex flex-col items-center justify-center m-5">
          <p className="text-xl antialiased">
            Found your guest information! Please make sure the information below
            is correct before RSVPing. If anything looks incorrect please
            contact the Bride and Groom.
          </p>
          <p className="mt-5">{`Name: ${guestInfo.name}`}</p>
          <p>{`Number in Party: ${guestInfo.numInParty}`}</p>
          <p>{`Email: ${guestInfo.email}`}</p>
          <p>{`Address: ${guestInfo.address}`}</p>
          <p>{`Food Allergies: ${guestInfo.foodAllergies}`}</p>
          {guestInfo.status === Status.RSVPed && <p>Status: RSVPed</p>}
          {guestInfo.status === Status.Declined && <p>Status: Declined</p>}

          <div className="flex">
            <button onClick={() => UpdateStatus(Status.RSVPed)} className="m-5 p-2 border-2 rounded bg-yellow-600 lg:transition lg:duration-500 lg:ease-in-out lg:transform lg:hover:-translate-y-1 lg:hover:scale-110">
              RSVP
            </button>
            <button onClick={() => UpdateStatus(Status.Declined)} className="m-5 p-2 border-2 rounded bg-yellow-600 lg:transition lg:duration-500 lg:ease-in-out lg:transform lg:hover:-translate-y-1 lg:hover:scale-110">
              DECLINE
            </button>
          </div>
          {error && <h1>{error}</h1>}
          {success && <h1>{success}</h1>}

         {(guestInfo.status === Status.RSVPed ||guestInfo.status === Status.Declined ) && <span className='text-2xl m-8 p-5 bg-coolGray-500'>* It looks like you have already RSVPed! If you need to change your response, feel free to resubmit your RSVP on this page.</span>}
        </div>
      )}
    </div>
  );
};

export default RSVPUnique;
