import React, { useState, useEffect } from 'react';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
// import axios from 'axios';
import L from 'leaflet';

// פתרון לבעיית האייקונים החסרים של Leaflet
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

export default function GoogleMap() {
    const [coordinates, setCoordinates] = useState({ lat: 31.80485541764298, lng: 35.199845884598986 });
    const [error, setError] = useState(null);

    useEffect(() => {
        const address = 'עלי הכהן';

        
        axios.get('https://nominatim.openstreetmap.org/search', {
            params: {
                q: address,
                format: 'json',
                addressdetails: 1,
                limit: 1
            }
        })
        .then(response => {
            if (response.data.length > 0) {
                const location = response.data[0];
                setCoordinates({
                    lat: parseFloat(location.lat),
                    lng: parseFloat(location.lon)
                });
                setError(null); // Reset error state if successful
            } else {
                setError('No results found for the given address.');
                console.error('No results found for the given address.');
            }
        })
        .catch(error => {
            setError('Error fetching the coordinates.');
            console.error('Error fetching the coordinates: ', error);
        });
    }, []);

    return (
        <>
            <MapContainer 
                center={[coordinates.lat, coordinates.lng]} 
                zoom={13} 
                style={{ width: '100vw', height: '100vh' }}
            >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={[coordinates.lat, coordinates.lng]}>
                    {/* <Popup>
                        King George Street, Jerusalem
                    </Popup> */}
                </Marker>
            </MapContainer>
            {error && <div style={{ color: 'red', position: 'absolute', top: 0, left: 0, right: 0, backgroundColor: 'white', padding: '10px', textAlign: 'center' }}>{error}</div>}
        </>
    );
};