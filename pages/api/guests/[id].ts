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
        console.log(doc);

        if (!doc.exists) {
            console.log("empty");
            return res.status(400);
        }

        switch (req.method) {
            case 'GET':
                return res.status(200).json(doc.data());
            case 'POST':
                return res.status(200).json(doc.data());
            case 'DELETE':
               const ans = await regRef.doc(id).delete();
               return res.status(200).json({ deleteTime: ans.writeTime, ...req.body });
            case 'PUT':
                 const updateAns = await regRef.doc(id).update(req.body);
                 return res.status(200).json({ updateTime: updateAns.writeTime, ...req.body });

            default:
                return res.status(200).json({ message: "not implemented" });
        }
    }
    catch (ex) {
        console.error(`Exception thrown when querying firebase - ${ex}`)
        return res.status(500);
    }
}