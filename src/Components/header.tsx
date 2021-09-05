import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity,Dimensions } from 'react-native';
import {colors} from '../Constants/colors';
import {useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
Icon.loadFont();

const { width, height } = Dimensions.get('window');

interface selfProps {
    title: string;
    containerStyle?: any;
    titleStyle?:any;
    onPress?(): void;
    showBack?: boolean;
    hideHeader?: boolean;
    navigation? : any;
}

const header: React.FC<selfProps> = (props:selfProps) => {
    const cartData = useSelector((state) => state.cartReducer.cart);

    return (
        <View style={[styles.headerContainer,props.containerStyle]}>
            <View style={styles.justify}>
                {props.showBack?<TouchableOpacity onPress={()=>props.navigation.goBack()}><Icon size={24} color="black" name="arrow-back-circle-outline" /></TouchableOpacity>:<View/>}
                <Text style={[styles.title,props.titleStyle]}>{props.title}</Text>
                {props.hideHeader?<View/>:<TouchableOpacity onPress={()=>props.navigation.navigate('Cart')}>
                    <Icon size={24} color="black" name="cart-outline" />
                    <View style={styles.badge}>
                        <Text style={{color:'#fff',fontSize:8}}>{cartData.length}</Text>
                    </View>
                </TouchableOpacity>}
            </View>
        </View>
    )
}

export default header;

const styles = StyleSheet.create({
    headerContainer:{
        width:width,
        height: height*.06,
        borderBottomColor:'#F6F6F6',
        borderBottomWidth:1,
        backgroundColor:colors.mainHeader
    },
    justify:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        flex:1,
        width:width*.9,
        alignSelf:'center'
    },
    title:{
        color:colors.buttonTextColor,
        fontSize:24
    },
    badge:{
        backgroundColor:'#FE190B',
        height:width*0.04,
        width:width*0.04,
        borderRadius:width*0.02,
        alignItems:'center',
        justifyContent:'center',
        position:'absolute',
        top:-4,
        left:-4
    }
})
