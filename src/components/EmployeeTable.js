import React, { Component } from "react";

export default class EmployeeTable extends Component {
    //   constructor(props) {
    //     super(props);
    //     this.state = { count: 0, on: this.props.on };
    // }
    constructor(props) {
        super(props);
        this.state = {
            employeeList: [
                { fname: "John", lname: "Smith", salary: "$75K", ID: 1001 },
                { fname: "James", lname: "Web", salary: "$120K", ID: 1002 },
                { fname: "Kennedy", lname: "Stokes", salary: "$150K", ID: 1003 },
                { fname: "Brooklyn", lname: "Klein", salary: "$90K", ID: 1004 },
            ],
        };
    }

    onDeleteClick = (index) => {
        this.state.employeeList.splice(index, 1);
        this.setState({ employeeList: this.state.employeeList });
    };

    onAddClick = (index) => {
        // alert("ok");
        // const fn = prompt("F-name");
        // const ln = prompt("L-name");
        // const sl = prompt("Salary", "$");
        // const id = prompt("ID");
        // const newData = { fname: { fn }, lname: { ln }, salary: { sl }, ID: { id } };
        // this.state.employeeList.push(this.state.newData);

        this.state.employeeList.push(this.state.employeeList[index]);
        this.setState({ employeeList: this.state.employeeList });
    };

    render() {
        const items = this.state.employeeList.map((item, index) => {
            return (
                <div key={index}>
                    <div className="item">{item.fname} </div>
                    <div className="item">{item.lname} </div>
                    <div className="item">{item.salary} </div>
                    <div className="item">{item.ID} </div>
                    <div className="item">
                        <button onClick={() => this.onDeleteClick(index)}>Delete</button>
                        <button onClick={() => this.onAddClick(index)}>Add</button>
                    </div>
                    {/* <div className="item">{onAddClick}</div> */}
                </div>
            );
        });

        return <div>{items}</div>;
    }
}
