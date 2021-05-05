interface Guest {
    name: string;
    numInParty: number;
    email: string;
    address: string;
    status: Status;
    rsvpURL: string;
    foodAllergies: string;

}

enum Status {
    NotSent,
    Sent,
    RSVPed,
    Declined
}

export type {Guest}