import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { Card, Button, Container } from 'react-bootstrap';
import { useHistory } from 'react-router';
 

const SingleCourseDetails = () => {
    const { id } = useParams()
    const [courses, setCourses] = useState([])
    const history =useHistory()
    useEffect(() => {
        fetch('/course_data_api.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    const handleEnrollNow =()=>{
        history.push('/enrolled')
    }

    const clickedCourse = courses.filter(course => course?.index == id)

    

    return (
        <div>
            <Container>
                <Card className="w-100 d-flex flex-row">
                    <Card.Img variant="top" className="w-50 mx-auto mt-1" src={clickedCourse[0]?.picture} />
                    <Card.Body className="my-auto">
                        <Card.Title>Name: {clickedCourse[0]?.instructor_name}</Card.Title>
                        <h5>Course Name: {clickedCourse[0]?.course_name}</h5>
                        <h5>Subject: {clickedCourse[0]?.subject}</h5>
                        <h5><small>Details: {clickedCourse[0]?.details}</small></h5>
                        <Button  onClick={handleEnrollNow}  className="btn btn-info" >Enroll Now</Button>
                    </Card.Body>
                </Card> </Container>


        </div>
    );
};

export default SingleCourseDetails;