import React,{useState,Component} from "react"
import Input from "../UI/Input"
import ButtonStyle from '../UI/ButtonStyle'
import {ValidationLogic} from '../Logic/ValidationLogic'
import ErrorMessage from '../Component/ErrorMessage' 
import {
  View,
  CheckBox,
  Text,
  TextInput,
  Alert,
StyleSheet,
Image
} from "react-native";

const Login = (props)=>{


    const [state, setState] = useState({ FirstName: "", LastName: "" ,City:""});
    const [errorMessage,setErrorMessage] = useState('')
    const [checkBox,setCheckbox] = useState(false)
    const handleSubmit=()=>{
        const msg =  ValidationLogic(state.firstName,state.LastName,state.City,checkBox)
        setErrorMessage(msg.msg)
       
    }

    const setStateFromInputField=async(inputTxt,inputField)=>{
               await  setState({...state,[inputField]:inputTxt});
               await console.log(state.FirstName) 
    }

    const checkboxTest=()=>{
        setCheckbox(!checkBox)
    }

    const placeholders = ["FirstName","LastName","City","Contact"]
    return(
        <View>
            <View>
                <Image style={styles.img} source={require('../images/RUS.jpg')}></Image>

            </View>
          
          {placeholders.map((item)=>{
              
              return(
                   <Input placeholder={item}
                    setStateFromInputField={setStateFromInputField}/>
              )
          })}
         
              
          <CheckBox style={styles.checkboxContainer} value={checkBox} onChange={()=>checkboxTest()}/>
          <Text>Are you confirm the Term?</Text>
          <ButtonStyle title={"submit"} handleSubmit={handleSubmit}/>
          <ErrorMessage errorMessage={errorMessage}/>
           
        </View>
    )


}

const styles = StyleSheet.create({
    img:{
        height:170,
        marginRight:15
    },
    checkboxContainer:{
        marginTop:2
     


    }
})

export default Login

