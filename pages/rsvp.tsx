import styles from '../styles/rsvp.module.css'

const RSVP = () => {
    return (
        <div className="flex flex-col items-center p-20 mb-10 mt-10 bg-coolGray-300 shadow-lg" id='rsvp'>
            <h1 className={`text-4xl font-bold ${styles.textOutline}`}> Please check your email for an invitation and click the link in the email to RSVP! Reach out to the bride and groom for any questions.</h1>
            {/* <p className="font-serif text-4xl flex flex-col">
                IN ORDER TO RSVP, INPUT THE URL WRITTEN ON YOUR INVITATION
            <br />
                <p className="text-base self-center">PLEASE REACH OUT TO THE COUPLE If YOU NEED HELP FINDING THE URL</p>
            </p> */}
        </div>
    )
}

export default RSVP