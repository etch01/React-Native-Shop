import React from 'react'
import { StyleSheet, Text, View, Image, Dimensions, Alert } from 'react-native';
import { images } from '../Assets';
import {colors} from '../Constants/colors';
import {Item} from '../Models/products';
import {useSelector,useDispatch} from 'react-redux';
import {removeItem, updateQuantity } from '../Redux/Actions/cartAction';
import {truncateString} from '../Helpers/truncateString'
import Button from '../Components/mainButton';
import Icon from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native-gesture-handler';

Icon.loadFont();
const { width, height } = Dimensions.get('window');

const cart = (props:Item) => {
    const cartData = useSelector((state) => state.cartReducer.cart);
    const dispatch = useDispatch();

    const updateItemQuantity = (type:String) =>{
        let currentItem:Item = {
            id:props.id,
            desc:props.desc,
            name:props.name,
            image:props.image,
            price:props.price,
            quantity:props.quantity,
        }
        if (type == 'add'){
            cartData.forEach((item:any)=>props.id == item.id ? currentItem.quantity = item?.quantity +1:null);             
            dispatch(updateQuantity(currentItem))
        }else{
            if (currentItem.quantity > 1){
                cartData.forEach((item:any)=>props.id == item.id ? currentItem.quantity = item?.quantity -1:null); 
                dispatch(updateQuantity(currentItem))            
            }else{
                Alert.alert(  
                    'Warning',  
                    'Remove product from cart ?',  
                    [  
                        {  
                            text: 'Cancel',  
                            onPress: () => null,  
                            style: 'cancel',  
                        },  
                        {text: 'OK', onPress: () => dispatch(removeItem(currentItem))},  
                    ]  
                );  
                
            }
        }
    }
    
    return (
        <View style={styles.buttonContainer}>
            <View style={styles.subContainer}>
                <Image resizeMode='stretch' source={props.image} style={styles.thumbnail}/>
                <View style={styles.rightSide}>
                    <Text style={styles.itemName}>{props.name}</Text>
                    <Text style={styles.itemPrice}>{props.price}$</Text>
                    <View style={styles.quantityRow}>
                        <TouchableOpacity onPress={()=>updateItemQuantity('remove')}>
                            <Icon size={30} color="black" name="ios-remove-circle-outline" />
                        </TouchableOpacity>
                        <Text style={{fontSize:18,marginLeft:width*0.02}}>{props.quantity}</Text>
                        <TouchableOpacity style={{marginLeft:width*0.02}} onPress={()=>updateItemQuantity('add')}>
                            <Icon size={30} color="black" name="ios-add-circle-outline" />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
            </View>
        </View>
    )
}

export default cart;

const styles = StyleSheet.create({
    buttonContainer:{
        backgroundColor:colors.cardBackground,
        borderRadius:20,
        height:height * .2,
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
    },
    quantityRow:{
        flexDirection:'row',
        alignItems:'center',
        // justifyContent:'space-around',
        marginTop:height*0.03
    }
})
