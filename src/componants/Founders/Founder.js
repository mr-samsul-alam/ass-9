import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import "./Founder.css"


const Founder = () => {
    const [person, setPerson] = useState([]);
    useEffect(() => {
        fetch('/founders_data_api.json')
            .then(res => res.json())
            .then(data => setPerson(data))
    }, [])
    return (
        <div className="container">
            <div className="founder-container mt-4">
                <div className="row">
                    {
                        person.map((importantPerson) => (
                            <div className="col-md-4">
                                <div className="founder-card">
                                    <div className="logo-image">
                                        <img className="w-50" src={importantPerson.image} alt="" />
                                    </div>
                                    <h4 className=
                                        "mt-4">Name:{importantPerson.name}</h4>
                                    <p><small>Position:{importantPerson.position}</small></p>
                                    <p>Phone: {importantPerson.phone}</p>
                                </div>
                            </div> 
                        ))}
                </div> 
            </div> 
        </div>
    );
};

export default Founder;

