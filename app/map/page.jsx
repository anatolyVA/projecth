'use client'

import SideBar from '@/components/SideBar'
import React from 'react'
import './style.css'
import { YMaps, Map, Placemark  } from '@pbe/react-yandex-maps';

function MapC() {
  return (
    <>
    <div className='ui'>
      <SideBar/>
    </div>
    <YMaps>
        <Map style={{height: "100vh", width: "100vw"}} defaultState={{ center: [54.784519, 32.044258], zoom: 14 }}>
          <Placemark geometry={[54.780008, 32.043706]}/>
        </Map>
      </YMaps>
    </>
  )
}

export default MapC