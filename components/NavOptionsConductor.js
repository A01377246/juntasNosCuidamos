import React from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from "react-native";
import tw from 'tailwind-react-native-classnames';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';



//Array of objects containing information about each menu item
const data = [
    {
        id: "1",
        title: "Encontrar compañeros de viaje",
        image: "https://cdn2.iconfinder.com/data/icons/professionals-flat-colorful/614/1582_-_Driver_Female-512.png",
        screen: "MapScreen"
    }, 
    {
        id: "2",
        title: "Reportar un viaje",
        image: "https://th.bing.com/th/id/R.349b51e1fa6c852514052d3fe9c5e3fc?rik=dvX6BHebRAxwLQ&riu=http%3a%2f%2fcliparts.co%2fcliparts%2f8iE%2fjnA%2f8iEjnAgaT.png&ehk=wbObfnKwQBgLf%2bhe282rPie5pINzbPjaBYzAvgn2Vf8%3d&risl=&pid=ImgRaw&r=0",
        screen: "ReporteScreen"
    },

    {
        id: "3",
        title: "Mis viajes",
        image: "https://th.bing.com/th/id/R.0cfc51d383b272f7c359babaf0f15f63?rik=cDdkGWwkba9yKw&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_409323.png&ehk=bqmHtRFAuv4MxtLyNMCVvT%2f96WkArgcqEBJTQ%2f0hoV4%3d&risl=&pid=ImgRaw&r=0",
        screen: "ViajesScreen"
    
    },

]

const NavOptionsConductor = () =>{ 
    const navigation = useNavigation();

    return(
       <FlatList
        data = {data} 
        horizontal
        keyExtractor = {(item)=> item.id}
        renderItem = {({item}) => (
            <TouchableOpacity 
            onPress = {() => navigation.navigate(item.screen)}
            style = {tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}>
                <View>
                    <Image
                        style = {{width:120, height:120, resizeMode: 'contain'}}
                        source = {{
                            uri: item.image
                        }}
                    />
                      <Text style ={tw `mt-2 text-lg font-semibold`}>{item.title}</Text>

                      <Icon 
                        style = {tw`p-2 bg-black rounded-full w-10 mt-4`}
                        name = "arrowright"
                        color = "white"
                        type = "antdesign"
                      />

                </View>
               
            </TouchableOpacity>
            )}

       />
    );
};

export default NavOptionsConductor;

