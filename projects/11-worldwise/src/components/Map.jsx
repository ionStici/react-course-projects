import { useNavigate } from 'react-router-dom';
import styles from './Map.module.css';
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
  useMapEvents,
} from 'react-leaflet';
import { useEffect, useState } from 'react';
import { useCities } from '../contexts/CitiesContext';
import { useGeolocation } from '../hooks/useGeolocation';
import Button from './Button';
import { useUrlPosition } from '../hooks/useUrlPosition';
import React from 'react';

function Map() {
  const { cities } = useCities();

  const [mapPosition, setMapPosition] = useState([40, 0]);

  const {
    isLoading: isLoadingPosition,
    position: geolocationPosition,
    getPosition,
  } = useGeolocation();

  useEffect(() => {
    if (!geolocationPosition) return;

    const { lat, lng } = geolocationPosition;
    setMapPosition([lat, lng]);
  }, [geolocationPosition]);

  const [mapLat, mapLng] = useUrlPosition();

  useEffect(() => {
    if (mapLat && mapLng) setMapPosition([mapLat, mapLng]);
  }, [mapLat, mapLng]);

  return (
    <div className={styles.mapContainer}>
      {!geolocationPosition && (
        <Button type="position" onClick={getPosition}>
          {isLoadingPosition ? 'Loading...' : 'Use your position'}
        </Button>
      )}

      <MapContainer
        center={mapPosition}
        zoom={6}
        scrollWheelZoom={true}
        className={styles.mapContainer}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />
        {cities.map(city => {
          const { lat, lng } = city.position;

          return (
            <Marker position={[lat, lng]} key={city.id}>
              <Popup>
                <span>{city.emoji}</span> <span>{city.cityName}</span>
              </Popup>
            </Marker>
          );
        })}
        <ChangeCenter position={mapPosition} />
        <DeteckClick />
      </MapContainer>
    </div>
  );
}

function ChangeCenter({ position }) {
  const map = useMap();
  map.setView(position);
  return null;
}

function DeteckClick() {
  const navigate = useNavigate();

  useMapEvents({
    click: e => {
      navigate(`form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`);
    },
  });
}

export default Map;
