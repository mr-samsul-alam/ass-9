import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import FounderCard from '../FounderCard/FounderCard';

import "./Founder.css"


const Founder = () => {
    const [persons, setPerson] = useState([]);
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
                        persons.map((Person) => (<FounderCard key={Person.index} Person={Person} ></FounderCard>
                            
                        ))}
                </div> 
            </div> 
             
        </div>
    );
};

export default Founder;

