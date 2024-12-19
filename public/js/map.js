
// mapboxgl.accessToken = mapToken;

//   const map = new mapboxgl.Map({
//       container: 'map', // container ID
//       style: "mapbox://styles/mapbox/streets-v12",
//       center:  [72.8777, 19.0760], // starting position [lng, lat]. Note that lat must be set between -90 and 90
//       zoom: 9 // starting zoom
//   });


//   console.log(coordinates);

//   const marker = new mapboxgl.Marker()
//   .setLngLat(coordinates)
//   .addTo(map);

mapboxgl.accessToken = mapToken;

const map = new mapboxgl.Map({
  container: "map", // container ID
  style: "mapbox://styles/mapbox/streets-v12", // Map style
  center: listing.geometry.coordinates, // Starting position [lng, lat] - Mumbai coordinates
  zoom: 9, // Starting zoom
});



// Log coordinates for debugging


// Create and add marker to map
const marker = new mapboxgl.Marker({color: "red"})
  .setLngLat(listing.geometry.coordinates) // Correctly set coordinates
  .setPopup(
    new mapboxgl.Popup({ offset: 25 }).setHTML(
        `<b><h4>${listing.title}</h4></b><p>Exact location provided after booking.</p>`
    )
)
  .addTo(map); // Add marker to the map

