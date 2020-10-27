import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import { VALIDATOR_REQUIRE, VALIDATOR_MIN, VALIDATOR_MINLENGTH } from '../../shared/util/validators';
import { useForm } from '../../shared/hooks/form-hook';
import Card from '../../shared/components/UIElements/Card/Card';
import './PlaceForm.css';

const DUMMY = [
    {
        id: '1',
        title:'Title',
        description:'Onsjja jhfkjds kjhkdhs hiiw',
        imageUrl:'https://picsum.photos/id/237/200/300',
        address:'hsu 77',
        location:{
            lat:40,
            lang:-73
        },
        creatorId:'u1'
    },
    {
        id: '2',
        title:'Title',
        description:'Onsjja jhfkjds kjhkdhs hiiw',
        imageUrl:'https://picsum.photos/id/237/200/300',
        address:'hsu 77',
        location:{
            lat:40,
            lang:-73
        },
        creatorId:'u2'
    }
];

const UpdatePlace = () => {
    const [isLoading, setIsLoading] = useState(true);
    const placeId = useParams().placeId;

    const [formState, inputHandler, setFormData] = useForm(
        {
        title: {
            value: '',
            isValid: true
        },
        description: {
            value: '',
            isValid: true
        },
    },false);

    const identifiedPlace = DUMMY.find(id=>{
        return id.id===placeId;
    });

    useEffect(() => {
        if(identifiedPlace) {
            setFormData(
                {
                title: {
                    value: identifiedPlace.title,
                    isValid: true
                },
                description: {
                    value: identifiedPlace.description,
                    isValid: true
                }
            },true);
        }
        setIsLoading(false);
    }, [setFormData, identifiedPlace]);

    const placeUpdateHandler= (event) => {
        event.preventDefault();
        console.log(formState.inputs);
    }

    if (!identifiedPlace) {
        return (
            <div className="center">
                <Card>
                <h2>Not found</h2>
                </Card>
               
            </div>
        );
    }
    console.log(identifiedPlace);
    console.log('hhhh');

    if(!formState.inputs.title.value) {
        return (
            <div className="center">
                <Card>
                    <h2>Not found</h2>
                </Card>
            </div>
        );
    }

    if (isLoading) {
        return (
            <div className="center">
                <h2>Loading....</h2>
            </div>
        );
    }

    return (
        
        <form className="place-form" onSubmit={placeUpdateHandler}>
            <Input
                id="title"
                element="input"
                type="text"
                label="Title"
                validators={[VALIDATOR_REQUIRE()]}
                errorText="Please Enter a valid title"
                onInput={inputHandler}
                value={formState.inputs.title.value}
                valid={formState.inputs.title.isValid}
            />
            <Input
                id="title"
                element="textarea"
                label="Description"
                validators={[VALIDATOR_MINLENGTH(5)]}
                errorText="Please Enter a valid description"
                onInput={inputHandler}
                value={formState.inputs.description.value}
                valid={formState.inputs.title.isValid}
            />
            <Button type="submit" disabled={!formState.isValid} >Update</Button>
        </form>
    )
}

export default UpdatePlace;
