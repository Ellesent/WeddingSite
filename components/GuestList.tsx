import { useEffect, useState } from "react";
import { Guest, Status } from "../utils/Types";
import { IconButton } from "./IconButton";
import router, { useRouter } from 'next/router'

interface Props {
    list: Guest[]
}


const GuestListItems = (props: Props) => {
    const [error, setError] = useState("");

    const router = useRouter();

    const deleteOnClickHandler = async (guestID: string) => {
        setError("");
        try {
            const response = await fetch(`/api/guests/${guestID}`, { method: 'DELETE' });
            const jsonResponse = await response.json();

            if (!response.ok) {
                const error = `Error deleting guest: ${response.status}, ${response.statusText}`
                console.error(error);
                setError(error);
                return;
            }

            router.reload();
            
        }
        catch (e) {
            const error = `Error deleting guest. ${e} `
            console.error(error);
            setError(error);
            
        }
    }


    return (
        <>
            {props.list?.map(guest => (
                <div className="table-row divide-x border-b text-center" key={guest.name + guest.email}>
                    <a className="table-cell">
                        {/* <IconButton iconClassName="fas fa-edit"  /> */}
                        <IconButton iconClassName="fas fa-trash" onClick={deleteOnClickHandler} guestId={guest.id ? guest.id : ""} />
                        {guest.name}
                    </a>
                    <a className="table-cell">{guest.numInParty}</a>
                    <a className="table-cell">{guest.email}</a>
                    <a className="table-cell">{guest.address}</a>
                    <a className="table-cell">{Status[guest.status]?.replaceAll('_', ' ')}</a>
                    <a className="table-cell">{`${window.location.hostname}/rsvp/${guest.id}`}</a>
                    <a className="table-cell">{guest.foodAllergies}</a>
                </div>
            ))}
            {error && <span>{error}</span>}
        </>
    );
}


const GuestList = () => {

    const [guestList, setGuestList] = useState<Guest[]>();

    // get the list of guests from the db on load
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/api/guests', { method: 'GET' })
                const jsonResponse = await response.json();
                setGuestList(jsonResponse);
                console.log(jsonResponse);
            }
            catch (e) {
                console.error(`Something went wrong querying for the guest list. Error is ${e}`);
                setGuestList([]);
            }
        }

        fetchData();

    }, [])
    const headers = ["Name", "# in Party", "Email", "Address", "Status", "RSVP URL", "Food Allergies"]
    return (
        // guest list table
        <div className={`table bg-yellow-100 m-5 border-collapse`}>
            <div className="table-row-group">
                <div className="table-row headers divide-x border-b text-center">
                    {headers.map(header => (<a key={header} className="table-cell">{header}</a>))}
                </div>
                <GuestListItems list={guestList} />
            </div>
        </div>
    )
}

export { GuestList }