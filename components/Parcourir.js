import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Parcourir = () => {
    return (
        <View style={styles.container}>
            <Text>Parcourir</Text>
        </View>
    )
}

export default Parcourir
const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})