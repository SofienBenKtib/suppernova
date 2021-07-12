import React from 'react'
import { StyleSheet, Text, View,Image, ScrollView,FlatList,Dimensions } from 'react-native'

screenWidth=Dimensions.get('window').width;
screenHeight=Dimensions.get('window').height;

const Profil = () => {
    return (
        <ScrollView pagingEnabled={true}>
            <View style={styles.viewStyle}>
            <Image
            source={require('../assets/food.jpg')}
            resizeMode='cover'
            style={{
                width:screenWidth,
                height:screenHeight,  
            }}
            />
            <View style={styles.txtPosition}>
            <Text style={styles.title}>SUMMER CLUB</Text>
            <Text style={styles.txt}>L'été au menu</Text>
            <Text style={styles.txt}>des SUPPERNOVA chefs</Text>
            </View>
            </View>
            <View style={styles.viewStyle}>
            <Image
            source={require('../assets/food1.jpg')}
            resizeMode='cover'
            style={{
                width:screenWidth,
                height:screenHeight,
            }}
            />
             <View style={styles.txtPosition}>
            <Text style={styles.txt}>JEAN-FRANCOIS</Text>
            </View>
            </View>
            <View style={styles.viewStyle}>
            <Image
            source={require('../assets/food2.jpg')}
            resizeMode='cover'
            style={{
                width:screenWidth,
                height:screenHeight,  
            }}
            />
            <View style={styles.txtPosition}>
            <Text style={styles.title}>Anne-Sophie</Text>
            <Text style={styles.txt}>Pic</Text>
            </View>
            </View>
            <View style={styles.viewStyle}>
            <Image
            source={require('../assets/food3.jpg')}
            resizeMode='cover'
            style={{
                width:screenWidth,
                height:screenHeight,  
            }}
            />
            <View style={styles.txtPosition}>
            <Text style={styles.title}>ASAF GRANIT</Text>
            </View>
            </View>
            <View style={styles.viewStyle}>
            <Image
            source={require('../assets/food4.jpg')}
            resizeMode='cover'
            style={{
                width:screenWidth,
                height:screenHeight,  
                flexDirection:'row',
                flexWrap:'wrap'
            }}
            />
            <View style={styles.txtPosition}>
            <Text style={styles.title}>FREDERIQUE</Text>
            <Text style={styles.title}>DUCA</Text>
            </View>
            </View>
        </ScrollView>
    )
}

export default Profil

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    viewStyle:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    title:{
        fontSize:55,
        fontWeight:'bold',
        color:'white',
    },
    txt:{
        fontSize:35,
        fontWeight:'bold',
        color:'white',
        paddingTop:3
    },
    txtPosition:{
        position:'absolute',
        justifyContent:'center',
        alignItems:'center',
    }
})
