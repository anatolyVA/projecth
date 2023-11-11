import SideBar from '@/components/SideBar'
import React from 'react'
import './style.css'
import MapComponent from '@/components/Map'

function Map() {
  return (
    <>
    <div className='ui'>
      <SideBar/>
    </div>
    <MapComponent/>
    </>
  )
}

export default Map