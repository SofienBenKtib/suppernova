import React from 'react'
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Accueil from '../components/Accueil'
import Notifications from '../components/Notifications'
import Parcourir from '../components/Parcourir'
import Panier from '../components/Panier'
import Profil from '../components/Profil'

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
        <Tab.Navigator
        tabBarOptions={{
            showLabel:false,
            pressColor:'white',
            style:{
                backgroundColor:'#a3a3a3',
                position:'absolute',
                bottom:25,
                left:20,
                right:20,
                elevation:0,
                borderBottomLeftRadius:15,
                borderTopRightRadius:15,
                height:60,
                ...style.shadow
            }
        }}>
            <Tab.Screen name="Accueil" component={Accueil} options={{
                tabBarIcon:({focused})=>(
                    <View>
                        <Image
                        source={require('../assets/globe.png')}
                        resizeMode='contain'
                        style={{
                            width:25,
                            height:25,
                            alignSelf:'center',
                            tintColor: focused ? 'white' : 'black'
                        }}/>
                        <Text style={{color: focused ? 'white' : 'black'}}>Accueil</Text>
                    </View>
                )
            }}/>
            <Tab.Screen name="Parcourir" component={Parcourir} options={{
                tabBarIcon:({focused})=>(
                    <View>
                        <Image
                        source={require('../assets/archive.png')}
                        resizeMode='contain'
                        style={{
                            width:25,
                            height:25,
                            alignSelf:'center',
                            tintColor: focused ? 'white' : 'black'
                        }}/>
                        <Text style={{color: focused ? 'white' : 'black'}}>Parcourir</Text>
                    </View>
                )
            }}/>
            <Tab.Screen name="Panier" component={Panier} options={{
                tabBarVisible:true,
                 tabBarIcon:({focused})=>(
                    <View>
                        <Image
                        source={require('../assets/briefcase.png')}
                        resizeMode='contain'
                        style={{
                            width:25,
                            height:25,
                            alignSelf:'center',
                            tintColor: focused ? 'white' : 'black'
                        }}/>
                        <Text style={{color: focused ? 'white' : 'black'}}>Panier</Text>
                    </View>
                )
            }}/>
            <Tab.Screen name="Notifications" component={Notifications} options={{
                 tabBarIcon:({focused})=>(
                    <View>
                        <Image
                        source={require('../assets/notification.png')}
                        resizeMode='contain'
                        style={{
                            width:25,
                            height:25,
                            alignSelf:'center',
                            tintColor: focused ? 'white' : 'black'
                        }}/>
                        <Text style={{color: focused ? 'white' : 'black'}}>Notification</Text>
                    </View>
                )
            }}/>
            <Tab.Screen name="Profil" component={Profil} options={{
                 tabBarIcon:({focused})=>(
                    <View>
                        <Image
                        source={require('../assets/user.png')}
                        resizeMode='contain'
                        style={{
                            width:25,
                            height:25,
                            alignSelf:'center',
                            tintColor: focused ? 'white' : 'black'
                        }}/>
                        <Text style={{color: focused ? 'white' : 'black'}}>Profile</Text>
                    </View>
                )
            }}/>
        </Tab.Navigator>
    )
}



const style = StyleSheet.create({
    shadow:{
        elevation:5
    }
})
export default Tabs
