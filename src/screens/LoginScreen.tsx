import React, { useEffect, useState } from 'react'
import { ActivityIndicator, Dimensions, Image, ScrollView, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import AppColors from '../utils/AppColors'
import { icAppLogo } from '../utils/AppImages'
import AppStrings from '../utils/AppStrings'
import TextFieldComponent from '../components/TextFieldComponent'
import ButtonComponent from '../components/ButtonComponent'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../redux/store/store'
import { attemptLogin } from '../redux/reducers/loginSlice'
import { IndecatorComponent } from '../components/IndecatorComponent'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../App'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { AsyncStorageKeys } from '../utils/AsyncStorageKey'
import { autoLoginThunk } from '../redux/reducers/autoLoginSlice'


type NativeStackProps = NativeStackScreenProps<RootStackParamList, "login">

export function LoginScreen({ navigation }: NativeStackProps) {
    const dispatch = useDispatch<AppDispatch>()
    const selector = useSelector((state: RootState) => state.loginSlice)
    const autoLoginSelector = useSelector((state: RootState) => state.autoLoginSlice)
    const [emailValue, setEmailValue] = useState("")
    const [passwordValue, setPasswordValue] = useState("")
    const [errorMessage, setErrorMessage] = useState("")

    useEffect(() => {
        if (selector.isSuccess) {

        }
    }, [selector])
    
    
    useEffect(() => {
        if (autoLoginSelector.currentState = 'success') {
            
            // navigation.navigate("homeScreen")
        }
    }, [selector]) 
    
    useEffect(() => {
        checkLogin()
    }, [])

    async function checkLogin() {
        
        if(await AsyncStorage.getItem(AsyncStorageKeys.isLogin) == "true") {
            dispatch(autoLoginThunk())
        }
    }

    return (
        <ScrollView style={{ flex: 1, backgroundColor: AppColors.defaultWhite }}
            keyboardShouldPersistTaps='handled'>
            <View style={styleSheet.main}>
                <Image source={icAppLogo} style={styleSheet.imageStyle} resizeMode='contain' ></Image>
                <Text style={styleSheet.titleStyle}>{AppStrings.login}</Text>
                <TextFieldComponent
                    title={AppStrings.email}
                    placeholder={AppStrings.emailPlaceHolder}
                    isRequired={true}
                    keyboardType='email-address'
                    autoCapitalize='none'
                    onChange={(value) => {
                        setEmailValue(value)
                    }} />
                <View style={{ height: 20 }} />
                <TextFieldComponent
                    title={AppStrings.password}
                    placeholder={AppStrings.passwordPlaceHolder}
                    isRequired={true}
                    onChange={(value) => {
                        setPasswordValue(value)
                    }}
                    obsecure={true}
                />
                <TouchableWithoutFeedback onPress={() => {
                    navigation.push('forgotPassword')
                }}>
                    <View style={styleSheet.row}>
                        <Text style={styleSheet.forgotPassStyle}>{AppStrings.forgotPass}</Text>
                    </View>
                </TouchableWithoutFeedback>
                <View style={{width: "100%", height: 48}}>
                <ButtonComponent onTap={() => {
                    if (emailValue.trim() === "" || passwordValue.trim() === "") {
                        setErrorMessage("You missed something")
                    } else {
                        setErrorMessage("")
                        dispatch(attemptLogin({ email: emailValue, password: passwordValue }))
                    }
                }} title={AppStrings.loginButton} />
                </View>
         
                <Text style={styleSheet.errorMessageStyle}>{errorMessage}</Text>
            </View>
            <IndecatorComponent isVisible={selector.isLoading || autoLoginSelector.currentState == "loading"} />
        </ScrollView>
    )
}

const styleSheet = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: AppColors.defaultWhite,
        padding: 16,
        alignItems: 'center',
        justifyContent: "flex-start",
        height: Dimensions.get("window").height
    },
    imageStyle: {
        marginTop: 68,
        height: 167,
        width: 128,
        marginBottom: 42
    },
    titleStyle: {
        color: AppColors.primaryBlue,
        fontSize: 24,
        fontWeight: "700",
        marginBottom: 18
    },
    forgotPassStyle: {
        color: AppColors.secondaryBlue,
        fontWeight: '400'
    },
    row: {
        marginTop: 16,
        marginBottom: 32,
        width: "100%",
        flexDirection: "row",
        justifyContent: "flex-end"
    },
    errorMessageStyle: {
        marginTop: 10,
        color: AppColors.primaryRed,
        fontSize: 12
    }
})

export default LoginScreen
