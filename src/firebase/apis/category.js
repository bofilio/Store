import { db } from '../firebaseConfig'

const caterory={
    name:"",
    icon:null,
    bief:"",
    color:""
}

export const fetchCategoriesList = async () => {
    const response = db.collection('category');
    const data = await response.get();
    let freshlist = [];
    data.docs.map(item => {
        freshlist = [...freshlist, item.data()]
    });
    return freshlist;
}
export const fetchCategoryByName = async (name) => {
    const doc = await db.collection('category').doc(name).get();
    const data=await doc.data();
    return data;
}