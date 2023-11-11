'use client'
import React, { useRef, useEffect, useState } from 'react';
import * as maptilersdk from '@maptiler/sdk';
import "@maptiler/sdk/dist/maptiler-sdk.css";
import './style.css'

function MapComponent() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const smolensk = { lng: 32.05031937760626, lat: 54.79065956512508 };
  const [zoom] = useState(14);
  maptilersdk.config.apiKey = 'mc7ntdOPnMnZdvjx8bmQ';

  useEffect(() => {
    if (map.current) return; // stops map from intializing more than once

    map.current = new maptilersdk.Map({
      container: mapContainer.current,
      style: maptilersdk.MapStyle.STREETS,
      center: [smolensk.lng, smolensk.lat],
      language: maptilersdk.Language.RUSSIAN,
      zoom: zoom
    });

    new maptilersdk.Marker({color: "#FF0000"})
      .setLngLat([32.04371212914777, 54.78000672428326])
      .addTo(map.current);
  }, [smolensk.lng, smolensk.lat, zoom]);
    return (
      <div className="map-wrap">
        <div ref={mapContainer} className="map" />
      </div>
    )
}

export default MapComponent