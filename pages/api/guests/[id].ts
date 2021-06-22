import type { NextApiRequest, NextApiResponse } from 'next'
import db from '../../../utils/firebasedb';

const regRef = db.collection('guests');
export default async (req: NextApiRequest, res: NextApiResponse) => {
    const { id } = req.query;

    console.log("id is" + id);

    if (!id) { return res.status(500) }

    if (Array.isArray(id)) {
        console.log("multiple docs found - something messed up");
        return res.status(500);
    }
    try {
        const doc = await regRef.doc(id).get();

        if (!doc.exists) {
            console.log("empty");
            return res.status(400);
        }

        return res.status(200).json(doc.data());
    }
    catch (ex) {
        console.error(`Exception thrown when querying firebase - ${ex}`)
        return res.status(500);
    }
}