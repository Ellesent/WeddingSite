import { FirebaseAuthConsumer } from '@react-firebase/auth';
import { useEffect, useState } from 'react';
import firebase from "firebase/app";
import { GuestList } from '../components/GuestList';
import { Guest, Status } from '../utils/Types';


enum SideBar {
    GuestList,
    VenueInformation,
    WebsiteProperties
}

const Admin = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [user, setUser] = useState<firebase.User>(null);

    const [error, setError] = useState("");

    const [adminPanelSelected, setAdminPanelSelected] = useState(SideBar.GuestList);

    // check if user already signed in on component load
    useEffect(() => {
        firebase.auth().onAuthStateChanged((u) => {
            if (u) {
                //user is already signed in
                setUser(u);
                console.log("sdfs")
            }
            else {
                // user is signed out
            }
        })
    }, [])

    const handleSubmit = async (event) => {
        // remove previous error
        setError("");
        try {
            const userCredential = await firebase.auth().signInWithEmailAndPassword(username, password);
            setUser(userCredential.user);
            console.log(user);
        }
        catch (e) {
            console.error(e);
            setError(e.message);
            setUsername("");
            setPassword("");
        }
    }

    // figure out which panel to display
    let panel = <></>

    switch (adminPanelSelected) {
        case SideBar.GuestList: {
            panel = <GuestListPanel></GuestListPanel>
            break;
        }
        case SideBar.VenueInformation: {
            panel = <div></div>
            break;
        }
        case SideBar.WebsiteProperties: {
            panel = <div></div>
            break;
        }
        default: {
            panel = <GuestListPanel></GuestListPanel>
        }
    }

    const test = async () => {
        try {
            await fetch("/api/email", {
              "method": "POST",
              "headers": { "content-type": "application/json" },
              "body": JSON.stringify(testEmail)
            })
          } catch (error) {
              console.error(error);
              // toast error message. whatever you wish 
          }
    }

    const testEmail = {
        'subject' : 'test-subject',
        'text': 'test-text',
        'html': '<strong>and easy to do anywhere, even with Node.js</strong>',
        'email': 'noreply@caseyandtomgetmarried.com'
    }



    return (
        user ?
            // Side navigation bar for admin page
            <div className="flex m-5">
                <div className="side-bar flex flex-col flex-none bg-rose-300 p-5 items-center border border-coolGray-500 rounded divide-y divide-coolGray-500">
                    <button onClick={() => { setAdminPanelSelected(SideBar.GuestList) }} className="p-5">Guest List</button>
                    <button onClick={() => { setAdminPanelSelected(SideBar.VenueInformation) }} className="p-5">Venue Information</button>
                    <button className="p-5">Website Properties</button>
                    <button  onClick={() => test()}>Send test email</button>
                </div>
                {panel}
            </div>
            :
            <div className="flex flex-col items-center m-5">
                <p>Email</p>
                <input className="border" type="email" placeholder="email" onChange={(event) => setUsername(event.target.value)} value={username} />
                <p>Password</p>
                <input className="border" type="password" placeholder="password" onChange={(event) => setPassword(event.target.value)} value={password} />
                <input type="submit" className="border p-1 m-5" value="submit" onClick={handleSubmit} />
                {error && <p className="text-red-500">{error}</p>}
            </div>
    )
}

const GuestListPanel = () => {
    const [showAddGuest, setShowAddGuest] = useState(false);
    return (
        <div className="flex flex-col flex-auto">
            <GuestList></GuestList>
            <button className="border-1 bg-yellow-400 justify-self-center self-center p-2" onClick={() => { setShowAddGuest(true) }}>Add Guest</button>
            {showAddGuest && <AddGuestSection />}
        </div>
    )
}

const AddGuestSection = () => {
    const [partyName, setPartyName] = useState("");
    const [partyNumber, setPartyNumber] = useState(0);
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [allergies, setAllergies] = useState("");
    const [submit, setSubmit] = useState(false);

    // add new guest to list
    useEffect(() => {
        const push = async () => {

            // create item
            const newGuest: Guest = {name: partyName, numInParty: partyNumber, email: email, address: address, foodAllergies: allergies, status:  0}

            const settings = {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newGuest)
            };
            try {
           const response = await fetch('/api/guests', settings);
           const json = await response.json();
           console.log(json);
            }
            catch (err) {
                console.error(`Couldn't add user. Error is ${err}`);
            }
            setSubmit(false);
        }

        if (submit) {push()}
    }, [submit])
    return (
        <div className="flex m-5 justify-evenly flex-wrap">
            <input type="text" placeholder="Party Name" onChange={(e) => {setPartyName(e.target.value)}}/>
            <input type="number" placeholder="# in Party" onChange={(e) => {setPartyNumber(Number(e.target.value))}} />
            <input type="email" placeholder="Email Address" onChange={(e) => {setEmail(e.target.value)}}/>
            <input type="text" placeholder="Physical Address" onChange={(e) => {setAddress(e.target.value)}}/>
            <input type="text" placeholder="Food Allergies" onChange={(e) => {setAllergies(e.target.value)}}/>
            <button className="border bg-yellow-200" onClick={() => setSubmit(true)}>Submit</button>
        </div>
    )
}


export default Admin