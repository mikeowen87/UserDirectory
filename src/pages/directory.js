import React, { Component } from "react";
import Container from "../components/Container";
import { populateEmployees } from "../utils/API";
import { department, jobTitle } from "../utils/deptAndTitle";
import Content from "../components/Content"



class Directory extends Component {
  state = {
    employees: [],
    employeesFiltered: [],
    sortSelection: "",
    filterSelection: ""
  };

  // When the component mounts, load the next dog to be displayed
  componentDidMount() {
    this.loadEmployees();
    console.log("mounting")
  };

  loadEmployees = () => {
    let response = [];

    populateEmployees()
      .then(res => {

        response = res.data.results
        const newEmployeesFirst = response.map((item) => {
          return {
            firstName: item.name.first,
            lastName: item.name.last,
            number: item.phone,
            email: item.email,
            img: item.picture.medium,
            dept: department(),
          };
        });

        const newEmployeesFinal = newEmployeesFirst.map((item) => {
          return {
            ...item,
            jobTitle: jobTitle(item.dept)
          }
        });
        console.log(newEmployeesFinal)
        this.setState({ employees: newEmployeesFinal });
      })
      .catch(err => console.log(err));    
  };
  
  handleBtnClick = event => {
    const btnType = event.target.attributes.getNamedItem("data-value").value;
    // let newState = { ...this.state };

    console.log(btnType)
    // console.log(newState)
    

    switch (btnType) {
      case "sort":

        if (this.state.sortSelection === "lastName") {
          let lastName = this.state.employees.sort((a, b) => (a.lastName > b.lastName) ? 1 : -1)
          this.setState({ employees: lastName })
        }
        else if (this.state.sortSelection === "dept") {
          let dept = this.state.employees.sort((a, b) => (a.dept > b.dept) ? 1 : -1)
          this.setState({ employees: dept })
        }
        else if (this.state.sortSelection === "title") {
          let title = this.state.employees.sort((a, b) => (a.jobTitle > b.jobTitle) ? 1 : -1)
          this.setState({ employees: title })
        }
        
      break;
    

      case "filter":
        let filterBy = this.state.filterSelection
        switch (filterBy) {
          case "none":
            let clearVal = [];
            this.setState({ employeesFiltered: clearVal });
            break;
          case "acc":
            let accounting = this.state.employees.filter(e => e.dept.includes("accounting"));
            this.setState({ employeesFiltered: accounting });
            break;
          case "sales":
            let sales = this.state.employees.filter(e => e.dept.includes("sales"));
            this.setState({ employeesFiltered: sales });
            break;
          case "prod":
            let prod = this.state.employees.filter(e => e.dept.includes("production"));
            this.setState({ employeesFiltered: prod });
            break;
          case "it":
            let it = this.state.employees.filter(e => e.dept.includes("information technology"));
            this.setState({ employeesFiltered: it });
            break;
          default:
            break;
        }
        break;
      // this.set 
      case "fire":
        window.location.reload();
        break;
      
        default:
        break;
    };
    // this.setState({ state: newState });
  }

  handleSortChange = event => {
    this.setState({ sortSelection: event.target.value })
  }

  handleFilterChange = event => {
    this.setState({ filterSelection: event.target.value })
  }

  render() {
    console.log("rendering")
    return (
      <div>
        <Container>
          <Content 
            employees={this.state.employees}
            employeesFiltered={this.state.employeesFiltered}
            sortSelection={this.state.sortSelection}
            filterSelection={this.state.filterSelection}
            handleBtnClick={this.handleBtnClick}
            handleSortChange={this.handleSortChange}
            handleFilterChange={this.handleFilterChange}
          />
        </Container>
      </div>
    );
  }

}

export default Directory;

