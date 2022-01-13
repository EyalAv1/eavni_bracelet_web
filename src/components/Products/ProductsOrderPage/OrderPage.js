import React from 'react';
import { useParams } from 'react-router-dom';
// import Aux from '../../hoc/Auxuliary/Auxuliary';
import useFirestore from '../../../hooks/useFirebase'
import Image from '../../UI/Image/Image';

const HomePage = props => {
    const param = useParams();

    const { docs } = useFirestore('images');
    // let search = window.location.search;
    // let params = new URLSearchParams(search);
     let foo = param.ImgName;

    return (
        <label>
            <h1 style={{size: '50px', color: 'black'}}>Welcome to EAvni</h1>
            <h2>this is product order page</h2>
            {docs && docs.map((doc) => (
                (foo === doc.imgName) ? <Image url={doc.url} /> : null
            ))}
            <h3>here will be the description about the bracelet</h3>
        </label>
    );
};

export default HomePage;