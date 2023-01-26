import React from 'react'
import VolcanoeMarker from './VolcanoeMarker';
import GoogleMapReact from 'google-map-react';
import { useState } from 'react';
import LocationInfo from './LocationInfo';


const Map = ({ eventData, center, zoom }) => {
    const [locationInfo, setLocationInfo] = useState(null)

    // Loop through the eventData
    const marker = eventData.map(event => {
        // Check if volcanoes
        if(event.categories[0].id === 'volcanoes'){
            // Return a volcaneMarke component
            return <VolcanoeMarker 
            lat={event.geometry[0].coordinates[1]} 
            lng={event.geometry[0].coordinates[0]} 
            onClick={() => setLocationInfo({id: event.id, title: event.title, url: event.sources[0].url})} /> 
        }
    })


  return (
    <div className='map'>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_API_KEY }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        {marker}
      </GoogleMapReact>
      {locationInfo && <LocationInfo info={locationInfo} />}
    </div>
  )
}

Map.defaultProps = {
    center: {
        lat: 12.3265,
        lng: -92.8756
    },
    zoom: 4
}


export default Map