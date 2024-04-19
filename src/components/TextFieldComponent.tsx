import { Image, KeyboardTypeOptions, ScrollView, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from "react-native";
import AppColors from "../utils/AppColors";
import { useState } from "react";
import { icLock, icUnlock } from "../utils/AppImages";


export default function TextFieldComponent(
    props: {
        title: string,
        isRequired?: boolean,
        placeholder?: string,
        obsecure?: boolean,
        onChange: ((text: string) => void)
        keyboardType?: KeyboardTypeOptions | undefined
        autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters' | undefined;
    }) {

    const required = props.isRequired ?? true;
    const [isFocused, setFocus] = useState(false)
    const [showPassword, setShowPassword] = useState(true)



    const styleSheet = StyleSheet.create({
        main: {
            flexDirection: "column",
            alignItems: "flex-start",
            width: "100%"
        },
        titleRow: {
            flexDirection: 'row',
            justifyContent: "flex-start"
        },
        textFieldStyle: {
            flexDirection: "row",
            width: "100%",
            alignItems: "center",
            borderColor: isFocused ? AppColors.primaryBlue : AppColors.primaryGrey,
            borderRadius: 8,
            borderWidth: 1,
            paddingHorizontal: 16,
            backgroundColor: AppColors.secondaryWhite
        },
        inputStyle: {
            flex: 1
        },
        titleTextStyle: {
            color: AppColors.primaryBlue,
            fontSize: 13,
            marginBottom: 12
        },
        titleStarStyle: {
            color: AppColors.primaryRed
        },
        obsIconStyle: {
            height: 24,
            width: 24
        },
        textFieldRowStyle: {
            flexDirection: "row"
        }
    })



    return (
        <View style={styleSheet.main}>
            <View style={styleSheet.titleRow}>
                <Text style={styleSheet.titleTextStyle}>{props.title}</Text>
                {required ? <Text> *</Text> : <View />}
            </View>
            <View style={styleSheet.textFieldStyle}>
                <TextInput
                    style={styleSheet.inputStyle}
                    placeholder={props.placeholder}
                    keyboardType={props.keyboardType}
                    autoCapitalize={props.autoCapitalize}
                    onBlur={() => { setFocus(false) }}
                    onFocus={() => { setFocus(true) }}
                    secureTextEntry={props.obsecure == true ? showPassword : false}
                    onChangeText={(text) => props.onChange(text)}
                />
                <View style={{ width: props.obsecure == true ? 4 : 0 }} />

                {
                    props.obsecure == true
                        ? <TouchableWithoutFeedback onPress={() => {
                            setShowPassword(!showPassword)
                        }}>
                            <Image style={styleSheet.obsIconStyle} source={showPassword ? icLock : icUnlock} />
                        </TouchableWithoutFeedback>
                        : <View />
                }
            </View>
        </View>
    )

}
