import { GoogleMap, LoadScript } from "@react-google-maps/api";

const containerMapStyle = {
    width: "100%",
    height: "400px",
};
const center = {
    lat: -3.745,
    lng: -38.523,
};

const MyMap = () => {
    return (
        <LoadScript googleMapsApiKey='AIzaSyD6RfeUCB_JDlDgrIy2GS8mznGYjEpGAVg'>
            <GoogleMap
                mapContainerStyle={containerMapStyle}
                center={center}
                zoom={10}
            ></GoogleMap>
        </LoadScript>
    );
};

export default MyMap;
