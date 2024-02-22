import React, { useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";

function LoginScreen(): JSX.Element{

     const [email,setEmail]=useState("");
     const [password,setPassword]=useState("");

     function login(){
         const dados={
            email:email,
            password:password
         }
         console.log(dados);
     }
     return(
        <View style={styles.container}>
     

     <View>

     </View>
       <Text style={styles.title}>Entrar no Spotiy</Text>

      <View>
      <Text style={styles.title}>E-mail ou nome de usuario</Text>
    <TextInput style ={styles.input} placeholder="E-mail"
     placeholderTextColor="#151413" onChangeText={(textEmail)=>setEmail(textEmail)}/>
      </View>

        </View>

        
     );

}
 const styles =StyleSheet.create({
    container:{

        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#121212'
    },
    title:{
marginTop:-450,
fontSize:30,
color:'white',

    },
 })
export default LoginScreen;