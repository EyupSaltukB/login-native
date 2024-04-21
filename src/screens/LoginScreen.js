import React, { useState } from 'react';
import {View, Text, TouchableOpacity, Image, TextInput} from 'react-native';
import {AppColors} from '../theme/appColors';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ArrowLeftIcon} from 'react-native-heroicons/solid';
import {useNavigation} from '@react-navigation/native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebase';

export default function LoginScreen() {
  const navigation = useNavigation()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    if (email && password){
      try {
        await signInWithEmailAndPassword(auth, email, password)
      } catch (err) {
        console.log("error", err.message)
      }
    }
  }
  return (
    <View style={{flex: 1, backgroundColor: AppColors.primary}}>
      <SafeAreaView style={{flex: 1}}>
        <View>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{
              backgroundColor: AppColors.third,
              borderRadius: 50,
              width: 35,
              marginLeft: 10,
              padding: 2,
            }}>
            <ArrowLeftIcon color={AppColors.primary} size={30} />
          </TouchableOpacity>
        </View>
        <View>
          <Image
            style={{width: 300, height: 300, alignSelf: 'center'}}
            source={require('../assets/images/loginform.png')}
          />
        </View>
      </SafeAreaView>
      <View
        style={{
          flex: 1.3,
          backgroundColor: AppColors.secondary,
          padding: 30,
          borderRadius: 50,
        }}>
        <View>
          <Text style={{color: AppColors.text, fontWeight: 'bold'}}>
            Email Address
          </Text>
          <TextInput
            placeholder="Enter Email"
            value={email}
            onChangeText={value => setEmail(value)}
            style={{backgroundColor: AppColors.input, padding : 15, borderRadius : 50, margin: 5}}
          />
          <Text style={{color: AppColors.text, fontWeight: 'bold'}}>Password</Text>
          <TextInput
            placeholder="Enter Email"
            value={password}
            onChangeText={value => setPassword(value)}
            secureTextEntry
            style={{backgroundColor: AppColors.input, padding : 15, borderRadius : 50,margin: 5}}
          />
          <TouchableOpacity>
            <Text style={{color : AppColors.text, alignSelf : "flex-end"}}>Forgot Password?</Text>
          </TouchableOpacity>
          <TouchableOpacity 
          onPress={handleSubmit}
          style={{backgroundColor: AppColors.third, marginLeft: 4, borderRadius : 50, margin : 20}}>
            <Text style={{textAlign : "center", margin : 10, fontWeight : "bold", fontSize : 20}}>Login</Text>
          </TouchableOpacity>
        </View>
        <Text style={{textAlign : "center", fontSize : 20, fontWeight : "700"}}>or</Text>
        <View style={{flexDirection : "row", justifyContent : "center", gap : 20}}>
            <TouchableOpacity>
                <Image 
                style={{width: 50, height: 50, alignSelf: "center", backgroundColor : AppColors.input, borderRadius : 50, marginTop : 10}}
                source={require("../assets/images/google.png")}/>
            </TouchableOpacity>
            <TouchableOpacity>
                <Image 
                style={{width: 50, height: 50, alignSelf: "center", backgroundColor : AppColors.input, borderRadius : 50, marginTop : 10}}
                source={require("../assets/images/apple.png")}/>
            </TouchableOpacity>
            <TouchableOpacity>
                <Image 
                style={{width: 50, height: 50, alignSelf: "center", backgroundColor : AppColors.input, borderRadius : 50, marginTop : 10}}
                source={require("../assets/images/facebook.png")}/>
            </TouchableOpacity>
        </View>
        <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              marginTop: 20,
            }}>
            <Text style={{color: AppColors.text}}>
              Don't have an account?
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
              <Text style={{color: AppColors.primary, marginLeft: 4}}>
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>
      </View>
    </View>
  );
}
