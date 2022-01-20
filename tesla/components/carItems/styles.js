import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({

    carContainer:{
        width:"100%",
        // height:Dimensions.get('window').height,
        height:"100vh",
        resizeMode:"contain",
      },
      titles:{
        marginTop:"30%",
        alignItems:"center",
        width:"100%",
      },
      title:{
        fontSize:40,
        fontWeight:500,
      },
      subtitle:{
        fontSize:16,
        color:"#5c5e62"
      },
      image:{
        width:"100%",
        height:"100%",
        position:"absolute",
      },
      buttoncontainer:{
        position:'absolute',
        bottom:50,
        width:"100%",
      },
      subtitleCta:{
        textDecorationLine:'underline',
        
      }
    
});

export default styles;