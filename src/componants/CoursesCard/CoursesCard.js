import React from 'react';
import {Col, Card, Button } from 'react-bootstrap';
 
const  CoursesCard = (props) => {
    const { index,picture, instructor_name, details, course_name, subject } = props.courses
    return (
        <div> 
            <Col>
                <Card className="w-100">
                    <Card.Img variant="top" className="w-75 mx-auto mt-1" src={picture} />
                    <Card.Body>
                        <Card.Title>Name:{instructor_name}</Card.Title>
                        <h5>Course Name:{course_name}</h5>
                        <h5>Subject:{subject}</h5>
                        
                        <Button onClick={()=>props.handleCardDetails(index)} className="btn btn-info p-2" >Show Details</Button>
                    </Card.Body>
                </Card>
            </Col>
 
 
        </div>
    );
};
 
export default CoursesCard;

