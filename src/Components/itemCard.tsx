import React from 'react'
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import { images } from '../Assets';
import {colors} from '../Constants/colors';
import {Item} from '../Models/products';
import {useSelector,useDispatch} from 'react-redux';
import {setCurrentProduct } from '../Redux/Actions/productDetailsAction';
import {truncateString} from '../Helpers/truncateString'
import Button from '../Components/mainButton';
const { width, height } = Dimensions.get('window');

const mainButton = (props:Item) => {
    const dispatch = useDispatch()

    const setProduct = () => {
        const product:Item = {
            id: props.id,
            name:props.name,
            image:props.image,
            desc:props.desc,
            price:props.price,
            quantity:props.quantity || 1,
        }
        dispatch(setCurrentProduct(product,()=>props.navigation.navigate('Details')))
    }

    return (
        <View style={styles.buttonContainer}>
            <View style={styles.subContainer}>
                <Image resizeMode='stretch' source={props.image} style={styles.thumbnail}/>
                <View style={styles.rightSide}>
                    <Text style={styles.itemName}>{props.name}</Text>
                    <Text style={styles.itemDesc}>{truncateString(props.desc,50)}</Text>
                    <Text style={styles.itemPrice}>{props.price}$</Text>
                </View>
            </View>
            <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                <Button title='Select' onPress={()=>setProduct()} containerStyle={styles.buttonStyle}/>
            </View>
        </View>
    )
}

export default mainButton;

const styles = StyleSheet.create({
    buttonContainer:{
        backgroundColor:colors.cardBackground,
        borderRadius:20,
        height:height * .3,
        width:width*.9,
        alignSelf:'center',
        marginTop: height*.02
    },
    subContainer:{
        flexDirection:'row'
    },
    thumbnail:{
        height:height*.17,
        width:width*.4,
        borderRadius:20
    },
    itemName:{
        fontSize:14,
        flexShrink:1,
        textAlign:'justify',
        fontWeight:'bold'
    },
    itemDesc:{
        fontSize:12,
        flexShrink:1,
        color:'#CAC8C8',
        marginTop:height*0.01

    },
    itemPrice:{
        fontSize:16,
        fontWeight:'bold',
        marginTop:height*0.01
    },
    rightSide:{
        marginLeft:width*0.02,
        marginTop:height*.02,
        flex:1,
        paddingRight:width*0.02
    },
    buttonStyle:{
        width: width*.7,
        height: height*.07,
    }
})
