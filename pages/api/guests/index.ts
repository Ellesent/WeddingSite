import type { NextApiRequest, NextApiResponse } from 'next'
import db from '../../../utils/firebasedb';
import { Guest } from '../../../utils/Types';

const regRef = db.collection('guests');
const getAllGuests = async (): Promise<Guest[]> => {
    const snapshot = await regRef.get();
    if (snapshot.empty) return [];
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() as Guest }));
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
    switch (req.method) {
        case 'POST':
            const ans = await regRef.add(req.body);
            return res.status(200).json({ id: ans.id, ...req.body });
        case 'GET':
            
        default:
            return res.status(200).json({message: "not implemented"});
    }
}