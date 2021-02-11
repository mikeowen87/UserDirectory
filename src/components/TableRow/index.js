import React from "react";
import Row from "../Row";
import Col from "../Col";
import "./style.css";

function employeeRow(props) {
  return (
    <tr>
        <Row>
            <Col size="md-1">
            <img alt="employee" src={props.img} className="img-fluid" />
            </Col>
            <Col size="md-4">
                <h6>Name: {props.firstName} {props.lastName}</h6>
                <h6>Number: {props.number}</h6>
                <h6>Email: {props.email}</h6>
            </Col>
            <Col size="md-4">
                <h6>Department: {props.dept}</h6>
                <h6>Job Title: {props.jobTitle}</h6>
            </Col>
        </Row> 
    </tr> 
  );
}

export default employeeRow;


// <button 
//       onClick={props.onClick} 
//       className={`card-btn ${props["data-value"]}`} 
//       data-value={props["data-value"]} 
//     />