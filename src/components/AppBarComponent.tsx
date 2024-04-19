import { Image, StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import AppColors from "../utils/AppColors";

function AppBarComponent(
    props: {
        prerixImage?: any,
        title: string,
        suffixImage?: any,
        onTapSuffixIcon: Function,
        onTapPrefixIcon: Function
    }) {
    return (
        <View style={styleSheet.main}>
            {
                props.prerixImage != null
                    ? <TouchableWithoutFeedback style={styleSheet.iconContainer}>
                        <Image source={props.prerixImage} height={30} width={30} resizeMode="center" />
                      </TouchableWithoutFeedback>
                    : <View style={styleSheet.iconContainer}/>
            }
            <Text style={styleSheet.titleStyle}>{props.title}</Text>
            {
                props.suffixImage != null
                    ? <TouchableWithoutFeedback style={styleSheet.iconContainer}>
                        <Image source={props.suffixImage} height={30} width={30} resizeMode="center"/>
                      </TouchableWithoutFeedback>
                    : <View style={styleSheet.iconContainer} />
            }
        </View>
    )
}

const styleSheet = StyleSheet.create({
    main: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: AppColors.defaultWhite,
        height: 56,
        shadowColor: AppColors.primaryBlueWithOpacity, // Slightly bluish shadow
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 1,
        shadowRadius: 5,
        elevation: 10 
    },
    titleStyle: {
        color: AppColors.primaryBlue,
        fontSize: 18,
        fontWeight: "600"
    },
    iconContainer: {
        height: 30,
        width: 30,
        alignContent: "center"
    }
})

export default AppBarComponent