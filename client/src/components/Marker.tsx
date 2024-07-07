import React from "react";
import './Marker.css'
import { FaMapMarkerAlt } from "react-icons/fa";


const Marker = (props: any) => {
    // const y = props.idStation;
    // const { color, name, id } = props;
    return (
        <><FaMapMarkerAlt style={{ color: "red", fontSize: 30 }}><button className="buttonMarker" > <div>Marker</div><FaMapMarkerAlt style={{ color: "red", fontSize: 30 }} /></button></FaMapMarkerAlt>
            <div>Marker</div>
        </>

    );
}
export default Marker;