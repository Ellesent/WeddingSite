

const GuestListItem = () => {


    const exampleGuestList = [{
        Name: "bob",
        Number: 5,
        Email: "bob@bob.com",
        Address: "1234 bob st. Bob, WA 12345",
        Status: "Invitation Not Sent Yet",
        URL: "weddingsite/rsvp/1234",
        Allergies: "None"
    }]


    return (
        <>
            {exampleGuestList.map(guest => (
                <>
                <a>{guest.Name}</a>
                <a>{guest.Number}</a>
                <a>{guest.Email}</a>
                </>
            ))}
        </>
    );
}

const GuestListHeaders = ({ headers }) => {



    return (
        <>
            {headers.map(header => (
                <a className="">{header}</a>
            ))}

        </>
    )
}


const GuestList = () => {
    const headers = ["Name", "# in Party", "Email", "Address", "Status", "RSVP URL", "Food Allergies"]
    return (
        <div className={`grid grid-cols-${headers.length} bg-yellow-100 m-5 border`}>
            <GuestListHeaders headers={headers}></GuestListHeaders>
            <GuestListItem></GuestListItem>
        </div>
    )
}

export { GuestList }