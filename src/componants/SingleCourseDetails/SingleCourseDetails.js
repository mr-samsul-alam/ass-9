import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { Card, Button, Container } from 'react-bootstrap';

const SingleCourseDetails = () => {
    const { id } = useParams()
    const [courses, setCourses] = useState([])
    useEffect(() => {
        fetch('/course_data_api.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])

    const clickedCourse = courses.filter(course => course?.index == id)

    console.log(clickedCourse[0]?._id);


    return (
        <div>
            <Container>
                <Card className="w-100 d-flex flex-row">
                    <Card.Img variant="top" className="w-25 mx-auto mt-1" src={clickedCourse[0]?.picture} />
                    <Card.Body>
                        <Card.Title>Name:{clickedCourse[0]?.instructor_name}</Card.Title>
                        <h5>Course Name:{clickedCourse[0]?.course_name}</h5>
                        <h5>Subject:{clickedCourse[0]?.subject}</h5>
                        <h5><small>Details:{clickedCourse[0]?.details}</small></h5>
                        <Button className="btn btn-info" >Show Details</Button>
                    </Card.Body>
                </Card> </Container>


        </div>
    );
};

export default SingleCourseDetails;