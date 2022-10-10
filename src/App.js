import React, { useState, useEffect, Fragment } from "react";

import ReadOnlyRow from "./components/ReadOnlyRow";
import EditableRow from "./components/EditableRow";
import AddRow from "./components/AddRow";
import DelTableRow from "./components/DelTableRow";

const App = () => {

const [emps, setEmps] =  useState([])
//const apiURL = 'http://142.132.229.249:3000/employees'

const [editContactId, setEditContactId] = useState(null)

const [newEmp, setNewEmp] = useState(null)
let newemps = []

const [delEmps, setDelEmps] =  useState([])

//fetch
//useEffect(() => {
//fetch(apiURL)
//    .then(res => res.json())
//    .then(data => {
//        setEmps(data.employees)
//})}, [])

//document querry selector value function
function dqsVal(val) {
    return document.querySelector(val).value
}
//dugme Update
const handleUpdate = (e) => {
    const idThis = e.target.parentElement.parentElement.id   
    setEditContactId(idThis)
}
//dugme Delete
const handleDelete = (e) => {
    if(window.confirm("Do you realy want to delete this employee")) {
        const allEmps = [...emps]
        const idThis = e.target.parentElement.parentElement.id
        const allDelEmps = [...delEmps]
        allDelEmps.push(allEmps[idThis])
        setDelEmps(allDelEmps)
        allEmps.splice(idThis,1)
        setEmps(allEmps)
    } else {
        alert("Canceled")
    }
}
//dugme Cancel
const handleCancel = () => {
    setEditContactId(null)
}
//dugme Save
const handleSave = (e) => {
    setEditContactId(null)
    const idThis = e.target.parentElement.parentElement.id
    emps[idThis].name = dqsVal('#editRowName')
    emps[idThis].dateOfBirth = dqsVal('#editRowBirthDate')
    emps[idThis].homeAddress.city = dqsVal('#editRowCity')
    emps[idThis].homeAddress.ZIPCode = dqsVal('#editRowZip')
    emps[idThis].homeAddress.addressLine1 = dqsVal('#editRowAddr1')
    emps[idThis].homeAddress.addressLine2 = dqsVal('#editRowAddr2')
    emps[idThis].phoneNumber = dqsVal('#editRowPhone')
    emps[idThis].email = dqsVal('#editRowEmail')
    emps[idThis].dateOfEmployment = dqsVal('#editRowEmploymentDate')
}
//Toggle menu
const showAddForm = () => {
    document.querySelector('#addForm').style.display = 'flex'
    document.querySelector('#empTable').style.opacity = 0.04
    document.querySelector('#empTable').style.pointerEvents= "none"
    document.querySelector('.showDelEmps').style.pointerEvents= "none"
}
const removeAddForm = () => {
    document.querySelector('#addForm').style.display = 'none'
    document.querySelector('#empTable').style.opacity = 1
    document.querySelector('#empTable').style.pointerEvents= "auto"
    document.querySelector('.showDelEmps').style.pointerEvents= "auto"
}
const showDelEmps = () => {
    document.querySelector('#addForm').style.display = 'none'
    document.querySelector('#empTable').style.display = 'none'
    document.querySelector('#empDelTable').style.display = 'grid'
    document.querySelector('.AddMenu').style.display = 'none'
    document.querySelector('.showDelEmps').style.display = 'none'    
    document.querySelector('.showEmps').style.display = 'block'
}
const showEmps = () => {
    document.querySelector('#addForm').style.display = 'none'
    document.querySelector('#empTable').style.display = 'grid'
    document.querySelector('#empDelTable').style.display = 'none'
    document.querySelector('.AddMenu').style.display = 'block'
    document.querySelector('.showDelEmps').style.display = 'block'  
    document.querySelector('.showEmps').style.display = 'none'    
}
//Add employee
const addEmployee = () => {
    const uniqueID = Math.floor(Date.now() * Math.random())

    setNewEmp({
        dateOfBirth: dqsVal('#newEmpBirth'),
        dateOfEmployment: dqsVal('#newEmpEmDate'),
        deletedAt: null,
        email:  dqsVal('#newEmpEmail'),
        homeAddress: {
            addressLine2: dqsVal('#newEmpAdr2'), 
            addressLine1: dqsVal('#newEmpAdr1'), 
            ZIPCode: dqsVal('#newEmpZip'), 
            city: dqsVal('#newEmpCity'),
            _id: uniqueID},
        isDeleted: false,
        name: dqsVal('#newEmpName'),
        phoneNumber: dqsVal('#newEmpPhone'),
        __v: 0,
        _id: uniqueID
    })   
    removeAddForm() 
}

useEffect(() => {
    newemps = [...emps]
    newemps.push(newEmp)    
    if(newEmp !== null){ 
        setEmps(newemps)
    } 
}, [newEmp])

    return (
        <Fragment>
          <div style={{position: "relative"}}> 
          <button className="AddMenu" onClick={showAddForm}>Add employee</button>
          <button className="showDelEmps" onClick={showDelEmps}>Del employees</button>          
          <button className="showEmps" onClick={showEmps} style={{display: "none"}}>Back to employees</button>
          <div className="tabela" style={{position: "relative"}}>
            <AddRow removeAddForm={removeAddForm} addEmployee={addEmployee}/>                    
            <div id="empDelTable" className="empDelTable">               
                    {
                    delEmps.map((dEmp, index) => <DelTableRow dEmp={dEmp} key={index} />
                    )}                
            </div>                   
        </div>                         
        </div> 
        <div>
            <div id="empTable" className="empTable">
                    {emps.map((emp, index)=>(                  
                         index == editContactId ? 
                        (<EditableRow emp={emp} index={index} handleCancel={handleCancel} handleSave={handleSave} key={index}/>) :
                        (<ReadOnlyRow emp={emp} index={index} handleUpdate={handleUpdate} handleDelete={handleDelete} key={index}/>)
                    ))}
            </div>
        </div>
        </Fragment>
    )
}

export default App