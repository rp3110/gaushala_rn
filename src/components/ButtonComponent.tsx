import { Image, StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import AppColors from "../utils/AppColors";
import { icAddIcon } from "../utils/AppImages";
import { Double } from "react-native/Libraries/Types/CodegenTypes";

function ButtonComponent(props: {title: string, onTap: Function, hasAddIcon?: boolean, height?: Double, fontSize?: number}) {
    const addIcon = props.hasAddIcon ?? false 
    const height = props.height ?? 48 
    const fontSize = props.fontSize ?? 16 

    const styleSheet = StyleSheet.create({
        main:{
            flexDirection: "row",
            backgroundColor: AppColors.primaryBlue,
            borderRadius: 8,
            paddingHorizontal:16,
            height: height,
            justifyContent: "center",
            alignItems: "center"
        },
        textStyle: {
            color: AppColors.defaultWhite,
            fontWeight: "700",
            fontSize: fontSize
        },
    
    })

    return (
        <TouchableWithoutFeedback onPress={()=>props.onTap()} >
            <View style={styleSheet.main}>
                {addIcon ? <Image source={icAddIcon} resizeMode="center"></Image> : <></>}
            <Text style={styleSheet.textStyle}>{props.title}</Text>
            </View>
        </TouchableWithoutFeedback>
    )
}



export default ButtonComponent