import "./App.css";
import EmployeeTable from "./components/EmployeeTable";
import TableHead from "./components/TableHead";
// import Row from "./components/Row";

function App() {
    return (
        <div className="App">
            <h1>Employee Table with add delete button</h1>
            <TableHead />
            <EmployeeTable />
            {/* <Row /> */}
        </div>
    );
}

export default App;
