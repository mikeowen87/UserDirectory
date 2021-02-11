import React from "react";
import TableRow from "../TableRow"
import "./style.css";

function listEmployees(props) {
  let employeesToMap = [];
  
  if ( Array.isArray(props.employeesFiltered) && props.employeesFiltered.length) {
    let newArr = [...props.employeesFiltered]
    employeesToMap = newArr;
  }
  else {
    employeesToMap = props.employees
  }

  

  return (
    <table className="list-group search-results">
     
      {employeesToMap.map(result => (
          <TableRow 
            firstName={result.firstName}
            lastName={result.lastName}
            img={result.img}
            number={result.number}
            email={result.email}
            dept={result.dept}
            jobTitle={result.jobTitle} 
          />
        ))} 
    </table>
  );
}

export default listEmployees;

