import React, { useEffect } from 'react';
import useStorage from '../../../hooks/useStorage';
import classes from './ProgressBar.css';
const ProgressBar = ({file, setFile, description, setDescription, price, setPrice}) => {
    const { url, progress } = useStorage(file, description, price);
    useEffect(() =>{
        if(url) {
            setFile(null);
            setDescription("");
            setPrice(0);
        }
    }, [url, setFile, setDescription, setPrice]);

    return(
        <div className={classes.ProgressBar} style={{width: progress + '%'}}></div>
    )

}

export default ProgressBar;