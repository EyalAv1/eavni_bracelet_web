/* import React, { useState, useEffect } from 'react'; */
import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';

import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import classes from './Auth.css';
import { updateObject, checkValidity } from '../../shared/utilitiy';
import AuthContext from '../../store/auth-context'; 

 const Auth = props => {

        const history = useHistory();

        const authCtx = useContext(AuthContext);
        
        const [authForm, setAuthForm] = useState({
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Email Address'
                },
                value: '',
                validation: {
                    required: true,
                    isEmail: true
                },
                valid: false,
                touched: false
            },
            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Password'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 6
                },
                valid: false,
                touched: false
            }
        });
        const [signUpForm, setsignUpForm] = useState({
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Full Name'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            idNum: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'ID Number'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 8,
                    maxLength: 9
                },
                valid: false,
                touched: false
            },
            street: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Street'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            zipCode: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'ZIP Code'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 5,
                    maxLength: 5
                },
                valid: false,
                touched: false
            },
            country: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Country'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Your Mail'
                },
                value: '',
                validation: {
                    required: true,
                    isEmail: true
                },
                valid: false,
                touched: false
            },
            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Password'
                },
                value: '',
                validation: {
                    required: true,
                    touched: false
                },
                valid: true
            }
        });
        const [isSignup, setIsSignup] = useState(false);

        const [isLoading, setIsLoading] = useState(false);

        const switchAuthModeHandler = () => {
            setIsSignup(!isSignup);
        }

        const inputChangedHandler = (event, controlName) => {
            const updatedControls = updateObject(authForm, {
                [controlName]: updateObject(authForm[controlName], {
                    value: event.target.value,
                    valid: checkValidity(event.target.value, authForm[controlName].validation),
                    touched: true
                })
            });
            setAuthForm(updatedControls);
        }
        const inputSignUpChangedHandler = (event, controlName) => {
            const updatedControls = updateObject(signUpForm, {
                [controlName]: updateObject(signUpForm[controlName], {
                    value: event.target.value,
                    valid: checkValidity(event.target.value, signUpForm[controlName].validation),
                    touched: true
                })
            });
            setsignUpForm(updatedControls);
        }

        const submitHandler = (event) => {
            event.preventDefault();

            const enteredEmail = isSignup ? signUpForm.email.value : authForm.email.value;
            const enteredPassword = isSignup ? signUpForm.password.value: authForm.password.value;

            setIsLoading(true);
            let url;
            if(!isSignup){
                url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAQplW59N8PPTNtyBPJsFl-8WWrXcnV2wA';
            } else {
                url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAQplW59N8PPTNtyBPJsFl-8WWrXcnV2wA';
            }
            fetch(url , {
                method: 'POST',
                body: JSON.stringify({
                    email: enteredEmail,
                    password: enteredPassword,
                    returnSecureToken: true
                }),
                headers: {
                    'Content-type': 'application/json'
                }
            }).then((res) => {
                setIsLoading(false);
                if(res.ok) {
                    return res.json();
                } else {
                    return res.json().then((data) => {
                        let errorMessage = 'Authentication faild';
                        //if(data && data.error && data.error.message) {
                        //    errorMessage = data.error.message;
                        //}
                        console.log(data.error.message); 
                        throw new Error(errorMessage);
                    });
                }
            }).then(data => {
                console.log(data);
                if(isSignup){
                    fetch('https://eavni-bd-default-rtdb.firebaseio.com/users/' + data.localId + '.json', {
                        method: 'POST',
                        body: JSON.stringify({
                            name: signUpForm.name.value,
                            idNum: signUpForm.idNum.value,
                            street: signUpForm.street.value,
                            zipCode: signUpForm.zipCode.value,
                            country: signUpForm.country.value
                        })
                    });
                }
                authCtx.login(data.idToken);
                authCtx.loginLocalId(data.localId);
                history.replace('/');
            })
            .catch(err => {
                alert(err.message);
            });
        };

        const formElementsArray = [];
        for (let key in authForm) {
            formElementsArray.push({
                id: key,
                config: authForm[key]
            });
        }

        const signUpFormElementsArray = [];
        for (let key in signUpForm) {
            signUpFormElementsArray.push({
                id: key,
                config: signUpForm[key]
            });
        }

        let form = !isSignup ? formElementsArray.map(formElement => (
            <Input
                key={formElement.id}
                elementType={formElement.config.elementType}
                elementConfig={formElement.config.elementConfig}
                value={formElement.config.value}
                invalid={!formElement.config.valid}
                shouldValidate={formElement.config.validation}
                touched={formElement.config.touched}
                changed={(event) => inputChangedHandler(event, formElement.id)} />)) 
                
                : signUpFormElementsArray.map(formElement => (
            <Input
                key={formElement.id}
                elementType={formElement.config.elementType}
                elementConfig={formElement.config.elementConfig}
                value={formElement.config.value}
                invalid={!formElement.config.valid}
                shouldValidate={formElement.config.validation}
                touched={formElement.config.touched}
                changed={(event) => inputSignUpChangedHandler(event, formElement.id)} />
        ));

    return (
        <div className={classes.Auth} >
            <form onSubmit={submitHandler}>
                {form}
               {!isLoading && <Button>SUBMIT</Button> }
               {isLoading && <p>Sending request...</p>}
            </form>
            <Button
                clicked={switchAuthModeHandler}
                btnType="Danger" >SWITCH TO {!isSignup ? 'SIGNUP' : 'SIGNIN'}</Button>
        </div>
        );
 }

 export default Auth;