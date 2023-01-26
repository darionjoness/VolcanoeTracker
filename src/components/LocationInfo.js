import React from 'react'

const LocationInfo = ({ info }) => {
  return (
    <div className='locationInfo'>
        <h3>id: {info.id}</h3>
        <h3>Title: {info.title}</h3>
        <a target='_blank' href={info.url}>Read More</a>
    </div>
  )
}

export default LocationInfo