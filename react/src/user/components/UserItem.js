import React from 'react';
import Avater from '../../shared/components/UIElements/Avatar';
import Card from '../../shared/components/UIElements/Card/Card';
import './UserItem.css';
const UserItem = (props)=>{
    return (
        <Card>
            <li className="user-item">
             <div className="user-item__content">
                 <div className="user-item__image">
                     <Avater image={props.image} alt={props.name} />
                 </div>
                 <div className="user-item__info">
                     <h2>{props.name}</h2>
                     <h3>
                         {props.placeCount} {props.placeCount === 1 ? 'place' : 'places'}
                     </h3>
                 </div>
             </div>
        </li>
        </Card>
    );
};

export default UserItem;