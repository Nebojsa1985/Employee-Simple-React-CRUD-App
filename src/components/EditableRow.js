import React from 'react'

const EditableRow = ({ emp, index, handleCancel, handleSave }) => {
    return (   
        <div id={index} data-id={emp._id} className='editEmpCard'>
        <p><span>Name: </span><input className='editInputs' id="editRowName" type="text" defaultValue={emp.name} placeholder="Enter name..."></input></p>
        <p><span>Birth date: </span><input className='editInputs' id="editRowBirthDate" type="date" defaultValue={emp.dateOfBirth} placeholder="Enter birth date..."></input></p>
        <p><span>City: </span><input className='editInputs' id="editRowCity" type="text" defaultValue={emp.homeAddress.city} placeholder="Enter city..."></input></p>
        <p><span>Zip: </span><input className='editInputs' id="editRowZip" type="text" defaultValue={emp.homeAddress.ZIPCode} placeholder="Enter zip code..."></input></p>
        <p><span>Address 1: </span><input className='editInputs' id="editRowAddr1" type="text" defaultValue={emp.homeAddress.addressLine1} placeholder="Enter address 1..."></input></p>
        <p><span>Address 2: </span><input className='editInputs' id="editRowAddr2" type="text" defaultValue={emp.homeAddress.addressLine2} placeholder="Enter address 2..."></input></p>
        <p><span>Phone: </span><input className='editInputs' id="editRowPhone" type="text" defaultValue={emp.phoneNumber} placeholder="Enter phone..."></input></p>
        <p><span>Email: </span><input className='editInputs' id="editRowEmail" type="text" defaultValue={emp.email} placeholder="Enter email..."></input></p>
        <p><span>Employment start: </span><input className='editInputs' id="editRowEmploymentDate" type="date" defaultValue={emp.dateOfEmployment} placeholder="Enter employment date..."></input></p>
        <p>
            <button onClick={handleSave}>Save</button>
            <button onClick={handleCancel}>Cancel</button>
        </p>
    </div>
    ) 
}

export default EditableRow