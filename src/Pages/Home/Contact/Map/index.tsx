import { MapContainer, TileLayer } from "react-leaflet";
export default function Map() {
  const maps = {
    base: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
  };
  return (
    <MapContainer
      className="markercluster-map"
      center={[51.0, 19.0]}
      scrollWheelZoom={true}
      zoom={6}
      maxZoom={13}
      minZoom={5}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url={maps.base}
      />
    </MapContainer>
  );
}
