import React from "react";
import {View, Text, FlatList, Dimensions } from 'react-native';
import styles from "./styles";
import CarItem from "../carItems";
import cars from "./cars";

const Carlist = ({})=>{
    return (
        <View 
        // style={styles.container}
        >
        <FlatList
        // style={styles.container}
        data={cars}
        renderItem={({item})=> <CarItem car={item}/>}
        showsVerticalScrollIndicator={false}
        snapToAlignment={'start'}
        decelerationRate={'fast'}
        snapToInterval={Dimensions.get('window').height}
        />
        </View>
    //   <CarItem 
    //   name='Model X' 
    //   tagline='Order Online' 
    //   taglineCta="Touchless Delivery"
    //   image='ModelX.jpeg'
    // />
    )
}

export default Carlist