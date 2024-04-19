import Toast from "react-native-toast-message";

export function showToast({text}:{text: string}) {
    Toast.show({
        autoHide: true,
        text1: text,    
        bottomOffset: 0    
    })
}