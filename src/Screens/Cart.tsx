import React,{useState, useEffect} from 'react'
import { StyleSheet, View, Dimensions ,FlatList, SafeAreaView, TouchableOpacity, Text, Alert } from 'react-native';
import {images} from '../Assets/index';
import { colors } from '../Constants/colors';
import {Item} from '../Models/products';
import {useSelector,useDispatch} from 'react-redux';
import {clearCart} from '../Redux/Actions/cartAction';
import Header from '../Components/header';
import CarTItem from '../Components/cartItem';
import Button from '../Components/mainButton';

const { width, height } = Dimensions.get('window');

interface selfProps{
    navigation?: any;
}

const test: React.FC<selfProps> = (props:selfProps) => {
    const [total, setTotal] = useState<Number>(0);
    const cartData = useSelector((state) => state.cartReducer.cart);
    const dispatch = useDispatch();

    const _keyExtractor = (item:Item, index:Number) => item.id.toString();

    const cancelCurrentOrder = () =>{
        Alert.alert(  
            'Warning',  
            'Do you want to remove all products ?',  
            [  
                {  
                    text: 'Cancel',  
                    onPress: () => null,  
                    style: 'cancel',  
                },  
                {text: 'OK', onPress: () => dispatch(clearCart())},  
            ]  
        );  
         
    }

    const calculateTotal = (): number => {
        let total: number = 0;
        cartData?.forEach((product:Item)=>{
            total += (product.price * product.quantity)
        });
        return total;
    }

    useEffect(()=>{
        setTotal(calculateTotal());
    },[cartData])

    return (
        <View style={styles.container}>
            <SafeAreaView style={{flex:1}}>
                <Header title='Cart' navigation={props.navigation} showBack={true} titleStyle={styles.headerTitle} hideHeader={true}/>
                {cartData.length > 0 ?<><FlatList  
                    data={cartData}  
                    style={{flex:1}}
                    renderItem={({item}) =>{
                     return <CarTItem navigation={props.navigation} id={item.id} name={item.name} image={item.image} desc={item.desc} price={item.price} quantity={item.quantity}/>
                    }}
                    keyExtractor={_keyExtractor}
                />
                <View style={styles.total}><Text style={styles.totalText}>Total: {total}</Text></View>
                </>: <View style={{height:height,alignItems:'center',justifyContent:'center'}}><Text style={{fontWeight:'bold',fontSize:20}}>The cart is empty.</Text></View> }
                    <View style={styles.footer}>
                        <Button title='Cancel Order' titleStyle={styles.buttonTitle} onPress={()=>cancelCurrentOrder()} containerStyle={styles.cancelButton}/>
                            <TouchableOpacity style={styles.seeMore} onPress={()=>props.navigation.navigate('Products')}><Text>See More Products</Text></TouchableOpacity>
                        <Button title='Place Order' titleStyle={styles.buttonTitle} onPress={()=>props.navigation.navigate('OrderDetails')} containerStyle={styles.placeButton}/>
                    </View>
            </SafeAreaView>
        </View>
    )
}

export default test;

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:colors.appBackGroundColor
    },
    headerTitle:{
        color: colors.headerTitleColor,
        fontWeight:'bold'
    },
    seeMore:{
        marginVertical:height*.03
    },
    footer:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-evenly'
    },
    cancelButton:{
        backgroundColor:'#df4759',
        borderRadius:10,
        height:height*.05,
        width:width/4
    },
    placeButton:{
        backgroundColor:'#4BB543',
        borderRadius:10,
        height:height*.05,
        width:width/4
    },
    buttonTitle:{
        fontSize:12
    },
    total:{
        borderBottomColor:'gray',
        borderBottomWidth:1
    },
    totalText:{
        textAlign:'center',
        marginVertical:height *0.02,
        fontSize:16,
        fontWeight:'bold'
    }
})
