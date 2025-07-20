
const map = new maplibregl.Map({
    container: 'map',
    style: `https://api.maptiler.com/maps/streets/style.json?key=${mapToken}`,
    center: listing.geometry.coordinates, // Optional: use same as marker
    zoom: 9
});

// Ensure coordinates is a valid array
console.log("Coordinates:", listing.geometry.coordinates);

const popup=new maplibregl.Popup({offset:25})
   .setHTML(`<div class="popup-body"><h4>${listing.title}</h4><p>Exact Location will be provided after booking.</p></div>`)
// Create and add marker at that location
const marker = new maplibregl.Marker({ color: 'red' })
    .setLngLat(listing.geometry.coordinates) // Not inside an extra array
    .setPopup(popup)
    .addTo(map);

    