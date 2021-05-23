import React from 'react'
import {
  View,
  Text,
  TextInput,
  Alert,
StyleSheet,
} from "react-native";
const Input=(props)=>{
    const {fieldName} =props;
    return(
        <View style={styles.inputContainer}>
            <Text style={styles.fieldName}>{fieldName}:</Text>
            <TextInput
            onChangeText={(e)=>props.setStateFromInputField(e,fieldName)}
            style={styles.input}/>
        </View>
    )


}
  
const styles = StyleSheet.create({
input: {
    height: 40,
    margin: 12,
    borderBottomWidth: 13,
    borderBottomColor:'white',
    borderRadius:0.2,
    borderStyle: 'solid',
    borderColor: 'green',
    width:220,
    
  

  },
  inputContainer:{
      marginTop:4,
      display:'flex',
      flexDirection:'row'
     
  },
  fieldName:{
      marginLeft:10,
      fontSize:20,
      color:'white',
      marginTop:30,
      
  }

})




export default Input