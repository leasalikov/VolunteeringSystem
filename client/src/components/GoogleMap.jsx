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





// import React, { useState, useEffect } from 'react';
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';
// import axios from 'axios';
// import L from 'leaflet';

// // פתרון לבעיית האייקונים החסרים של Leaflet
// delete L.Icon.Default.prototype._getIconUrl;

// L.Icon.Default.mergeOptions({
//     iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
//     iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
//     shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
// });

// export default function GoogleMap() {
//     const [coordinates, setCoordinates] = useState({ lat: 31.80485541764298, lng: 35.199845884598986 });
//     const [error, setError] = useState(null);
//     useEffect(() => {
//         const address = 'עלי הכהן';


//         axios.get('https://nominatim.openstreetmap.org/search', {
//             params: {
//                 q: address,
//                 format: 'json',
//                 addressdetails: 1,
//                 limit: 1
//             }
//         })
//         .then(response => {
//             if (response.data.length > 0) {
//                 const location = response.data[0];
//                 setCoordinates({
//                     lat: parseFloat(location.lat),
//                     lng: parseFloat(location.lon)
//                 });
//                 setError(null); // Reset error state if successful
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
//             <MapContainer 
//                 center={[coordinates.lat, coordinates.lng]} 
//                 zoom={13} 
//                 style={{ width: '100vw', height: '100vh' }}
//             >
//                 <TileLayer
//                     url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//                     attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//                 />
//                 <Marker position={[coordinates.lat, coordinates.lng]}>
//                     {/* <Popup>
//                         King George Street, Jerusalem
//                     </Popup> */}
//                 </Marker>
//             </MapContainer>
//             {error && <div style={{ color: 'red', position: 'absolute', top: 0, left: 0, right: 0, backgroundColor: 'white', padding: '10px', textAlign: 'center' }}>{error}</div>}
//         </>
//     );
// };


import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import axios from 'axios';
import L from 'leaflet';
import './modal.css' // Import CSS file for modal styling
import Volunteer from './Volunteer';
import { PostEmail } from '../EmailFunction';
// import { v4 as uuidv4 } from 'uuid';
// import {  uuid } from 'uuid';

// פתרון לבעיית האייקונים החסרים של Leaflet
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

export default function GoogleMap(props) {
    const [markers, setMarkers] = useState([]);
    const [error, setError] = useState(null);
    const [selectionMessage, setSelectionMessage] = useState('');

                 
    useEffect(() => {
        const fetchCoordinates = async () => {
            // console.log(props.addresses[1].address)
            const markerPromises = props.addresses.flat().map(async (address) => {
                const response = await axios.get('https://nominatim.openstreetmap.org/search', {
                    params: {
                        q: address.address,
                        format: 'json',
                        addressdetails: 1,
                        limit: 1
                    }
                });
                if (response.data.length > 0) {
                    const location = response.data[0];
                    return {
                        username: address.username,
                        address: address.address,
                        lat: parseFloat(location.lat),
                        lng: parseFloat(location.lon),
                        phone: address.phone,
                        email: address.email,
                        namecategory:address.namecategory
                    };
                } else {
                    console.error(`No results found for the address: ${address.address}`);
                    return null;
                }
            });

            const resolvedMarkers = await Promise.all(markerPromises);
            setMarkers(resolvedMarkers.filter(marker => marker !== null));
            // markers = markers.map(marker => ({ ...marker, id:uuid.uuidv4() }));
        };

        fetchCoordinates().catch(error => {
            setError('Error fetching the coordinates.');
            console.error('Error fetching the coordinates: ', error);
        });
    }, [props.addresses]);

    async function handleSelect(marker){
        setSelectionMessage(`הבחירה נקלטה בהצלחה עבור הכתובת: ${marker.address}`);
          

        const responseEmail = await PostEmail(marker.username, marker.email, marker.address);
        const emailData = await responseEmail;
        console.log("emailData ", emailData);
        <Volunteer linking={props.linking(marker)}/>
    };

    const closeModal = () => {
        setSelectionMessage('');
    };

    return (
        <>
            <MapContainer
                center={[31.80485541764298, 35.199845884598986]}
                zoom={13}
                style={{ width: '100vw', height: '100vh' }}
            >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                {markers.map((marker, index) => (
                    <Marker key={index} position={[marker.lat, marker.lng]}>
                        <Popup>
                            <div>
                                <strong>{marker.username}</strong><br />
                                Address: {marker.address} <br />
                                Phone: {marker.phone}<br />
                                Email: {marker.email}<br />
                                namecategory:{marker.namecategory}<br />
                                <button onClick={() => handleSelect(marker)}>Select</button>
                            </div>
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
            {error && <div style={styles.error}>{error}</div>}
            {selectionMessage && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={closeModal}>&times;</span>
                        <p>{selectionMessage}</p>
                    </div>
                </div>
            )}
        </>
    );
};

const styles = {
    error: {
        color: 'red',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: 'white',
        padding: '10px',
        textAlign: 'center',
        zIndex: 1000
    }
};

