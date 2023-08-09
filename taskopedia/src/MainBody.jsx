import React from 'react'
import Students from './Students'
const MainBody = () => {
    const imageUrl = "https://api.lorem.space/image/game?w=150&h=220";
  return (
    <div><Students 
    name="Kris Stevenson"
    logoName="Kris Stevenson"
    imageName={imageUrl}
    experience={5}
    />
    <Students 
    name="Brett Raper"
    logoName="Brett Raper"
    imageName={imageUrl}
    experience={4}
    />
    <Students 
    name="Rebecca Fields"
    logoName="Rebecca Fields"
    imageName={imageUrl}
    experience={7}
    /></div>
  )
}

export default MainBody