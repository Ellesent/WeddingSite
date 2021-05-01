

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
                    <a>{guest.Address}</a>
                    <a>{guest.Status}</a>
                    <a>{guest.URL}</a>
                    <a>{guest.Allergies}</a>
                </>
            ))}
        </>
    );
}


const GuestList = () => {
    const headers = ["Name", "# in Party", "Email", "Address", "Status", "RSVP URL", "Food Allergies"]
    return (
        // guest list table
        <div className={`grid grid-cols-${headers.length}  bg-yellow-100 m-5 border items-center justify-items-center `}>
            {headers.map(header => (<a key={header} className="">{header}</a>))}  
            <GuestListItem></GuestListItem>
        </div>
    )
}

export { GuestList }