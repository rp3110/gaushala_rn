import { StyleSheet, View } from "react-native";
import AppColors from "../utils/AppColors";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";
import AppBarComponent from "../components/AppBarComponent";
import { icFilter, icMenu } from "../utils/AppImages";
import AppStrings from "../utils/AppStrings";
import ButtonComponent from "../components/ButtonComponent";
import DonationComponent from "../components/DonationComponent";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store/store";
import { useEffect } from "react";
import { getDonationAsyncThunk } from "../redux/reducers/getDonationSlice";

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'homeScreen'>
function HomeScreen() {
    const dispatch = useDispatch<AppDispatch>()
    const selector = useSelector((state: RootState)=> state.getDonationSlice)

    useEffect(
        ()=>{
            dispatch(getDonationAsyncThunk({page: 1}))
        },[])

    return <View style={styleSheet.main}>
        <AppBarComponent
            onTapPrefixIcon={()=>{}}
            onTapSuffixIcon={()=>{}}
            title={AppStrings.collectedDonations}
            prerixImage={icMenu}
            suffixImage={icFilter}
        />
        <View style={styleSheet.container}>
        <ButtonComponent onTap={()=>{}} title={AppStrings.addDonation} hasAddIcon={true}/>
        <View style={{height: 10}}/>
        <DonationComponent />
        </View>
    </View>
}

const styleSheet = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: AppColors.defaultWhite
    },
    container: {
        padding: 16
    }
})

export default HomeScreen