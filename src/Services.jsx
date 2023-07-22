import './Services.css'
import { useState } from 'react'

// const [isVisable, setVisable] = useState(false);
const Services = () => {

  return (
    <div>
      <div className="services">
        <ServicesTab text="Stonework" />
        <ServicesTab text="Planting" />
        <ServicesTab text="Lighting" />
        <ServicesTab text="Snow & Ice" />
      </div>
      <ServiceContent />
    </div>
  )
}

const ServicesTab = ({ text }) => {
  const [isActive, setActive] = useState(false);
  let tabName = "inactive-tab"
  if (isActive) {
    tabName = "active-tab"
  }

  function handelClick() {
    setActive(!isActive);
  }
  return (
    <>
      <button className={tabName} onClick={() => handelClick()}>
        {text}
      </button>
      <div className="service-content">
      </div>
    </>
  )
}





const ServiceContent = (stateName) => {
  const [iceSnow, setIceSnow] = useState(true);
  const [planting, setPlanting] = useState(false);
  const [stonework, setStonework] = useState(false);
  const [lighting, setLighting] = useState(false);

  return (
    <div className="service-content">
      {iceSnow && <SnowRemoval />}
      {planting && <Planting />}
      {stonework && <Stonework />}
    </div>
  )
}

const SnowRemoval = () => {
  // let divName = "clear"
  // if (isVisable) {
  //   divName = "service-div"
  // }
  return (
    <div className="service-div">
      <p className="text-block">
        Contact us today about our seasonal snow removal services. We offer a range of snow removal services for all sizes of properties.
      </p>
    </div>
  )
}

const Planting = (isVisable) => {
  return (
    <div className="service-div">
      We offer a wide range of planting options including...</div>
  )
}

const Stonework = (isVisable) => {
  return (
    <div className="service-div">
      We offer a wide range of stonework options...</div>
  )
}
const Lighting = () => {
  return (
    <div className="service-div">
      We offer a wide range of lighting options...</div>
  )
}
export default Services;