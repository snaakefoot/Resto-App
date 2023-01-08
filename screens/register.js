import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, TextInput, View, Button,Keyboard, TouchableOpacity, ScrollView } from 'react-native';
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import SelectDropdown from 'react-native-select-dropdown'
import Ionicons from "react-native-vector-icons/Ionicons"
import { useState } from 'react';


export default function Register({navigation}) {
  
const [IsSecureEntry,setIsSecure]=useState(true);
const [IsSecureEntry2,setIsSecure2]=useState(true);
const type = ["Student", "Worker"]
const pressHandler=() =>{
  navigation.goBack();
}

  return (

    <ScrollView>
      <SafeAreaView style={{flex:1 , justifyContent : "center",flexDirection: "column"}}>

      <View style={{paddingHorizontal:25}}>
        <View style={styles.container}>
          <Text style={{fontSize:28, marginTop:40}}>Create Account </Text>
        </View>

                         {/* Full name Section */}
        <View style={{ flexDirection:"row", borderBottomColor:"#ccc",borderBottomWidth:1,marginTop:80,marginBottom:20}}>
          <TextInput 
           placeholder='  Full name' 
          style={{flex:1}}/>
          <MaterialIcons name='account-circle' size={20} color="#666" style={{marginLeft:20}}/>
          <StatusBar style="auto" />
        </View>
        
                         {/* Email address section */}
        <View style={{ flexDirection:"row", borderBottomColor:"#ccc",borderBottomWidth:1,marginTop:20,marginBottom:20}}>
          <TextInput 
           placeholder='  Email Address' 
          style={{flex:1}}/>
          <MaterialIcons name='alternate-email' size={20} color="#666" style={{marginLeft:20}}/>
          <StatusBar style="auto" />
        </View>
                       {/* Phone Number section*/}
        <View style={{ flexDirection:"row", borderBottomColor:"#ccc",borderBottomWidth:1,marginTop:20,marginBottom:20}}>
          <TextInput 
           placeholder='  Phone Number' 
          style={{flex:1}}/>
          <MaterialIcons name='phone' size={20} color="#666" style={{marginLeft:20}}/>
        </View>
                        {/* Password Section */}
        <View style={{ flexDirection:"row", borderBottomColor:"#ccc",borderBottomWidth:1,marginTop:20,marginBottom:20}}>
          <TextInput 
             placeholder='  Password' 
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
                            {/* Confirm password section */}
      <View style={{ flexDirection:"row", borderBottomColor:"#ccc",borderBottomWidth:1,marginTop:20,marginBottom:20}}>
          <TextInput 
             placeholder='  Confirm Password' 
             style={{flex:1}}
             secureTextEntry={IsSecureEntry2}/>
 
            <TouchableOpacity onPress={()=>{
                setIsSecure2((prev) => !prev);
              }}>
              <Text style={{color:'#666'}}>
                {IsSecureEntry2 ? "Show" : "Hide"}
              </Text>
            </TouchableOpacity>
            <Ionicons name='checkmark-circle' size={20} color="#666" style={{marginLeft:20}}/>
          <StatusBar style="auto" />
      </View>
      <SelectDropdown
	          data={type}
	          onSelect={(selectedItem, index) => {
		            console.log(selectedItem, index)
	        }}
      />
                            {/* Create account button */}
      <TouchableOpacity style={{
        paddingVertical:20,
        marginTop:30,
        backgroundColor:"#E93C49",
        borderRadius:10,
        }}>
        <Text style={{color:"#fff",textAlign:"center"}}> Create Account</Text>
      </TouchableOpacity>

    </View>
                                {/* Already have an account ? */}



          <TouchableOpacity onPress={pressHandler} style={{flexDirection:'row',justifyContent:'flex-end',alignSelf: 'center',position:"relative",marginTop:20}}>
  
   <Text style={{color:"#666"}}> Already have an account?</Text>
   <Text style={{fontWeight:'700',color:"#E93C49"}}>  Login </Text>
 </TouchableOpacity>
     
      </SafeAreaView>
    </ScrollView>
   

  );
}

const styles = StyleSheet.create({
  container: {
  
   
    alignItems: 'center',
   
    

    
  },
});
