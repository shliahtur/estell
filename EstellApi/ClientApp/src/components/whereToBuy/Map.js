import React from 'react';
import L from 'leaflet';
import "leaflet/dist/leaflet.css";
import "../../styles/WhereToBuy.css"


export default  class Map extends React.Component {

    componentDidMount(){
        this.map = L.map('map', {
            center: [58, 16],
            zoom: 6,
            zoomControl: false
        });

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            detectRetina : true,
            maxZoom: 20,
            maxNativeZoom: 17,
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(this.map);
    }

    render(){
       return <div id="map"></div>
    }
}