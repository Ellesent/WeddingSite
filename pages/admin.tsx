import { FirebaseAuthConsumer } from '@react-firebase/auth';
import { useState } from 'react';
import firebase from "firebase/app";

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
        <div className="flex flex-col items-start m-5">
            <p>Email</p>
            <input className="border" type="email" placeholder="email" onChange={(event) => setUsername(event.target.value)} />
            <p>Password</p>
            <input className="border" type="password" placeholder="password" onChange={(event) => setPassword(event.target.value)} />
            <input type="submit" className="border p-1 m-5" value="submit" onClick={handleSubmit} />
            {error && <p className="text-red-500">{error}</p>}
        </div>
    )
}


export default Admin