import React from 'react'
import {View, SafeAreaView, Image, Text} from 'react-native'
import tw from 'tailwind-react-native-classnames'
import NavOptionsConductor from '../components/NavOptionsConductor';
import { StyleSheet } from 'react-native';


const HomeConductorScreen = () =>{



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

          

          <NavOptionsConductor/>
        </View>
      </SafeAreaView>
    )
}

export default HomeConductorScreen

const styles = StyleSheet.create({
  text:{
    color: "blue"
  },
});
