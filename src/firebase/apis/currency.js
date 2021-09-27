import { db } from '../firebaseConfig'

export const getDefaultCurrency = async () => {
    const currencyRef = db.collection('currencies');
    const response= await currencyRef.where("default", "==", true).get();
    response.docs.map(item => {
        const data ={ ...item.data(), ['id']: item.id }
        console.log(data);
        return data;
    });
}
