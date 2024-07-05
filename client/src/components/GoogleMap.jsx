import React from "react";
import GoogleMapReact from 'google-map-react';
import Marker from './Marker.tsx'

//const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function GoogleMap(props) {
    debugger

    const defaultProps = {
        center: {
            lat: 31.80485541764298,
            lng: 35.199845884598986
        },
        zoom: 12
    };

    return (
        // Important! Always set the container height explicitly
        <div style={{ height: '100%', width: '100%' }} className="googleMap">
            <GoogleMapReact
                bootstrapURLKeys={{ key: "AIzaSyDQNMjbq6_y0Cnbi4v1ZjeGJ40oksMvVhY", language: 'he' }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
            >
                <Marker
                    lat={31.8048554176429}
                    lng={35.199845884598986}
                    text="My Marker"
                />
            </GoogleMapReact>
        </div>
    );
}





