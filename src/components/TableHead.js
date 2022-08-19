import React from "react";
function TableHead() {
    return (
        <div>
            <h2>Employee Table</h2>
            <div className="item bold">First Name</div>
            <div className="item bold">Last Name</div>
            <div className="item bold">Salary</div>
            <div className="item bold">ID</div>
            <div className="item bold">Action</div>
        </div>
    );
}
export default TableHead;
