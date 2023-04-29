import React from "react";
import MapView, {Marker} from "react-native-maps/lib/MapView";
import { useSelector } from "react-redux";
import { selectOrigin } from "../slices/navSlice";


const Map = () => {
    const origin = useSelector(selectOrigin);

    <MapView
    style = {tw`flex-1`}
    mapType = "mutedStandard"
    initialRegion={{
        latitude: origin.location.latitude,
        longitude: origin.location.lng,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
    }}
    >
        {origin?.location && (
            <Marker
            coordinate = {{
                latitude: origin.location.lat,
                longitude: origin.location.lng
            }}
            title = "Origin"
            description = {origin.description}
            identifier = "origin"
            />
        )}
    
    </MapView>
}

export default Map