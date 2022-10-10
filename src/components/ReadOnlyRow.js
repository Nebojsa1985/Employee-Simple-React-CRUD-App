import React from 'react'

const ReadOnlyRow = ({ emp, index, handleUpdate, handleDelete }) => {
    return (   
    <div id={index} data-id={emp._id} className='readEmpCard'>
        <p><span>Name: </span>{emp.name}</p>
        <p><span>Date of bith:</span>{emp.dateOfBirth}</p>
        <p><span>City: </span>{emp.homeAddress.city}</p>
        <p><span>Zip Code: </span>{emp.homeAddress.ZIPCode}</p>
        <p><span>Address 1: </span>{emp.homeAddress.addressLine1}</p>
        <p><span>Address 2: </span>{emp.homeAddress.addressLine2}</p>
        <p><span>Phone: </span>{emp.phoneNumber}</p>
        <p><span>Email: </span>{emp.email}</p>
        <p><span>Employment start: </span>{emp.dateOfEmployment}</p>
        <p>
            <button onClick={handleUpdate}>Update</button>
            <button onClick={handleDelete}>Delete</button>
        </p>
    </div>
    ) 
}

export default ReadOnlyRow