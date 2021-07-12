import React from 'react'
import { StyleSheet, Text,Image, View, ScrollView } from 'react-native'
import {Font} from 'expo'
const Accueil = () => {
    return (
        <ScrollView>
            <View>
                <Image
                source={require('../assets/chief.jpg')}
                resizeMode='contain'
                style={{
                    width:'100%',
                    height:290,
                }}
                />
                <Text style={styles.title}>JEAN-FRANCOIS ROUQUETTE</Text>
                <Text style={styles.st}>Restaurant Lorem ipsum</Text>
                <Text style={styles.st}>Type de cuisine</Text>
                <Text style={styles.main}>Je veux que ma cuisine sois toujours lisible.Je veux que ma cuisine sois toujours lisible.
                Je veux que ma cuisine sois toujours lisible.Je veux que ma cuisine sois toujours lisible.</Text>

                <View style={styles.pics}>
                <Image
                source={require('../assets/plat2.jpg')}
                resizeMode='contain'
                style={{
                    width:200,
                    height:200,
                }}
                />
                <View style={styles.tags}>
                <Text style={styles.tagsText}>PLAT 1</Text>
                <Text style={styles.tagsText}>35€</Text>
                </View>
                <Image
                source={require('../assets/plat2.jpg')}
                resizeMode='contain'
                style={{
                    width:200,
                    height:200,
                }}
                />
                <View style={styles.tags2}>
                <Text style={styles.tagsText}>PLAT 2</Text>
                <Text style={styles.tagsText}>35€</Text>
                </View>
                </View>

                <View>
                <Image
                source={require('../assets/blur.jpg')}
                resizeMode='contain'
                style={{
                    width:'100%',
                    height:250,
                    bottom:40
                }}
                />
                <View style={styles.tags3}>
                <Text style={styles.tagsText}>MENU 3 TEMPS</Text>
                <Text style={styles.tagsText}>150€</Text>
                </View>
                </View>
                <View style={styles.pics}>
                <Image
                source={require('../assets/plat3.jpg')}
                resizeMode='contain'
                style={{
                    width:200,
                    height:200,
                    bottom:50,
                    right:10
                }}
                />
                <View style={styles.tags}>
                <Text style={styles.tagsText2}>PLAT 3</Text>
                <Text style={styles.tagsText2}>35€</Text>
                </View>
                <Image
                source={require('../assets/plat3.jpg')}
                resizeMode='contain'
                style={{
                    width:200,
                    height:200,
                    bottom:50,
                    right:10
                }}
                />
                <View style={styles.tags2}>
                <Text style={styles.tagsText2}>PLAT 4</Text>
                <Text style={styles.tagsText2}>35€</Text>
                </View>
                </View>
                <View>
                <Image
                source={require('../assets/blur2.jpg')}
                resizeMode='contain'
                style={{
                    width:'100%',
                    height:250,
                    bottom:60
                }}
                />
                <View style={styles.tags3}>
                <Text style={styles.tagsText}>MENU 3 TEMPS</Text>
                <Text style={styles.tagsText}>150€</Text>
                </View>
                </View>
                <View style={styles.pics}>
                <Image
                source={require('../assets/plat5.jpg')}
                resizeMode='contain'
                style={{
                    width:200,
                    height:200,
                    bottom:70
                }}
                />
                <View style={styles.tags}>
                <Text style={styles.tagsText3}>PLAT 5</Text>
                <Text style={styles.tagsText3}>35€</Text>
                </View>
                <Image
                source={require('../assets/plat5.jpg')}
                resizeMode='contain'
                style={{
                    width:200,
                    height:200,
                    bottom:70
                }}
                />
                <View style={styles.tags2}>
                <Text style={styles.tagsText3}>PLAT 6</Text>
                <Text style={styles.tagsText3}>35€</Text>
                </View>
                </View>
            </View>
        </ScrollView>
    )
}

export default Accueil

const styles = StyleSheet.create({
    title:{
        fontWeight:'500',
        left : 10,
        fontSize:25
    },
    st:{
        left : 10,
        fontSize:20,
        paddingTop:10
    },
    main:{
        left:10,
        fontSize:15,
        paddingTop:10,
    },
    pics:{
        flexDirection:'row',
        flex:1
    },
    tagsText:{
        fontSize:30,
        fontWeight:'bold',
        color:'white',
        alignSelf:'center'
    },
    tagsText2:{
        fontSize:30,
        fontWeight:'bold',
        color:'white',
        alignSelf:'center',
        bottom:25,
        right: 6
    },
     tagsText3:{
        fontSize:30,
        fontWeight:'bold',
        color:'white',
        alignSelf:'center',
        bottom:45,
        left: 5
    },
    tags:{
        position:'absolute',
        justifyContent:'center',
        alignItems:'center',
        top:50,
        left:50
    },
    tags2:{
        position:'absolute',
        justifyContent:'center',
        alignItems:'center',
        top:50,
        right:30
    },
    tags3:{
        position:'absolute',
        justifyContent:'center',
        alignItems:'center',
        top:55,
        left:90
    },
})
