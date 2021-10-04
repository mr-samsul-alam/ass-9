import React from 'react';
import { useEffect, useState } from 'react';
import { Button, Row } from 'react-bootstrap';
import { Carousel } from 'react-bootstrap';
import Cards from '../CoursesCard/CoursesCard';
import { Link } from "react-router-dom";
import { useHistory } from 'react-router';


const Home = () => {
    const [courses, setCourses] = useState([])
    const history =useHistory()
    useEffect(() => {
        fetch('/course_data_api.json')
            .then(res => res.json())
            .then(data => setCourses(data.slice(0, 4)))
    }, [])
    const handleCardDetails =(id)=>{
        console.log(id);
        history.push(`/courses/${id}`)
    }
    return (
        <div>
            <Carousel fade interval={1500}>
                <Carousel.Item>
                    <img
                        className="d-block mx-auto"
                        src="/coaching.jpg"
                        alt="First slide"
                        width="1500px"
                        height="800px"
                         
                    />

                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block mx-auto"
                        src="/confused.jpg"
                        alt="second slide"
                        width="1500px"
                        height="800px"
                    />

 
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block mx-auto"
                        src="/learn.jpg"
                        alt="third slide"
                        width="1500px"
                        height="800px"
                    />
 
                </Carousel.Item>


            </Carousel>
            <h1>Our Courses</h1>
            <div className="container">

                <Row xs={3} md={4} className="g-4 mt-4">
                    {
                        courses.map(course => <Cards handleCardDetails={handleCardDetails} courses={course}> 
                        </Cards>)
                    }
                </Row>
            </div >
            <Link to="/courses">
                <Button variant="warning" >
                     See more
                </Button>
            </Link>
        </div>
    );
};

export default Home;