import { FirebaseAuthConsumer } from '@react-firebase/auth';
import { useState } from 'react';
import firebase from "firebase/app";
import { GuestList } from '../components/GuestList';

const Admin = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [user, setUser] = useState<firebase.User>(null);

    const [error, setError] = useState("");


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


    return (
        user ?
            // Side navigation bar for admin page
            <div className="flex m-5">
                <div className="side-bar flex flex-col bg-rose-300 p-5 items-center border border-coolGray-500 rounded divide-y divide-coolGray-500">
                    <a className="p-5">Guest List</a>
                    <a className="p-5">Venue Information</a>
                    <a className="p-5">Site Properties</a>
                </div>
                <GuestList></GuestList>
            </div>
            :
            <div className="flex flex-col items-start m-5">
                <p>Email</p>
                <input className="border" type="email" placeholder="email" onChange={(event) => setUsername(event.target.value)} value={username} />
                <p>Password</p>
                <input className="border" type="password" placeholder="password" onChange={(event) => setPassword(event.target.value)} value={password} />
                <input type="submit" className="border p-1 m-5" value="submit" onClick={handleSubmit} />
                {error && <p className="text-red-500">{error}</p>}
            </div>
    )
}


export default Admin