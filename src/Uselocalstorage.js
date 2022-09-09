import { useEffect,useState } from "react";

function getSavedvalue(key,initial_val){
    const saved_value = JSON.parse(localStorage.getItem(key));
    if(saved_value ){return saved_value}
    return initial_val
}




const UseLocalstorage = ( key ,initial_val) => {
    const [value,setvalue]= useState(()=>{
       return getSavedvalue(key,initial_val);
    })
useEffect(()=>{
    localStorage.setItem(key,JSON.stringify(value))
})
    
    return ( [value,setvalue] );
}
 
export default UseLocalstorage;