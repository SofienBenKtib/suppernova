import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

const Button = () => {
    return (
        <View>
            <TouchableOpacity style={styles.btn}>
                   <Text style={styles.btnText}>AJOUTER AU PANIER</Text>
               </TouchableOpacity>
        </View>
    )
}

export default Button

const styles = StyleSheet.create({
    btn:{
        backgroundColor:'grey',
        position:'absolute',
        alignItems:'center',
        justifyContent:'center',
        width:'60%',
        height:40,
        bottom:60,
        alignSelf:'center',
        borderRadius:7,
        elevation:7,
        flexDirection:'row'
    },
    btnText:{
        color:'white',
        fontSize:23,
        alignSelf:'center'
    }
})
