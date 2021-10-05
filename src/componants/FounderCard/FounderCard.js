import React from 'react';
import "./FounderCard.css"
const FounderCard = (props) => {
    const { image, name, position, details } = props.Person
    return (
        <div className="col-md-4">
            <div className="founder-card p-5">
                <div className="logo-image">
                    <img className="w-50" src={image} alt="" />
                </div>
                <h4 className=
                    "mt-4">{name}</h4>
                <p><b>{position}</b></p>
                <p>Quote:<em>{details}</em></p>
            </div>
        </div>
    );
};

export default FounderCard;