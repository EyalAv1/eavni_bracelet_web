import React, { useState } from 'react';
import ProgressBar from '../../../components/UI/ProgressBar/ProgressBar';

//import Input from '../../../components/UI/Input/Input';

const UploadImg= () => {
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState(0);

    const types = ['image/jpeg', 'image/png'];

    const changeHandler = (e) => {
        let selected = e.target.files[0];

        if(selected && types.includes(selected.type)){
            setFile(selected);
            setError('');
        } else {
            setFile(null);
            setError('Please select an image file(png or jpeg)');
        }
    }

    const changeDescriptionHandler = (e) => {
       let content = e.target.value;
        setDescription(content);
    }
    const changePriceHandler = (e) => {
        let content = e.target.value;
         setPrice(content);
     }

    return (
        <div>
            <form>
                <div>
                    <p>Description:</p>
                    <textarea onChange={changeDescriptionHandler}/>
                </div>
                <div>
                    <p>price:</p>
                    <input type="text" onChange={changePriceHandler}/>
                </div>
                <label>
                    <p>Upload file:</p>
                    <input type="file" onChange={changeHandler}/>
                </label>
                <div className="output">
                    {error && <div className="error">{error}</div>}
                    {file && <div>{file.name}</div>}
                    {file && <ProgressBar file={file} setFile={setFile} description={description} setDescription={setDescription} price={price} setPrice={setPrice}/>}
                </div>
            </form>
        </div>
    )
}

export default UploadImg;