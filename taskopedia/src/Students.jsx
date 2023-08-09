import React from 'react'

const Students = () => {
    const maleName="Kris Stevenson";
    const femaleName = "Rebecca Fields";
  return (
    
    <div className="container p-4">
      <div className='row'>Students Enrolled</div>
      <div className='row border'>
        <div className='col-2'><img alt="logo for Kris Stevenson" className='rounded-circle m-2' src="https://ui-avatars.com/api/?name=Kris+Stevenson"></img></div>
        <div className='col-10'>
          {maleName}
          <br/>
          programming experience {4} years
        </div>
        <div className='col-2'>
          <img 
          className='rounded-circle m-2' 
          src={`https://ui-avatars.com/api/?name=${femaleName}`} alt="logo for rebecca fields">
            </img>
          </div>
        <div className='col-10'>
          {femaleName}
          <br/>
          programming experience {5} years
        </div>
        <div className='col-2'><img alt="logo for Brett Raper "className='rounded-circle m-2' src="https://ui-avatars.com/api/?name=Brett+Raper"></img></div>
        <div className='col-10'>
          {"Brett Raper"}
          <br/>
          programming experience {3} years
        </div>
      </div>
      </div>
      
    
  )
}

export default Students