import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import './About.css'
 
const About = () => {
    const [about, setAbout] = useState([]);
    useEffect(() => {
        fetch('/teacher_details.json')
            .then(res => res.json())
            .then(data => setAbout(data)) 
    }, [])
    return (
        <div className="container mt-4">
            <h1 className=" mx-auto p-2 my-4 w-50 bg-info text-white">Our Best Teacher</h1>
            <div className="row">
                {
                    about.map((teacher) => (
                        <div className="col-4">
                            <div className=" cards-border ">
                                <div className="logo-image">
                                    <img className="w-50 border border-3 border-info rounded-circle " src={teacher.picture} alt="" />
                                </div>
                                <h4 className=
                                    "mt-4">Name:{teacher.name}</h4>
                                <p>Details:<b> {teacher.institution}</b> </p>
                                <p> Subject: {teacher.subject} </p>
                            </div>
                        </div> 
                    ))}
            </div>
        </div>
    );
};
 
export default About;

