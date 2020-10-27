import React, { useState, useContext } from 'react';

import Card from '../../shared/components/UIElements/Card/Card';
import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import { VALIDATOR_EMAIL, VALIDATOR_MINLENGTH,VALIDATOR_REQUIRE } from '../../shared/util/validators';
import { useForm } from '../../shared/hooks/form-hook';
import { AuthContext } from '../../shared/context/auth-context';
import './auth.css';

const Auth = () => {
    const auth = useContext(AuthContext);
    const [isLogin, setIsLogin] = useState(true);

    const [ formState, inputHandler, setFormData ] = useForm({
        email: {
            value: '',
            isValid: false
        },
        password: {
            value: '',
            isvalid: false
        }
    }, false);

    const toggleLoginhandler = () => {
        if (!isLogin) {
            setFormData(
                {
                    ...formState.inputs,
                    name: undefined
                },
                formState.inputs.email.isValid && formState.inputs.password.isValid
            );
        } else {
            setFormData(
                {
                    ...formState.inputs,
                    name: {
                        value: '',
                        isValid: false
                    }
                },
                false
            );
        }
        setIsLogin(prevState => !prevState);
    };

    const authSubmitHandler = (event) => {
        event.preventDefault();
        auth.login();
        console.log(formState.inputs);
    }
    
    return (
        <Card className="authentication">
            <h2>Auth</h2>
            <hr/>
            <form onSubmit={authSubmitHandler}>
                {!isLogin && 
                    <Input
                    type="text" 
                    element="input" 
                    label="Name" 
                    id="name"
                    placeholder="Enter your name"
                    validators={[VALIDATOR_REQUIRE()]}
                    errorText="Please enter a valid name"
                    onInput={inputHandler}
                />
                }
                <Input
                    type="email" 
                    element="input" 
                    label="Email" 
                    id="email"
                    placeholder="Enter your email"
                    validators={[VALIDATOR_EMAIL()]}
                    errorText="Please enter a valid email address"
                    onInput={inputHandler}
                />
                <Input
                    type="password" 
                    element="input" 
                    label="Password" 
                    id="password"
                    placeholder="Enter your password"
                    validators={[VALIDATOR_MINLENGTH(5)]}
                    errorText="Please enter a valid password"
                    onInput={inputHandler}
                />
                <Button disabled={!formState.isValid}>{isLogin ? 'Login' : 'Sign Up'}</Button>
            </form>
            <Button inverse onClick={toggleLoginhandler}>{isLogin ? 'Sign Up' : 'Login'}</Button>
        </Card>
    )
}

export default Auth;
