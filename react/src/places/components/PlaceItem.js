import React, { useState, Fragment } from 'react';

import Card from '../../shared/components/UIElements/Card/Card';
import Button from '../../shared/components/FormElements/Button';
import Modal from '../../shared/components/UIElements/Modal/Modal';
// import Map from '../../shared/components/UIElements/Map/Map';
import './PlaceItem.css';

const PlaceItem = (props)=>{
    const [showmap, setShowMap] = useState(false);
    const [showConfirmModal, setShowConfirmModal] = useState(false);

    const toggleMap = ()=> setShowMap(!showmap);

    const showDeleteHandler = () => {
        setShowConfirmModal(true);
    };

    const cancelDeleteHandler = () => {
        setShowConfirmModal(false);
    };

    const confirmDeleteHandler = () => {
        console.log('Delete');
    };

    return (
        <React.Fragment> 
            <Modal 
                show={showmap}
                toggle={toggleMap}
                header={props.address}
                contentClass="place-item__modal-content"
                footerClass="place-item__modal-actions"
                footer={<Button onClick={toggleMap}>CLOSE</Button>}
                >
                    <div className="map-container">
                        <h1>Here is Map</h1>
                    </div>
            </Modal>
            <Modal
                show={showConfirmModal}
                onCancel={cancelDeleteHandler}
                header="Are you sure?" 
                footerClass="place-item__modal-actions" 
                footer=
                {
                    <Fragment>
                        <Button inverse onClick={cancelDeleteHandler}>Cancel</Button>
                        <Button danger onClick={confirmDeleteHandler}>Delete</Button>
                    </Fragment>
                }
            >
                <p>If you once delete it can't be undone.</p>
            </Modal>

            <li className="place-item">
                <Card>
                    <div className="place-item__image">
                        <img src={props.image} alt={props.title} />
                    </div>
                    <div className="place-item__info">
                        <h2>{props.title}</h2>
                        <h3>{props.address}</h3>
                        <p>{props.description}</p>
                    </div>
                    <div className="place-item__actions">
                        <Button inverse onClick={toggleMap}>VIEW ON MAP</Button>
                        <Button to={`/places/${props.id}`}>EDIT</Button>
                        <Button danger  onClick={showDeleteHandler}>DELETE</Button>

                    </div>
                </Card>
            </li>
        </React.Fragment>
    );
};

export default PlaceItem;