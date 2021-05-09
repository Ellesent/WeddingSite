import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';
import { Guest } from '../../utils/Types';

const RSVPUnique = () => {
    const router = useRouter();
    const { id } = router.query;

    const [guestInfo, setGuestInfo] = useState<Guest>();

    // checking if ID exists and getting guest details if so

    useEffect(() => {
        const fetchGuest = async () => {
            const response = await fetch(`/api/guests/${id}`, { method: 'GET' })

            // check if guest was found
            if (!response.ok) {
                console.error("guest not found!")
                setGuestInfo(null);
            }

            const guestInfoJSON = await response.json();
            setGuestInfo(guestInfoJSON);

        }
    }, [])

    return (
        <div>
            {guestInfo == null ?
                <p>Guest information not found! Please make sure the URL is correct.</p>
                :
                // TODO check if the guest has RSVPd already and let them know
                <div>
                    <p>Found you guest information! Please make sure the information below is correct before RSVPing. If any of this looks correct please contact the Bride and Groom.</p>
                    <div>
                        <p>{guestInfo.name}</p>
                        <p>{guestInfo.numInParty}</p>
                        <p>{guestInfo.email}</p>
                        <p>{guestInfo.address}</p>
                        <p>{guestInfo.foodAllergies}</p>
                    </div>
                </div>}
        </div>
    )
}

export default RSVPUnique