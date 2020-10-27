import React, { useCallback, useReducer } from 'react';

import Input from '../../shared/components/FormElements/Input';
import Button from "../../shared/components/FormElements/Button";
import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from "../../shared/util/validators";
import { useForm } from '../../shared/hooks/form-hook';
import './PlaceForm.css';


const NewPlaces=(props)=>{
    const [formState, inputHandler] = useForm({
        title: {
            value: '',
            isValid: false
        },
        description: {
            value: '',
            isValid: false
        },
        address: {
            value: '',
            isvalid: false
        }
    },false);

    

    const placeSubmitHandler = (event) => {
        event.preventDefault();
        console.log(formState.inputs);
    }

    return(
        <form className="place-form" onSubmit={placeSubmitHandler}>
            <Input 
                id="title"
                type="text" 
                label="Title" 
                element="input"
                placeholder="Enter a Title"
                validators={[VALIDATOR_REQUIRE()]} 
                errorText="Please enter a valid title"
                onInput={inputHandler}
            />
            <Input 
                id="address"
                type="text" 
                label="Address" 
                element="input"
                placeholder="Enter your address"
                validators={[VALIDATOR_REQUIRE()]} 
                errorText="Please enter a valid address"
                onInput={inputHandler}
            />
            <Input 
                id="description"
                type="textarea" 
                label="Description" 
                element="textarea"
                placeholder="Enter a Description"
                validators={[VALIDATOR_MINLENGTH(5)]} 
                errorText="Please enter a valid description"
                onInput={inputHandler}
            />
            <Button type="submit" disabled={!formState.isValid}>Add Place</Button>
        </form>
    );
}

export default NewPlaces;