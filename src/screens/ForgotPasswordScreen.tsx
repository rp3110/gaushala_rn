import { Dimensions, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import AppColors from '../utils/AppColors'
import { icAppLogo, icEmail } from '../utils/AppImages'
import AppStrings from '../utils/AppStrings'
import TextFieldComponent from '../components/TextFieldComponent'
import ButtonComponent from '../components/ButtonComponent'
import { AppMessage } from '../utils/AppMessages'
import { IndecatorComponent } from '../components/IndecatorComponent'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../redux/store/store'
import { useState } from 'react'
import { forgotPasswordThunk } from '../redux/reducers/forgotPasswordSlice'
import { RootStackParamList } from '../App'
import { NativeStackScreenProps } from '@react-navigation/native-stack'


type NativeStackProps = NativeStackScreenProps<RootStackParamList, "forgotPassword">

export function ForgotPasswordScreen({navigation}: NativeStackProps) {
    const dispatch = useDispatch<AppDispatch>()
    const selector = useSelector((state: RootState) => state.forgotPasswordSlice)
    const [email, setEmailValue] = useState("")
    const [error, setError] = useState("")

    return (
        <ScrollView style={{ flex: 1, backgroundColor: AppColors.defaultWhite }}
            keyboardShouldPersistTaps='handled'>
            <View style={styleSheet.main}>
                <Image source={icAppLogo} style={styleSheet.imageStyle} resizeMode='contain' ></Image>
                <Text style={styleSheet.titleStyle}>{AppStrings.forgotPassTitle}</Text>
                <TextFieldComponent
                    title={AppStrings.email}
                    autoCapitalize='none'
                    placeholder={AppStrings.emailPlaceHolder}
                    isRequired={true}
                    onChange={(value) => {
                        setEmailValue(value)
                    }} />
                <View style={{height: 30}}/>
                <ButtonComponent onTap={()=>{
                    if(email.trim() === "") {
                        setError("Please enter email")
                    } else {
                        setError("")
                dispatch(forgotPasswordThunk({email: email}))
                    }
                }} title={AppStrings.submitText} />
                <View style={{height: 10}}/>
                <Text style={styleSheet.errorMessageStyle}>{error}</Text>
                <View style={{height: 40}}/>
                <TempMailComponent/>
            </View>
        <IndecatorComponent isVisible={selector.currentstate == "loading"}/>
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

function TempMailComponent() {
    return (
        <View style={tempMailStyle.main}>
            <Image source={icEmail} style={tempMailStyle.imageStyle} />
            <View style={{width: 8}}/>
            <Text style={tempMailStyle.texStyle}>{AppMessage.tempMailMessage}</Text>
        </View>
    )
}

const tempMailStyle = StyleSheet.create({
    main: {
        backgroundColor: AppColors.secondaryGreen,
        borderRadius: 8,
        paddingVertical: 10,
        paddingHorizontal: 12,
        flexDirection: "row",
        alignItems: "center",
    },
    imageStyle: {
        height: 24,
        width: 24
    },
    texStyle: {
        color: AppColors.primaryOrange,
        fontSize: 14 
    }
})

export default ForgotPasswordScreen
