import { StatusBar } from 'expo-status-bar';
import { KeyboardAvoidingView,SafeAreaView, StyleSheet, Text, TextInput, View, Button, TouchableOpacity, Platform,ScrollView } from 'react-native';
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import Ionicons from "react-native-vector-icons/Ionicons"
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';


export default function Login({navigation}) {

const pressHandler=() =>{
  navigation.navigate('Register');
}
const [IsSecureEntry,setIsSecure]=useState(true);
const [email,SetEmail]=useState('')
const [password,SetPassword]=useState('')
const behavior=Platform.OS === "ios" ? "position" : "";

  return (
    <ScrollView>
    <SafeAreaView style={{flex:1 , justifyContent : "center",flexDirection: "column"}}>

      <View style={{paddingHorizontal:25}}>
        <View style={{marginTop:50,alignItems: 'center'}}>
          <Text style={{fontSize:28}}>Proceed with your </Text>
          <Text style={{fontWeight: "bold"}}>Login !  </Text>
        </View>

      <View style={{ flexDirection:"row", borderBottomColor:"#ccc",borderBottomWidth:1,marginTop:80}}>
        <TextInput 
          placeholder='  Email IDs' 
          value={email}
          onChangeText={text=>SetEmail(text)}
          style={{flex:1}}/>
          <MaterialIcons name='alternate-email' size={20} color="#666" style={{marginLeft:20}}/>

          <StatusBar style="auto" />
      </View>

    <View style={{ flexDirection:"row", borderBottomColor:"#ccc",borderBottomWidth:1,marginTop:20}}>
      <TextInput 
        placeholder='  Password' 
        value={password}
        onChangeText={text=>SetPassword(text)}
        style={{flex:1}}

        secureTextEntry={IsSecureEntry}/>
 
      <TouchableOpacity onPress={()=>{
        setIsSecure((prev) => !prev);
      }}>
        <Text style={{color:'#666'}}>
          {IsSecureEntry ? "Show" : "Hide"}
        </Text>
      </TouchableOpacity>
      <Ionicons name='ios-lock-closed-outline' size={20} color="#666" style={{marginLeft:20}}/>
      <StatusBar style="auto" />

    </View>
    <TouchableOpacity  style={{
        paddingVertical:20,
        marginTop:40,
        backgroundColor:"#E93C49",
        borderRadius:10,
        
      }}>

        <Text style={{color:"#fff",textAlign:"center"}}> Login</Text>
      </TouchableOpacity>
      <TouchableOpacity>
      <Text style={{textDecorationLine: 'underline', color:"#666",textAlign:"center",marginTop:10}}>Forgot Password?</Text>
      
      </TouchableOpacity>
      <TouchableOpacity onPress={pressHandler} style={{flexDirection:'row',justifyContent:'flex-end',alignSelf: 'center',position:"relative",marginTop:30}}>
   
   <Text style={{color:"#666"}}> New to the App?</Text>
   <Text style={{fontWeight:'700',color:"#E93C49",}}>  Register </Text>
  </TouchableOpacity>
    </View>

    </SafeAreaView>
    </ScrollView>
   

 
  );
}

const styles = StyleSheet.create({
  container: {
  
    
    alignItems: 'center',
    
  },
});
