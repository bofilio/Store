import { db } from "../firebaseConfig";


export const fetchProductsListByCategory = async (cat_name) => {
    const categoryDocRef = db.collection('category').doc(cat_name);
    const data = await db.collection('products').where('category', '==', categoryDocRef).get();
    let freshlist = [];
    data.docs.map(item => {
        const data ={ ...item.data(), ['id']: item.id }
        freshlist = [...freshlist, data]
    });
    return freshlist;

}

export const fetchProductById = async (id) => {
    const doc = await db.collection('products').doc(id).get();
    const data = await doc.data();
    return data;
}