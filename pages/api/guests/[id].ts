import type { NextApiRequest, NextApiResponse } from 'next'
import db from '../../../utils/firebasedb';

const regRef = db.collection('guests');
export default async (req: NextApiRequest, res: NextApiResponse) => {
    const { id } = req.query
    const doc = await regRef.doc(id as string).get();

    if (!doc.exists) res.status(400);
    
    res.status(200).json(doc.data());
}