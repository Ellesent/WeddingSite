import { FirebaseAuthConsumer } from '@react-firebase/auth';
import { useState } from 'react';
import firebase from "firebase/app";
import { GuestList } from '../components/GuestList';


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



    return (
        user ?
            // Side navigation bar for admin page
            <div className="flex m-5">
                <div className="side-bar flex flex-col flex-none bg-rose-300 p-5 items-center border border-coolGray-500 rounded divide-y divide-coolGray-500">
                    <button onClick={() => { setAdminPanelSelected(SideBar.GuestList) }} className="p-5">Guest List</button>
                    <button onClick={() => { setAdminPanelSelected(SideBar.VenueInformation) }} className="p-5">Venue Information</button>
                    <button className="p-5">Website Properties</button>
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

    return (
        <div className="flex m-5 justify-evenly">
            <input type="text" placeholder="Party Name" />
            <input type="number" placeholder="# in Party"/>
            <input type="email" placeholder="Email Address"/>
            <input type="text" placeholder="Physical Address"/>
            <input type="text" placeholder="Food Allergies"/>
        </div>
    )
}


export default Admin