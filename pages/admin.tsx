import { FirebaseAuthConsumer } from '@react-firebase/auth';
import { useState } from 'react';
import firebase from "firebase/app";

const Admin = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [user, setUser] = useState<firebase.User>(null);


    const handleSubmit = async (event) => {
        try {
            const userCredential = await firebase.auth().signInWithEmailAndPassword(username, password);
            setUser(userCredential.user);
            console.log(user);
        }
        catch (e) {
            console.error(e);
        }
    }


    return (
        <div className="flex flex-col items-start m-5">
            <p>Email</p>
            <input className="border" type="text" placeholder="email" onChange={(event) => setUsername(event.target.value)} />
            <p>Password</p>
            <input className="border" type="text" placeholder="password" onChange={(event) => setPassword(event.target.value)} />
            <input type="submit" className="border p-1 m-5" value="submit" onClick={handleSubmit} />
        </div>
    )
}


export default Admin