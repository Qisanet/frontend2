import React from 'react'
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { Link } from 'react-router-dom';
const BackTable = ({destination='/home'}) => {
  return (
    <div className='flex'>
      <Link to={destination} className='btn btn-primary bg-sky-800 text-white px4 py-1 rounded-lg w-fit'><FaArrowAltCircleLeft/></Link>
    </div>
  )
}

export default BackTable