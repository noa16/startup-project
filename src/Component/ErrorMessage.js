import React from "react"
import {
  View,
  Text,
  TextInput,
  Alert,
StyleSheet,
} from "react-native";


const ErrorMessage = (props)=>{

  const {errorMessage} = props

  

  return(
      <View>
          <Text style={styles.errorMsg}><Text>{errorMessage}</Text></Text>

      </View>
  )


}

const styles = StyleSheet.create({
    errorMsg:{
        color:'red'

    }

})

export default ErrorMessage