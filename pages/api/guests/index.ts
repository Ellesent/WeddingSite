import type { NextApiRequest, NextApiResponse } from 'next'
import db from '../../../utils/firebasedb';
import { Guest, Status } from '../../../utils/Types';

const regRef = db.collection('guests');

const getAllGuests = async (): Promise<Guest[]> => {
    const snapshot = await regRef.get();
    if (snapshot.empty) return [];
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() as Guest }));
}

const updateGuestStatus = async (guestId: string, status: Status) => {
    await regRef.doc(guestId).update({ status } as Guest)
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
    switch (req.method) {
        case 'POST':
            const ans = await regRef.add(req.body);
            return res.status(200).json({ id: ans.id, ...req.body });
        case 'GET':
            return res.status(200).json(await getAllGuests())
        default:
            return res.status(200).json({message: "not implemented"});
    }
}

export {
    getAllGuests,
    updateGuestStatus
}