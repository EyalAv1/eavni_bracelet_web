import React, { useState, useRef, useContext } from 'react';
import { useHistory } from 'react-router';

import Button from '../../components/UI/Button/Button';
import AuthContext from '../../store/auth-context';

const Profile = () => {

    const history = useHistory();
    const newPasswordInputRef = useRef();
    const authCtx = useContext(AuthContext);

    const [isTextShown, setIsTextShown] = useState(false);

    const inputTypeChangeHandler = (event) => {
        event.preventDefault();
        setIsTextShown(!isTextShown);
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const enterNewPassword = newPasswordInputRef.current.value;

        //add validation

        fetch("https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyAQplW59N8PPTNtyBPJsFl-8WWrXcnV2wA", {
            method: 'POST',
            body: JSON.stringify({
                idToken: authCtx.token,
                password: enterNewPassword,
                returnSecureToken: false
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => {
            history.replace('/');
        })
    }

    return (
        <form onSubmit={submitHandler}>
            <label>enter new password</label>
            <div>
            <input type={!isTextShown ? "password" : "input"} id="new-password" minLength="7" ref={newPasswordInputRef}/>
            <button onClick={inputTypeChangeHandler}>SHOW PASSWORD</button>
            </div>
            <div>
                <Button>CHANGE PASSWORD</Button>
            </div>
        </form>
    );
}

export default Profile;