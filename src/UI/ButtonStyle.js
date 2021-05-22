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
    marginRight:40,
    marginLeft:40,
   marginTop:10,
    paddingTop:10,
    paddingBottom:10,
    backgroundColor:'#1E6738',
    color:'green',
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#fff'
    
       
       
    },
    txt: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
    textAlign:'center'
  },
  

})




export default ButtonStyle