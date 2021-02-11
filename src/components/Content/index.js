import React from "react";
import Row from "../Row";
import Col from "../Col";
import Table from "../Table";
import Btn from "../button";


function Content(props) {
    return <div>
        <Row>
            <Col size="md-12">
                <h2>Employee Directory</h2>
            </Col>
        </Row>
        <Row>
            <Col size="md-3">
                <select
                    value={props.sortSelection}
                    onChange={props.handleSortChange}
                    data-value="sort"
                >
                    <option value="lastName">Last Name</option>
                    <option value="dept">Department</option>
                    <option value="title">Job Title</option>
                </select>
                <Btn
                    onClick={props.handleBtnClick}
                    data-value="sort"
                    date-choice={props.sortSelection}
                    btnName="Sort by"
                />
            </Col>
            <Col size="md-3">
                <select
                    value={props.filterSelection}
                    onChange={props.handleFilterChange}
                    data-choice={props.filterSelection}
                    data-value="filter"
                >
                    <option value="none">none</option>
                    <option value="acc">accounting</option>
                    <option value="sales">sales</option>
                    <option value="prod">production</option>
                    <option value="it">info tech</option>
                </select>

                <Btn
                    onClick={props.handleBtnClick}
                    data-value="filter"
                    btnName="Filter by Dept"
                />
            </Col>
            <Col size="md-3">
                <Btn
                    onClick={props.handleBtnClick}
                    data-value="fire"
                    color="danger"
                    btnName="fire them all!"
                />
            </Col>
        </Row>
        <Row>
            <Col size="md-12">
                <Table
                    employees={props.employees}
                    employeesFiltered={props.employeesFiltered}
                />
            </Col>
        </Row>

    </div>;
}

export default Content;