import React from 'react'

const DelTableRow = ({ dEmp, index}) => {
    return (   
    <div id={index} className='deletedEmpCard'>
        <p><span>Name: </span>{dEmp.name}</p>
        <p><span>Date of bith:</span>{dEmp.dateOfBirth}</p>
        <p><span>City: </span>{dEmp.homeAddress.city}</p>
        <p><span>Zip Code: </span>{dEmp.homeAddress.ZIPCode}</p>
        <p><span>Address 1: </span>{dEmp.homeAddress.addressLine1}</p>
        <p><span>Address 2: </span>{dEmp.homeAddress.addressLine2}</p>
        <p><span>Phone: </span>{dEmp.phoneNumber}</p>
        <p><span>Email: </span>{dEmp.email}</p>
        <p><span>Employment start: </span>{dEmp.dateOfEmployment}</p>
    </div>
    ) 
}

export default DelTableRow