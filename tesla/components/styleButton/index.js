import React from "react";
import {View, Text, Pressable} from 'react-native';
import styles from "./styles";

const StyledButton = ({type,content,onPress})=>{

    const bg = type == "primary"?"#171A20CC":"#FFFFFFA6";

    const dynamicStyles = {
        color: type == "primary"?"#FFFFFF":"#171A28",
    }

    return (
        <View style={styles.container}>
            <Pressable
            style={[styles.button,{backgroundColor:bg}]}
            onPress={()=>{
                onPress()
            }}
            > 

            <Text style={[styles.text,dynamicStyles]}>{content}</Text>

            </Pressable>
        </View>
    )
}

export default StyledButton