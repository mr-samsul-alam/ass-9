import React from 'react';
import "./TeacherCard.css"

const TeacherCard = (props) => {
    const {name,institution,subject,picture}=props.teacher
    return (

        <div className="col-4">
            <div className="t-card">

                <div>
                    <img className="w-50 border border-3 border-info rounded-circle " src={picture} alt="" />
                </div>
                <h4 className="mt-4"> {name}</h4>
                <p><b>{institution}, <small>{subject}</small> </b></p>
            </div>
        </div>

    );
};

export default TeacherCard;