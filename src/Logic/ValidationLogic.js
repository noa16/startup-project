import React,{useCllback} from 'react'
export const ValidationLogic = (fName,lName,city,checkBox)=>{

    if(fName===""||lName===""||city===""){
        return{
            msg:'All fields are required'}
    }
    if(checkBox===false){
        return{
            msg:'dont accept the term'
        }
    }
    return{
        msg:''
    }



}