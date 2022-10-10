import React from 'react'

const AddRow = ({removeAddForm, addEmployee}) => {
    return (   
        <div id="addForm" className="addForm" style={{position: "absolute"}}>
        <span className="closeAddMenu" onClick={removeAddForm}>&#10007;</span>
        <input type="text" id="newEmpName" className="addInputs" placeholder="Enter name..."></input>
        <input type="text" id="newEmpBirth" className="addInputs" placeholder="Enter birth date..." onFocus={(e) => (e.target.type = "date")} onBlur={(e) => (e.target.type = "text")}></input>
        <input type="text" id="newEmpCity" className="addInputs" placeholder="Enter city..."></input>  
        <input type="text" id="newEmpZip" className="addInputs" placeholder="Enter zip code..."></input>
        <input type="text" id="newEmpAdr1" className="addInputs" placeholder="Enter address 1..."></input>
        <input type="text" id="newEmpAdr2"className="addInputs" placeholder="Enter address 2..."></input>  
        <input type="text" id="newEmpPhone"className="addInputs" placeholder="Enter phone..."></input>
        <input type="email" id="newEmpEmail"className="addInputs" placeholder="Enter email..."></input>
        <input type="text" id="newEmpEmDate"className="addInputs" placeholder="Enter employment date..." onFocus={(e) => (e.target.type = "date")} onBlur={(e) => (e.target.type = "text")}></input>  
        <button className="addButton" onClick={addEmployee}>Add</button>     
    </div>
    ) 
}

export default AddRow