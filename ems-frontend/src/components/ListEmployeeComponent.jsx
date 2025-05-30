import React, { useEffect, useState } from 'react'
import { deleteEmployee, listEmployees } from '../Services/EmployeeService'
import { useNavigate } from 'react-router-dom'

const ListEmployeeComponent = () => {

  const [employees, setEmployees] = useState([])
  const navigator = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    getAllEmployees();
  }, [])

  function getAllEmployees() {
    listEmployees().then((response) => {
      setEmployees(response.data);
    }).catch(error => {
      console.error(error);
    });
  }
  function addNewEmployee() {
    navigator('/add-employee')
  }
  function updateEmployee(id) {
    navigator(`/edit-employee/${id}`)
  }
  function removeEmployee(id) {
    console.log(id);

    deleteEmployee(id)
      .then(() => getAllEmployees())
      .catch(error => console.error(error));

  }
  return (
    <div className='container'>
      <h2 className='text-center'>List of Employees</h2>
      <div className="row mb-3">
        
        <div className="d-flex justify-content-center my-3">
          <input
            type="text"
            className="form-control w-50"
            placeholder="Search by ID, First Name, Last Name, or Email"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="col-md-6">
          <button className="btn btn-primary" onClick={addNewEmployee}>Add Employee</button>
        </div>
      </div>

      <table className='table table-striped table-bordered'>
        <thead>
          <tr>
            <th>Employee id</th>
            <th>Employee First Name</th>
            <th>Employee Last Name</th>
            <th>Employee Email id</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            employees
              .filter((emp) => {
                const term = searchTerm.toLowerCase();
                return (
                  emp.id.toString().includes(term) ||
                  emp.firstName.toLowerCase().includes(term) ||
                  emp.lastName.toLowerCase().includes(term) ||
                  emp.email.toLowerCase().includes(term)
                );
              })
              .map((employee) => (
                <tr key={employee.id}>
                  <td>{employee.id}</td>
                  <td style={{ textTransform: 'capitalize' }}>{employee.firstName}</td>
                  <td style={{ textTransform: 'capitalize' }}>{employee.lastName}</td>
                  <td>{employee.email}</td>
                  <td>
                    <button className="btn btn-info" onClick={() => updateEmployee(employee.id)}>Update</button>
                    <button className="btn btn-danger" style={{ marginLeft: '10px' }} onClick={() => removeEmployee(employee.id)}>Delete</button>
                  </td>
                </tr>
              ))
          }

          {
            employees.filter((emp) => {
              const term = searchTerm.toLowerCase();
              return (
                emp.id.toString().includes(term) ||
                emp.firstName.toLowerCase().includes(term) ||
                emp.lastName.toLowerCase().includes(term) ||
                emp.email.toLowerCase().includes(term)
              );
            }).length === 0 && (
              <tr>
                <td colSpan="5" className="text-center">No matching records found.</td>
              </tr>
            )
          }
        </tbody>

      </table>
    </div>
  )
}


export default ListEmployeeComponent