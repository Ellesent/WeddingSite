

const GuestListItems = () => {


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
            {exampleGuestList.map(guest => (
                <div className="table-row divide-x border-b text-center" key={guest.Name + guest.Email}>
                    <a className="table-cell">{guest.Name}</a>
                    <a className="table-cell">{guest.Number}</a>
                    <a className="table-cell">{guest.Email}</a>
                    <a className="table-cell">{guest.Address}</a>
                    <a className="table-cell">{guest.Status}</a>
                    <a className="table-cell">{guest.URL}</a>
                    <a className="table-cell">{guest.Allergies}</a>
                </div>
            ))}
        </>
    );
}


const GuestList = () => {
    const headers = ["Name", "# in Party", "Email", "Address", "Status", "RSVP URL", "Food Allergies"]
    return (
        // guest list table
        <div className={`table w-full bg-yellow-100 m-5 border-collapse`}>
            <div className="table-row-group">
                <div className="table-row headers divide-x border-b text-center">
                    {headers.map(header => (<a key={header} className="table-cell">{header}</a>))}
                </div>
                <GuestListItems/>
            </div>
        </div>
    )
}

export { GuestList }