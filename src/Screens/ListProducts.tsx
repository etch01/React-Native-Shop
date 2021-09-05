import React,{useState} from 'react'
import { StyleSheet, View, Dimensions ,FlatList, SafeAreaView } from 'react-native';
import {images} from '../Assets/index';
import { colors } from '../Constants/colors';
import {Item} from '../Models/products';
import Header from '../Components/header';
import CardItem from '../Components/itemCard';

const { width, height } = Dimensions.get('window');

interface selfProps{
    navigation?: any;
}

const test: React.FC<selfProps> = (props:selfProps) => {
    const [products,setProducts] = useState<Array<Item>>([
        {
            id:1,
            image: images.thumbnail,
            name: 'Peppironi Pizza Large',
            desc: 'Pizza, dish of Italian origin consisting of a flattened disk of bread dough Pizza, dish of Italian origin consisting of a flattened disk of bread dough Pizza, dish of Italian origin consisting of a flattened disk of bread dough',
            price: 88,
            quantity:1,
        },
        {
            id:2,
            image: images.thumbnail1,
            name: 'Cheese Pizza Large',
            desc: 'Consisting of a flattened disk of bread dough, Pizza, dish of Italian origin Pizza, dish of Italian origin consisting of a flattened disk of bread dough Pizza, dish of Italian origin consisting of a flattened disk of bread dough',
            price: 91,
            quantity:1,
        },
        {
            id:3,
            image: images.thumbnail2,
            name: 'Margheta Pizza Large',
            desc: 'Pizza, dish of Italian origin consisting of a flattened disk of bread dough Pizza, dish of Italian origin consisting of a flattened disk of bread dough',
            price: 76,
            quantity:1,
        },
        {
            id:4,
            image: images.thumbnail3,
            name: 'Diavola Pizza Large',
            desc: 'Pizza, dish of Italian origin consisting of a flattened disk of bread dough ',
            price: 95,
            quantity:1,
        },
        {
            id:5,
            image: images.thumbnail4,
            name: 'Mushroom Pizza Large',
            desc: 'Pizza, dish of Italian origin consisting of a flattened disk of bread dough Pizza, dish of Italian origin consisting of a flattened disk of bread dough',
            price: 80,
            quantity:1,
        },
    ]);

    const _keyExtractor = (item:Item, index:Number) => item.id.toString();

    return (
        <View style={styles.container}>
            <SafeAreaView style={{flex:1}}>
                <Header title='Products' navigation={props.navigation} titleStyle={styles.headerTitle}/>
                <FlatList  
                    data={products}  
                    renderItem={({item}) =>{
                     return <CardItem navigation={props.navigation} id={item.id} name={item.name} image={item.image} desc={item.desc} price={item.price} quantity={item.quantity}/>
                    }}
                    keyExtractor={_keyExtractor}
                    style={{flex: 1}}
                />  
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
    }
})
