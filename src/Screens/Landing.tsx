import React,{useState} from 'react'
import { StyleSheet, Text, Dimensions, ImageBackground, SafeAreaView } from 'react-native';
import { View } from 'react-native-animatable';
import {images} from '../Assets/index';
import Header from '../Components/header';
import Button from '../Components/mainButton';

const { width, height } = Dimensions.get('window');

interface selfProps{
    navigation? :any;
}

const test: React.FC<selfProps> = (props:selfProps) => {

    return (
        <ImageBackground resizeMode='cover' source={images.landingBackground} style={styles.container}>
            <SafeAreaView style={{flex:1}}>
                <Header title='Home' titleStyle={{color:'#000'}} navigation={props.navigation}/>
                <View style={styles.buttonBox}>
                    <Button title='View Products' containerStyle={styles.buttonStyle} onPress={()=>props.navigation.navigate('Products')}/>
                </View>
            </SafeAreaView>
        </ImageBackground>
    )
}

export default test;

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    buttonBox:{
        flex:1,
        justifyContent:'flex-end',
        alignItems:'center',

    },
    buttonStyle:{
        width: width*.7,
        height: height*.07,
        marginBottom: height*.08,
    }
})
