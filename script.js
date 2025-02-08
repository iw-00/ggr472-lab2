// Add default public map token from Mapbox
mapboxgl.accessToken = "pk.eyJ1IjoiaXcwMCIsImEiOiJjbTV2aXFlajYwMjZmMmtvbWtrMGRhd3lkIn0.DbEVxhgWv4ANYwpIpCc4iA"

// Create map object
const tickMap = new mapboxgl.Map({
    container: "tick-map", // Map container ID
    style: "mapbox://styles/iw00/cm6wke90700h201s17joz8hyy", // Style URL from Mapbox
    center: [-79.369, 43.685], // Map starting position in Toronto
    zoom: 11 // Map starting zoom level
});

map.on("load", () => {

    // Add buildings as points
    map.addSource("toronto-ticks", {
        type: "geojson",
        data: "https://raw.githubusercontent.com/iw-00/ggr472-lab2/refs/heads/main/data/toronto-ticks.geojson"
    });
    
    map.addLayer({
        id: "ticks-pt",
        type: "circle",
        source: "toronto-ticks",
        paint: {
            "circle-radius": 4,
            "circle-color": "#1ff258"
        }
    });

})