interface Guest {
    name: string;
    numInParty: number;
    email: string;
    address: string;
    status: Status;
    id?: string;
    foodAllergies: string;

}

export enum Status {
    Not_Sent,
    Save_The_Date_Sent,
    Invitation_Sent,
    RSVPed,
    Declined
}

export type {Guest}
