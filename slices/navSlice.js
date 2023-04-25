import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    origin: null,
    destination: null,
    travelTimeInformation: null,
}

export const navSlice = createSlice({
    name: 'nav',
    initialState,
    reducer: {
        setOrigin: (state, action) =>{
            state.origin = action.payload // Change the origin of the trip dispatching the action and updating the data layer
        },
        setDestination: (state, action) =>{
            state.destination = action.payload; 
        },
        setTravelTimeInformation: (state, action) => {
            state.travelTimeInformation = action.payload;
        }
    }
});

export const {setOrigin, setDestination, setTravelTimeInformation} = navSlice.actions; 

//Selectors from recovering data from data layer

export const selectOrigin = (state) => state.nav.origin;
export const selectDestination = (state) => state.nav.setDestination;
export const selecttravelTimeInformation= (state) => state.nav.travelTimeInformation;

export default navSlice.reducer; 
