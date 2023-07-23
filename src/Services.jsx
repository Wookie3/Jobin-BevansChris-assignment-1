import './Services.css'
import { useState } from 'react'

const Services = () => {
  const [contentState, setContentState] = useState("stonework");
  console.log(contentState)
  
  return (
    
    <>
      <div className="services-tabs">
        <button className={`tab-${contentState == "stonework" ? 'active':'inactive'}`} 
          onClick={() => setContentState("stonework")}>
          Stonework
        </button>
        <button className={`tab-${contentState == "planting" ? 'active':'inactive'}`} 
          onClick={() => setContentState("planting")}>
          Planting
        </button>
        <button className={`tab-${contentState == "lighting" ? 'active':'inactive'}`} 
          onClick={() => setContentState("lighting")}>
          Lighting
        </button>
        <button className={`tab-${contentState == "snow" ? 'active':'inactive'}`} 
          onClick={() => setContentState("snow")}>
          Snow & Ice
        </button>
      </div>
      <div className="service-content">
      {contentState == "snow" && <SnowRemoval />}
      {contentState == "planting" && <Planting />}
      {contentState == "stonework" && <Stonework />}
      {contentState == "lighting" && <Lighting />}
      
      </div>
    </>
  )
}
const SnowRemoval = () => {
  return (
    <div className="service-div">
      <p>
        Contact us today about our seasonal snow removal services. We offer a range of snow removal services for all sizes of properties.
      </p>
    </div>
  )
}

const Planting = (isVisable) => {
  return (
    <div className="service-div">
      We offer a wide range of planting options including...
    </div>
  )
}

const Stonework = (isVisable) => {
  return (
    <div className="service-div">
      We offer a wide range of stonework options...
    </div>
  )
}
const Lighting = () => {
  return (
    <div className="service-div">
      We offer a wide range of lighting options...
    </div>
  )
}
export default Services;