import { ActivityIndicator, Dimensions, StyleSheet, View } from "react-native";
import AppColors from "../utils/AppColors";

export function IndecatorComponent(props:{isVisible: boolean}) {
    return (
        <>
        {props.isVisible ? <View style={styleSheet.indecatorStyle} ><ActivityIndicator size={50} /></View> : <></>}
        </>
    )
}


const styleSheet = StyleSheet.create({
    indecatorStyle: {
        flex: 1,
        position: "absolute",
        justifyContent: "center",
        backgroundColor: AppColors.primaryBlueWithOpacity,
        height: Dimensions.get("window").height,
        width: Dimensions.get("window").width
    }
})

