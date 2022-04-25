import React from 'react';
import { useParams } from 'react-router-dom';
// import Aux from '../../hoc/Auxuliary/Auxuliary';
import useFirestore from '../../../hooks/useFirebase'
import Image from '../../UI/Image/Image';
import Products from '../Products';

const HomePage = props => {
    const param = useParams();

    const { docs } = useFirestore('images');
    // let search = window.location.search;
    // let params = new URLSearchParams(search);
     let foo = param.ImgName;

    return (
        // <Route path="/shop/orderPage/:ImgName" >
        <div>
            <h1 style={{size: '50px', color: 'black'}}>Welcome to EAvni</h1>
            <h2>this is product order page</h2>
            {docs && docs.map((doc) => (
                //(foo === doc.imgName) ? <Products url={doc.url} alt={doc.id} description={doc.desctiption} price = {doc.price}/> : null
                (foo === doc.imgName) ? <Image url={doc.url} alt={doc.id}/> : null
            ))}
            <h3>this is the description of the product</h3>
        </div>
        // </Route>
    );
};

export default HomePage;