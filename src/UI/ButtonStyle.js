import React from "react"
import {
  View,
  Text,
  TextInput,
  Button,
StyleSheet,
} from "react-native";

const ButtonStyle = (props)=>{
  const {title} = props
  return(
    <View style={styles.btnContainer}>
      <Text style={styles.txt}   onPress={props.handleSubmit}>{title}</Text>
    </View>
  )




}
const styles = StyleSheet.create({
    btnContainer:{
    backgroundColor:'white',
    marginLeft:270,
    marginTop:40,
    paddingTop:10,
    paddingBottom:10,
    color:'green',
    borderRadius:100,
    width:100,
    height:100,
    borderWidth: 1,
    borderColor: '#fff',
    position:'relative'
    
       
       
    },
    txt: {
    position:'absolute',
     marginTop:35,
     marginLeft:25,
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'grey',
    
    
  },
  

})




export default ButtonStyle