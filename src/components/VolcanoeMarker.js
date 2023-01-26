import React from 'react'
import { FaMapMarkerAlt } from "react-icons/fa";
import { useState } from 'react';

const VolcanoeMarker = ({ lat, lng, onClick }) => {
    
  return (
    <div className='volcanoeMarker' onClick={onClick}>
        <FaMapMarkerAlt className='marker'/>
    </div>
  )
}

export default VolcanoeMarker