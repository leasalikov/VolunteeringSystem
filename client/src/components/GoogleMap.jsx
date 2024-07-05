// import React from "react";
// import GoogleMapReact from 'google-map-react';
// import Marker from './Marker.tsx'

// //const AnyReactComponent = ({ text }) => <div>{text}</div>;
// const AnyReactComponent = ({ text }) => <div>{text}</div>;

// export default function GoogleMap(props) {
//     return (
//         <script async
//             src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDQNMjbq6_y0Cnbi4v1ZjeGJ40oksMvVhY&loading=async&callback=initMap">
//         </script>)

//     //     debugger

//     //     const defaultProps = {
//     //         center: {
//     //             lat: 31.80485541764298,
//     //             lng: 35.199845884598986
//     //         },
//     //         zoom: 12
//     //     };

//     //     return (
//     //         // Important! Always set the container height explicitly
//     //         <div style={{ height: '100%', width: '100%' }} className="googleMap">
//     //             <GoogleMapReact
//     //                 bootstrapURLKeys={{ key: "AIzaSyDQNMjbq6_y0Cnbi4v1ZjeGJ40oksMvVhY", language: 'he' }}
//     //                 defaultCenter={defaultProps.center}
//     //                 defaultZoom={defaultProps.zoom}
//     //             >
//     //                 <AnyReactComponent
//     //                     lat={59.955413}
//     //                     lng={30.337844}
//     //                     text="My Marker"
//     //                 />
//     //             </GoogleMapReact>
//     //         </div>
//     //     );
// }





// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { APIProvider, Map, Marker } from '@vis.gl/react-google-maps';

// export default function GoogleMap() {
//     const [coordinates, setCoordinates] = useState({ lat: 31.80485541764298, lng: 35.199845884598986 });
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         const address = 'Grossbeeren, Germany';
//         const apiKey = 'AIzaSyDQNMjbq6_y0Cnbi4v1ZjeGJ40oksMvVhY';
        
//         axios.get(`https://maps.googleapis.com/maps/api/geocode/json/Grossbeeren/AIzaSyDQNMjbq6_y0Cnbi4v1ZjeGJ40oksMvVhY`, {
//             params: {
//                 address: address,
//                 key: apiKey
//             }
//         })
//         .then(response => {
//             debugger
//             if (response.data.status === 'OK' && response.data.results.length > 0) {
//                 const location = response.data.results[0].geometry.location;
//                 setCoordinates(location);
//             } else {
//                 setError('No results found for the given address.');
//                 console.error('No results found for the given address.');
//             }
//         })
//         .catch(error => {
//             setError('Error fetching the coordinates.');
//             console.error('Error fetching the coordinates: ', error);
//         });
//     }, []);

//     return (
//         <>
//             <APIProvider apiKey="AIzaSyDQNMjbq6_y0Cnbi4v1ZjeGJ40oksMvVhY">
//                 <Map
//                     style={{ width: '100vw', height: '100vh' }}
//                     defaultCenter={coordinates}
//                     defaultZoom={12}
//                     gestureHandling={'greedy'}
//                     disableDefaultUI={true}
//                 >
//                     <Marker
//                         position={coordinates}
//                         icon={{
//                             url: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png',
//                             scaledSize: { width: 40, height: 40 } // שנה לפי הצורך
//                         }}
//                     />
//                 </Map>
//                 {error && <div style={{ color: 'red' }}>{error}</div>}
//             </APIProvider>
//         </>
//     )
// };





import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import axios from 'axios';
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
