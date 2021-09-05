import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View, Image, Dimensions, SafeAreaView, TouchableOpacity, Alert } from 'react-native';
import { images } from '../Assets';
import {colors} from '../Constants/colors';
import {Item} from '../Models/products';
import {useSelector,useDispatch} from 'react-redux';
import { clearCart} from '../Redux/Actions/cartAction';
import Button from '../Components/mainButton';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

Icon.loadFont();
const { width, height } = Dimensions.get('window');

interface IProps {
    navigation: any
  }

const productDetails = ({navigation}:IProps) => {
    const [id,setID] = useState<number>(0);
    //Redux
    const cartData = useSelector((state) => state.cartReducer.cart);
    const dispatch = useDispatch()

    const generate = () => {
        var min = 1000000;
        var max = 10000000;
        setID(Math.floor(Math.random() * (max - min + 1)) + min);
      };

      useEffect(()=>{
        generate();
        dispatch(clearCart());
      },[])

    return (
        <View style={styles.container}>
            <SafeAreaView style={{flex:1}}>
                <Image source={images.orderSucceeded}/>
                <Text style={styles.successMessage}>Order Placed Successfully</Text>
                <Text style={styles.orderNumber}>Order Number: #{id}</Text>
                <Button title='Ok' onPress={()=>navigation.navigate('Products')} containerStyle={styles.successButton}/>
            </SafeAreaView>
        </View>
    )
}

export default productDetails;

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:colors.appBackGroundColor
    },
    successMessage:{
        textAlign:'center',
        fontSize:22,
        fontWeight:'bold',
        color:'#4BB543'
    },
    orderNumber:{
        textAlign:'center',
        fontSize:16,
        fontWeight:'bold',
        color:'#4BB543',
        marginTop:height*0.02
    },
    successButton:{
        height:height*0.05,
        width:width/2,
        alignSelf:'center',
        marginTop:height*0.04
    }
})
