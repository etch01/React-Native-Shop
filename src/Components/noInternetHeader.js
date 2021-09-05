import React from 'react'
import { StyleSheet, Text, Platform} from 'react-native'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange as lor,
    removeOrientationListener as rol
} from 'react-native-responsive-screen';
import * as Animatable from 'react-native-animatable';

const noIntenetHeader = ({}) => {
    return (
        <Animatable.View animation="slideInDown" style={styles.noInternetHeader}>
            <Text style={styles.noInternetText}>There is No internet connection.</Text>
        </Animatable.View>
    )
}


const styles = StyleSheet.create({
    noInternetHeader:{
        backgroundColor:'#f62433',
        alignItems:'center',
        justifyContent:'center',
        height:Platform.OS == 'ios' ? hp('10%') : hp('10%'),
    },
    noInternetText:{
        fontSize:18,
        color:'#ffffff',
        marginTop:Platform.OS == 'ios' ? hp('4%') : 0,
    }
})

export default noIntenetHeader
