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
ImageBackground,
Image 
} from "react-native";

const Login = (props)=>{


    const [state, setState] = useState({ שם: "", שםמשפחה: "" ,עיר:""});
    const [errorMessage,setErrorMessage] = useState('')
    const [checkBox,setCheckbox] = useState(false)
    const handleSubmit=()=>{
        const msg =  ValidationLogic(state.שם,state.שםמשפחה,state.עיר,checkBox)
        console.log(state.שםמשפחה)
        setErrorMessage(msg.msg)
       
    }

    const setStateFromInputField=async(inputTxt,inputField)=>{
               await  setState({...state,[inputField]:inputTxt});
               await console.log(state.FirstName) 
    }

    const checkboxTest=()=>{
        setCheckbox(!checkBox)
    }
    const fieldNames = ["שם","שםמשפחה","עיר","איש קשר"]
    return(
        <View>
         <View style={styles.containerLogin}>
           <Image style={styles.img} source={require('../images/titleRUS.jpg')}></Image>
            <ImageBackground  style={styles.imgBack} >       
             {fieldNames.map((item)=>{
              
              return(
                   <Input fieldName={item}
                    setStateFromInputField={setStateFromInputField}/>
              )
          })}
          <View style={styles.container}>
               <CheckBox style={styles.checkboxContainer} value={checkBox} onChange={()=>checkboxTest()}/>
              <Text style={styles.txt}> הנני מאשרת גישה לסמס ווטצאפ שיחות והודעות במכשיר זה</Text>
          </View>  
          <ButtonStyle title={"אישור"} handleSubmit={handleSubmit}/>
          <ErrorMessage errorMessage={errorMessage}/>

                    
            </ImageBackground >

            </View>
         
           
        </View>
    )


}

const styles = StyleSheet.create({
    imgBack:{
        height:700,
        width:400
    },
    checkboxContainer:{
        marginTop:25
    },
    container:{
        display:'flex',
        flexDirection:'row'
    },
    txt:{
        marginTop:30,
        color:'white'
    },
    title:{
        width:500
    },
    containerLogin:{
        backgroundColor:'#71da71'
    },
    img:{
        marginLeft:70,
        height:50,
        width:250
    }
})

export default Login

