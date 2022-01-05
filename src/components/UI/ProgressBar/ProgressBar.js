import React, { useEffect } from 'react';
import useStorage from '../../../hooks/useStorage';
import classes from './ProgressBar.css';
const ProgressBar = ({file, setFile, description, setDescription, price, setPrice, imgName, setImgName}) => {
    const { url, progress } = useStorage(file, description, price, imgName);
    useEffect(() =>{
        if(url) {
            setFile(null);
            setDescription("");
            setImgName("");
            setPrice(0);
        }
    }, [url, setFile, setDescription, setPrice, setImgName]);

    return(
        <div className={classes.ProgressBar} style={{width: progress + '%'}}></div>
    )

}

export default ProgressBar;