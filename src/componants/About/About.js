import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import TeacherCard from '../TeacherCard/TeacherCard';

const About = () => {
    const [about, setAbout] = useState([]);
    //--- Teachers Data are Load here
    useEffect(() => {
        fetch('/teacher_details.json')
            .then(res => res.json())
            .then(data => setAbout(data)) 
    }, [])
    return (
        <div className="container mt-4">
            <h1 className=" mx-auto p-2 my-4 w-50 bg-info text-white">Our Best Teacher</h1>
            <div className="row ">
                {
                    about.map((teacher) =>(<TeacherCard key={teacher._id} teacher={teacher}></TeacherCard>
                         
                        
                    ))}
            </div>
            <Link to="/founders"><Button className='btn btn-warning p-2 m-5'>Our Founder</Button></Link>
        </div>
    );
};
 
export default About;

