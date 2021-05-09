import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';
import { Guest } from '../../utils/Types';

const RSVPUnique = () => {
    const router = useRouter();

    const { id } = router.query;

    const [guestInfo, setGuestInfo] = useState<Guest>();

    console.log(id);

    // checking if ID exists and getting guest details if so
    useEffect(() => {
        const fetchGuest = async () => {
            try {
                const response = await fetch(`/api/guests/${id}`, { method: 'GET' })

                // check if guest was found
                if (response.status == 400) {
                    console.error("guest not found!")
                    setGuestInfo(null);
                }

                const guestInfoJSON = await response.json();
                console.log(guestInfoJSON);
                setGuestInfo(guestInfoJSON);
            }
            catch (ex) {
                console.error(`something went wrong fetching ${ex}`)
            }

        }
        if (id) {
            fetchGuest();
        }
    }, [id])

    return (
        <div className="flex justify-center items-center m-5">
            {guestInfo == undefined ?
                <p>Guest information not found! Please make sure the URL is correct.</p>
                :
                // TODO check if the guest has RSVPd already and let them know
                <div className="flex flex-col items-center justify-center m-5">
                    <p>Found your guest information! Please make sure the information below is correct before RSVPing. If any of this looks incorrect please contact the Bride and Groom.</p>
                    <p className="mt-5">{`Name: ${guestInfo.name}`}</p>
                    <p>{`Number in Party: ${guestInfo.numInParty}`}</p>
                    <p>{`Email: ${guestInfo.email}`}</p>
                    <p>{`Address: ${guestInfo.address}`}</p>
                    <p>{`Food Allergies: ${guestInfo.foodAllergies}`}</p>
                    <button className="m-5 p-2 border-2 rounded bg-yellow-500">Click HERE to RSVP</button>
                </div>}
        </div>
    )
}

export default RSVPUnique