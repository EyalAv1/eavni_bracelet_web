import React from 'react';

//import Aux from '../../hoc/Auxuliary/Auxuliary';
import Products from '../../components/Products/Products';
import useFirestore from '../../hooks/useFirebase';

const Shop = props => {
    const { docs } = useFirestore('images');
    return (
        <div >
            {docs && docs.map(doc => (
                <div key={doc.id} >
                    <Products url={doc.url} alt={doc.id} description={doc.description} price={doc.price} />
                </div>
            ))}
        </div>
    );
};

export default Shop;