import React, { useState } from 'react';
import ProgressBar from '../../../components/UI/ProgressBar/ProgressBar';

//import Input from '../../../components/UI/Input/Input';
// import Button from '../../../components/UI/Button/Button';

const UploadImg= () => {
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState(0);
    const [imgName, setImgName] = useState("");
    // const [isClicked, setIsClicked] = useState(false);

    const types = ['image/jpeg', 'image/png'];

    const changeHandler = (e) => {
        let selected = e.target.files[0];

        if(selected && types.includes(selected.type) && price > 0 && description !== ""){
            setFile(selected);
            setImgName(selected.name);
            setError('');
        } else {
            setFile(null);
            setImgName("");
            setError('Please you\'ve filled in all the fields and you select an image file(png or jpeg)');
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
                    {file && <ProgressBar file={file} setFile={setFile}
                                          description={description} setDescription={setDescription}
                                          price={price} setPrice={setPrice}
                                          imgName={imgName} setImgName={setImgName}/>}
                </div>
            </form>
        </div>
    )
}

export default UploadImg;