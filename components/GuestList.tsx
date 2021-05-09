import { useEffect, useState } from "react";
import { Guest } from "../utils/Types";

interface Props {
    list: Guest[]
}


const GuestListItems = (props: Props ) => {


    const exampleGuestList = [
        {
        Name: "bob",
        Number: 5,
        Email: "bob@bob.com",
        Address: "1234 bob st. Bob, WA 12345",
        Status: "Invitation Not Sent Yet",
        URL: "weddingsite/rsvp/1234",
        Allergies: "None"
    },
    {
        Name: "Alice",
        Number: 2,
        Email: "alice@bob.com",
        Address: "1234 bob st. Bob, WA 12345",
        Status: "Invitation Not Sent Yet",
        URL: "weddingsite/rsvp/1234",
        Allergies: "None"
    },
]


    return (
        <>
            {props.list?.map(guest => (
                <div className="table-row divide-x border-b text-center" key={guest.name + guest.email}>
                    <a className="table-cell">{guest.name}</a>
                    <a className="table-cell">{guest.numInParty}</a>
                    <a className="table-cell">{guest.email}</a>
                    <a className="table-cell">{guest.address}</a>
                    <a className="table-cell">{guest.status}</a>
                    <a className="table-cell">{`${window.location.hostname}/rsvp/${guest.id}`}</a>
                    <a className="table-cell">{guest.foodAllergies}</a>
                </div>
            ))}
        </>
    );
}


const GuestList = () => {

    const [guestList, setGuestList] = useState<Guest[]>();

    // get the list of guests from the db on load
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('/api/guests', {method: 'GET'})
            const jsonResponse = await response.json();
            setGuestList(jsonResponse);
            console.log(jsonResponse);
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
                <GuestListItems list={guestList}/>
            </div>
        </div>
    )
}

export { GuestList }