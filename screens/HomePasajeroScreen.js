import React from 'react'
import {View, SafeAreaView, Image, Text} from 'react-native'
import tw from 'tailwind-react-native-classnames'
import NavOptions from '../components/NavOptions';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import {GOOGLE_MAPS_APIKEY} from "@env"
import { setDestination, setOrigin } from '../slices/navSlice';
import { useDispatch } from 'react-redux';
import { StyleSheet } from 'react-native';


// API KEY AIzaSyAkt2zrQVyfmsZN-JU-_NE8OArnQdu6oBI
const HomePasajeroScreen = () =>{

  const dispatch = useDispatch();


    return (
      <SafeAreaView style = {tw `bg-white h-full`}>
        <View style = {tw`p-5`}>
          <Image 
          style = {{
            width: 100, 
            height: 100,
            resizeMode: 'contain'
          }}
          
          source = {{
            uri: "https://th.bing.com/th/id/R.43ffb5d64336d9838be74e4f9de707aa?rik=JU2AO8IkO4ul6w&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_529937.png&ehk=y9z8d8sBAkBKWPf2n6j9ll9xAcleurXreH6UgHi6%2fu0%3d&risl=&pid=ImgRaw&r=0"
          }}/>

          <GooglePlacesAutocomplete
            placeholder='¿De dónde partirás? '
            nearbyPlacesAPI='GooglePlacesSearch'
            styles = {{container: {
              flex:0,
            },
            textInput: {
              fontSize:18,
            }
            }}
            onPress = {(data,details = null) => {
              dispatch(setOrigin({
                location: details.geometry.location,
                description: data.description
              }))

            dispatch(setDestination(null))
            
            }}
            fetchDetails={true}
            returnKeyType = {'search'}
            minLength = {2}
            query = {{
              key: GOOGLE_MAPS_APIKEY,
              language: 'es'
            }}
            enablePoweredByContainer={false}
            debounce = {400}
          
          />

          <NavOptions/>
        </View>
      </SafeAreaView>
    )
}

export default HomePasajeroScreen

const styles = StyleSheet.create({
  text:{
    color: "blue"
  },
});
