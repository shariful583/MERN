import React from 'react';
import { useParams } from 'react-router-dom';

import PlaceList from '../components/PlaceList';

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
const UserPlaces = (props)=>{
    const userId = useParams().userId;
    const loadedPlaces = DUMMY.filter(place=>place.creatorId===userId)
    return <PlaceList items={loadedPlaces} />
};

export default UserPlaces;