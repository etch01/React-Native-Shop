import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View, Image, Dimensions, SafeAreaView, TouchableOpacity, Alert } from 'react-native';
import { images } from '../Assets';
import {colors} from '../Constants/colors';
import {Item} from '../Models/products';
import {useSelector,useDispatch} from 'react-redux';
import { addToCart, updateQuantity} from '../Redux/Actions/cartAction';
import FlashMessage,{showMessage} from "react-native-flash-message";
import Header from '../Components/header';
import Button from '../Components/mainButton';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

Icon.loadFont();
const { width, height } = Dimensions.get('window');

interface IProps {
    navigation: any
  }

const productDetails = ({navigation}:IProps) => {
    const [product, setProduct] = useState<Item>();
    const [loading, setLoading] = useState<boolean>();

    //Redux
    const productState = useSelector((state) => state.productReducer);
    const cartData = useSelector((state) => state.cartReducer.cart);
    const dispatch = useDispatch()

    useEffect(()=>{
        setProduct(productState.productDetails)        
    },[product])

    const showSuccessMessage = (): void =>{
        setLoading(true)
        if(cartData.some((element:any)=>element.id == product?.id)){
            showMessage({message: 'Product already in cart',type: "warning",icon:'warning',
            onHide:()=>addProductToCart()})
        }
        else{
            showMessage({message: `${product?.name.toLocaleLowerCase()} successfully added to cart`,type: "success",icon:'success',
            onHide:()=>addProductToCart()})
        }
    }

    const addProductToCart = (): void =>{
        setLoading(false)
        if(cartData.some((element:any)=>element.id == product?.id)){
            updateQuantity(cartData.quantity == undefined ? 1 : cartData.quantity+1)
        }
        else{
            dispatch(addToCart(product));
        }
    }

    return (
        <View style={styles.productContainer}>
            <SafeAreaView style={{flex:1}}>
            {/* header */}
            <Header title='Product Details' showBack={true} titleStyle={styles.headerTitle} navigation={navigation}/>
            <FlashMessage position="top" />
            {/* image and add */}
            <View style={{alignSelf: 'center'}}>
                <Image style={styles.thumbnail} resizeMode='cover' source={product?.image}/>
                {!loading?<TouchableOpacity style={styles.addButton} onPress={()=>showSuccessMessage()}>
                    <Icon size={24} color="#fff" name="cart-plus" />
                </TouchableOpacity>:null}
            </View>
            {/* details */}
            <View style={styles.details}>
                <View style={styles.uniqueId}>
                    <Text style={styles.idText}>Product Number : {product?.id}</Text>
                </View>
            </View>
            <View style={styles.details}>
                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                        <Text style={styles.itemName}>{product?.name}</Text>
                        <Text style={styles.itemName}>{product?.price}$</Text>
                    </View>
                    <Text style={styles.itemDesc}>{product?.desc}</Text>
            </View>
            {/* Footer Area */}
            <View style={styles.stickyArea}>
                <Button title='See More Products' onPress={()=>!loading?navigation.goBack():null}
                containerStyle={styles.buttonStyle}/>
            </View>
            </SafeAreaView>
        </View>
    )
}

export default productDetails;

const styles = StyleSheet.create({
    productContainer:{
        flex:1,
        backgroundColor:colors.appBackGroundColor,
    },
    thumbnail:{
        alignSelf:'center',
        maxHeight:height/3,
        marginTop:height*.02
    },
    headerTitle:{
        color: colors.headerTitleColor,
        fontWeight:'bold'
    },
    addButton:{
        backgroundColor:colors.mainButton,
        width:40,
        height:40,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:20,
        position:'absolute',
        bottom:20,
        right:20
    },
    details:{
        width:width*.8,
        alignSelf:'center',
        marginTop:height *.02
    },
    uniqueId:{
        backgroundColor:"gray",
        height:35,
        justifyContent:'center',
        padding:10,
        alignSelf:'flex-start'
    },
    idText:{
        color:'#fff',
        fontSize:10, 
        fontWeight:'bold'
    },
    itemName:{
        fontSize:18,
        flexShrink:1,
        textAlign:'justify',
        fontWeight:'bold'
    },
    itemDesc:{
        fontSize:14,
        flexShrink:1,
        color:'#CAC8C8',
        marginTop:height*0.01
    },
    itemPrice:{
        fontSize:20,
        fontWeight:'bold'
    },
    stickyArea:{
        position:'absolute',
        bottom:0,
        alignItems:'center',
        justifyContent:'center',
        width:width,
        height:height/9,
        borderTopColor:'#f5f5f5',
        borderTopWidth:1
    },
    buttonStyle:{
        width: width*.7,
        height: height*.05,
        borderRadius:10
    }
})
