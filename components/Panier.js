import React from 'react'
import { StyleSheet, Text, View , Image,TouchableOpacity,ScrollView} from 'react-native'
import Button from './Button'
export default class Panier extends React.Component {
    state={
        value: 0,
    }
    incrementValue=() => {
        this.setState({
            value: this.state.value + 1,
        })
    }
    decrementValue=() => {
        this.setState({
            value: this.state.value - 1,
        })
    }
    render(){
    return (
        <ScrollView>
            <Image
            source={require('../assets/lobster.jpg')}
            resizeMode='contain'
                style={{
                    width:'100%',
                    height:290,
                }}/>
                <Text style={styles.title}>Red Lobster Plate</Text>
                <Text style={styles.price}>35€</Text>
                <Text style={styles.txt}>Red lobster plate is a Lorem ipsum dolor.Red lobster plate is a Lorem ipsum dolor.
                Red lobster plate is a Lorem ipsum dolor.Red lobster plate is a Lorem ipsum dolor.
                </Text>
                
                <View style={styles.kitchen}>
                <Image
                 source={require('../assets/microwave.png')}
                 resizeMode='contain'
                 style={{
                    width:50,
                    height:50,
                 }}/>
                 <Image
                 source={require('../assets/oven.png')}
                 resizeMode='contain'
                 style={{
                    width:50,
                    height:50,
                 }}/>
                 <Image
                 source={require('../assets/pan.png')}
                 resizeMode='contain'
                 style={{
                    width:50,
                    height:50,
                 }}/>
                 <Image
                 source={require('../assets/steamer.png')}
                 resizeMode='contain'
                 style={{
                    width:50,
                    height:50,
                 }}/>
                </View>

                <View style={styles.incrDecr}>
                    <TouchableOpacity>
                        <Text style={styles.incrDecrText}> - </Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.incrDecrText}> 0 </Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.incrDecrText}> + </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.tuto}>
                <Image
            source={require('../assets/tuto.jpg')}
            resizeMode='contain'
                style={{
                    width:'100%',
                    height:290,
                }}/>
                <Text style={styles.tutoTxt}>LE TUTO</Text>
                </View>
                <Button/>
               <View style={{alignSelf:'center'}}>
                   <Text style={styles.details}>Plus de détails</Text>
               </View>
              
        </ScrollView>
        
    )
}
}


const styles = StyleSheet.create({
    title:{
        fontWeight:'bold',
        alignSelf:'center',
        fontSize:50
    },
    price:{
        fontWeight:'bold',
        alignSelf:'center',
        fontSize:30,
        padding:5
    },
    txt:{
        paddingStart:10
    },
    kitchen:{
        flexDirection:'row',
        justifyContent:'space-evenly',
        paddingTop:10
    },
    incrDecr:{
        flexDirection:'row',
        alignSelf:'center',
        paddingTop:10
    },
    incrDecrText:{
        fontSize:70,
        fontWeight:'bold',
        paddingTop:10
    },
    tutoTxt:{
        fontSize:50,
        fontWeight:'bold',
        color:'white',
        alignSelf:'center',
        alignContent:'center',
        bottom:'50%'
    },
    details:{
        fontSize:30,
        fontWeight:'bold',
        bottom:40
    },
   
})
