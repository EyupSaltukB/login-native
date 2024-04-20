import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {AppColors} from '../theme/appColors';
import {useNavigation} from '@react-navigation/native';

export default function WelcomeScreen() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: AppColors.primary}}>
      <View style={{flex: 1, justifyContent: 'space-around'}}>
        <Text
          style={{
            color: AppColors.secondary,
            textAlign: 'center',
            fontSize: 40,
            fontWeight: 'bold',
          }}>
          Let's Get Started!
        </Text>
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <Image
            source={require('../assets/images/log.png')}
            style={{width: 300, height: 300}}
          />
        </View>
        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate('SignUp')}
            style={{
              padding: 5,
              backgroundColor: AppColors.third,
              borderRadius: 50,
              marginHorizontal: 40,
            }}>
            <Text
              style={{
                textAlign: 'center',
                fontWeight: 'bold',
                fontSize: 20,
                margin: 5,
              }}>
              Sign Up
            </Text>
          </TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              marginTop: 20,
            }}>
            <Text style={{color: AppColors.secondary}}>
              Already have an account?
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style={{color: AppColors.third, marginLeft: 4}}>
                Log In
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
