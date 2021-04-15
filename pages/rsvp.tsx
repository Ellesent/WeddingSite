const RSVP = () => {
    return (
        <div className="flex flex-col items-center p-20">
            <p className="font-serif text-4xl flex flex-col">
                ENTER THE NAME ON YOUR INVITATION
            <br />
                <p className="text-base self-center">THIS WILL BE USED TO FIND YOUR INVITATION INFORMATION</p>
            </p>
            <input className="border-2 rounded focus:border-yellow-100" type="text" placeholder="e.g. John and Jane Doe" />
        </div>
    )
}

export default RSVP