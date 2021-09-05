import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {colors} from '../Constants/colors';

interface selfProps {
    title: string;
    containerStyle?: any;
    titleStyle?:any;
    onPress(): void;
}

const mainButton = (props:selfProps) => {
    return (
        <TouchableOpacity 
        style={[styles.buttonContainer,props.containerStyle]}
        onPress={props.onPress}>
            <Text style={[styles.title,props.titleStyle]}>{props.title}</Text>
        </TouchableOpacity>
    )
}

export default mainButton;

const styles = StyleSheet.create({
    buttonContainer:{
        backgroundColor:colors.mainButton,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:20,
    },
    title:{
        color:colors.buttonTextColor,
        fontSize:20
    }
})
