import React from 'react';
import {View, Text, TouchableOpacity, Image, TextInput} from 'react-native';
import {AppColors} from '../theme/appColors';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ArrowLeftIcon} from 'react-native-heroicons/solid';
import {useNavigation} from '@react-navigation/native';

export default function SignUpScreen() {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, backgroundColor: AppColors.primary}}>
      <SafeAreaView style={{flex: 1}}>
        <View>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{
              backgroundColor: AppColors.signupButton,
              borderRadius: 50,
              width: 35,
              marginLeft: 10,
              padding: 2,
            }}>
            <ArrowLeftIcon color={AppColors.secondary} size={30} />
          </TouchableOpacity>
        </View>
        <View>
          <Image
            style={{width: 200, height: 200, alignSelf: 'center'}}
            source={require('../assets/images/signup.png')}
          />
        </View>
      </SafeAreaView>
      <View
        style={{
          flex: 2.2,
          backgroundColor: AppColors.secondary,
          padding: 30,
          borderRadius: 50,
        }}>
        <View>
          <Text style={{color: AppColors.text, fontWeight: 'bold'}}>
            Full Name
          </Text>
          <TextInput
            placeholder="Enter Name"
            value="john@gmail.com"
            style={{backgroundColor: AppColors.input, padding : 15, borderRadius : 50, margin: 5}}
          />
          <Text style={{color: AppColors.text, fontWeight: 'bold'}}>
            Email Address
          </Text>
          <TextInput
            placeholder="Enter Email"
            value="john@gmail.com"
            style={{backgroundColor: AppColors.input, padding : 15, borderRadius : 50, margin: 5}}
          />
          <Text style={{color: AppColors.text, fontWeight: 'bold'}}>Password</Text>
          <TextInput
            placeholder="Enter Email"
            value="john1234"
            secureTextEntry
            style={{backgroundColor: AppColors.input, padding : 15, borderRadius : 50,margin: 5}}
          />
          <TouchableOpacity style={{backgroundColor: AppColors.signupButton, marginLeft: 4, borderRadius : 50, margin : 20}}>
            <Text style={{color : AppColors.secondary, textAlign : "center", margin : 10, fontWeight : "bold", fontSize : 20}}>Sign Up</Text>
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
            Already have an account?
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style={{color: AppColors.primary, marginLeft: 4}}>
                Log In
              </Text>
            </TouchableOpacity>
          </View>
      </View>
    </View>
  );
}
