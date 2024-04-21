import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AppColors } from '../theme/appColors';
import { signOut } from 'firebase/auth';
import { auth } from '../config/firebase';

export default function HomeScreen() {
  const handleLogout = async  () => {
    await signOut(auth)
  } 
  return (
    <SafeAreaView style={{flex : 1, flexDirection : "column", justifyContent : "center", alignItems:  "center", gap : 10}}>
      <Text style={{fontSize: 40}}>Welcome!</Text>
      <TouchableOpacity 
      onPress={handleLogout}
      style={{padding :15, backgroundColor : AppColors.signupButton, borderRadius : 50}}>
        <Text style={{color: AppColors.secondary, fontWeight : "bold"}}>Log Out</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
