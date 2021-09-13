import React from 'react'
import { useParams } from 'react-router'
import FakeDatabase from '../data/data';
import ProductList from '../components/ProductList';
import BackButton from '../components/common/BackButton';
import Page404 from './Page404';
const PruductDetailsPage = () => {
    let { id } = useParams();
    let produit = FakeDatabase.getProductByNId(id);
    if (produit) {
        return (
            <div style={{ height: '100%' }}>
                <div className="w3-block w3-padding-left" style={{ height: '100px', backgroundColor: 'green' }}>
                    <div className="w3-bar" style={{ padding: 0, fontSize: "16px" }}>
                        <div className="w3-bar-item"><BackButton /></div>
                        <div className="w3-bar-item w3-right" ><i className="fa fa-bookmark-o w3-text-white"></i></div>
                        <div className="w3-bar-item w3-right"><i className="fa fa-cart-arrow-down w3-text-white"></i></div>
                    </div>
                    <div className=" w3-margin ">
                        <h6 className='w3-text-white'>{produit.title}</h6>
                    </div>
                </div>

            </div>
        )
    }
    else{
        return(
            <div>
                <Page404/>
            </div>
        )
    }
}

export default PruductDetailsPage;
