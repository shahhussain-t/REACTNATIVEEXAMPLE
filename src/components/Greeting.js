import { View, Text,TextInput, SafeAreaView, StyleSheet, StatusBar } from 'react-native'
import React, { useState } from 'react'


const Greeting = () => {
    const [message,setMessage]=useState("")

    
    const handlePress=()=>{
        setMessage(message)

    }

  return (

    <SafeAreaView style={styles.container}>


 
    <View>
     <TextInput
     style={styles.textInput}
     placeholder='Enter your name...'
    
     onChangeText={setMessage}
     />

     <Text>welcome,{message}</Text>
    </View>

    </SafeAreaView>
  )
}


const styles=StyleSheet.create({
    container:{
    
        marginTop:StatusBar.currentHeight,
        padding:10,
    
    },
    textInput:{
        borderColor: 'blue', 
        padding:5,
        borderWidth: 1,
        textAlign:'left',
        marginBottom:20
    }
})

export default Greeting
