import React from 'react'
import {
  View,
  Text,
  TextInput,
  Alert,
StyleSheet,
} from "react-native";
const Input=(props)=>{
    const {placeholder} =props;
    return(
        <View style={styles.inputContainer}>
            <TextInput
            placeholder={placeholder}
            onChangeText={(e)=>props.setStateFromInputField(e,placeholder)}
            style={styles.input}/>
        </View>
    )


}
  
const styles = StyleSheet.create({
input: {
    height: 40,
    margin: 12,
    borderBottomWidth: 1,
    borderRadius:0.2,
    borderStyle: 'solid',
    borderColor: 'green'

  },
  inputContainer:{
      marginTop:4
  }

})




export default Input