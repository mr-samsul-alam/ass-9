import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import { useHistory } from 'react-router';
import CoursesCard from '../CoursesCard/CoursesCard';
 
 
 
 
const  Courses = () => {
    const [courses, setCourses] = useState([])
    const history =useHistory()
    //Courses  Data are Load here
    useEffect(() => {
        fetch('/course_data_api.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    const handleCardDetails =(id)=>{
        history.push(`/courses/${id}`)
    }
 
    return (
        <div className="container">
            <h1 className=" mx-auto p-2 my-3 w-50 bg-info text-white">Our Courses</h1>
            <Row xs={3} md={3} className="g-4 my-3 ">
                {
                    courses.map(course => <CoursesCard key={course.id} courses={course} handleCardDetails={handleCardDetails}>
                    </CoursesCard>)
                }
            </Row>
 
 
        </div >
    );
};
 
export default Courses;

