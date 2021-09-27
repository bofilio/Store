import { useState, useEffect } from 'react'
import { db } from '../firebase/firebaseConfig'

export const useFetchCollection = (collection, filters = [], timeout = 0) => {
    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(true)
    const [error, seterror] = useState(null)

    useEffect(() => {
        setTimeout(async () => {
            try {
                let collectionref = db.collection(collection);
                filters.map(filter => {
                    { }
                    if (filter.collection && filter.doc_id) {
                        const DocRef = db.collection(filter['collection']).doc(filter['doc_id']);
                        collectionref = collectionref.where(filter.key, filter.operator, DocRef);
                    } else {
                        collectionref = collectionref.where(filter.key, filter.operator, filter.value);
                    }

                })
                const response = await collectionref.get();
                let fetched_data = [];
                response.docs.map(doc => {
                    const item = { ...doc.data(), ['id']: doc.id }
                    fetched_data = [...fetched_data, item]
                });
                setData(fetched_data);
                setIsPending(false);
                seterror(false);
            } catch (err) {
                setIsPending(false);
                seterror(err.message)
                console.log({ "message": err.message })
            }
        }, timeout);


    }, [])
    return { data, isPending, error }
}

export const useFetchDocument = (collection, doc_id, timeout = 0) => {
    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(true)
    const [error, seterror] = useState(null)
    useEffect(() => {
        setTimeout(async () => {
            try {
                const doc = await db.collection(collection).doc(doc_id).get();
                setData(await doc.data());
                setIsPending(false);
                seterror(null);
            } catch (err) {
                setIsPending(false)
                seterror(err.message)
                console.log({ "message": err.message })
            }
        }, timeout);

    }, [])

    return { data, isPending, error }
}
