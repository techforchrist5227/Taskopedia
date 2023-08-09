import React from 'react'
import {faker} from "@faker-js/faker"
const Students = ({name,logoName, imageName, experience}) => {
    let studentName = faker.person.fullName();
    
     
  return (
    
    <div className="container p-4">
      <div className='row'>Students Enrolled</div>
      <div className='row border'>
        <div className='col-2'><img alt="logo for {logoName}" className='rounded-circle m-2 w-50' src={imageName}></img></div>
        <div className='col-10'>
          {studentName}
          <br/>
          programming experience {experience} years
        </div>
      </div>
      </div>
      
    
  )
}

export default Students