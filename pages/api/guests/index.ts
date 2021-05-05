import type { NextApiRequest, NextApiResponse } from 'next'
import db from '../../../utils/firebasedb';

const regRef = db.collection('guests');
export default async (req: NextApiRequest, res: NextApiResponse) => {
    switch (req.method) {
        case 'POST':
            const ans = await regRef.add(req.body);
            return res.status(200).json({id: ans.id, ...req.body});
        default:
            return res.status(200).json({message: "not implemented"});
    }
}