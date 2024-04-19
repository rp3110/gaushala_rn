import { Image, StyleSheet, Text, View } from "react-native";
import AppColors from "../utils/AppColors";
import { icAcountCircle, icCall, icEmailGray, icLocationPin, icRupee } from "../utils/AppImages";
import ButtonComponent from "./ButtonComponent";

function DonationComponent() {

    
const styleSheet = StyleSheet.create({
    main: {
        borderRadius: 15,
        borderWidth: 1,
        borderColor: AppColors.primaryBlueWithOpacity60,
        backgroundColor: AppColors.offWhiteColor,
        paddingVertical: 16,
        paddingHorizontal: 8
    },
    amountText: {
        color: AppColors.primaryBlue,
        fontSize: 20,
        fontWeight: "600"
    },
    paymentModeText: {
        color: AppColors.primaryGrey,
        fontSize: 13,
        fontWeight: "400"
    },
    subtitleText: {
        color: AppColors.primaryBlue,
        fontSize: 14,
        fontWeight: "500"
    },
    dateText: {
        color: AppColors.primaryBlue,
        fontSize: 13,
        fontWeight: "500"
    },
    amountRow: {
        flexDirection: "row",
        alignItems: "flex-end",
        justifyContent: "flex-start",
        height: 36

    },
    row: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    }
})

    return (
        <View style={styleSheet.main}>
            <View style={styleSheet.row}>
                <View style={styleSheet.amountRow}>
                    <Image source={icRupee} resizeMode="contain" style={{height: 25, width:25,}}/>
                    <Text style={styleSheet.amountText}>20000</Text>
                    <View style={{width: 8}} />
                    <Text style={styleSheet.paymentModeText}>cash</Text>
                </View>
                <ButtonComponent onTap={()=>{}} title="Generate Receipt" fontSize={14} height={36}/>
            </View>
            <View style={{height: 10}} />
            <View style={styleSheet.row}>
                <Text style={styleSheet.subtitleText}>
                    Donor Details
                </Text> 
                <Text style={styleSheet.dateText}>
                    20/7/2023 Tuesday
                </Text>
            </View>
            <View style={{height: 2}}/>
            <View style={styleSheet.row}>
                <DetailComponent icon={icAcountCircle} title={"Rutu Hirapara"} />
                <DetailComponent icon={icLocationPin} title={"Rutu Hirapara"} />
            </View>
              <View style={styleSheet.row}>
                <DetailComponent icon={icCall} title={"Rutu Hirapara"} />
                <DetailComponent icon={icEmailGray} title={"Rutu Hirapara"} />
            </View>
            <View style={{height: 10}}/>
            <View style={[styleSheet.row, {justifyContent:"flex-start"}]}>
                <Text style={styleSheet.subtitleText}>
                    Mediator Details
                </Text> 
            </View>
            <View style={{height: 2}}/>
            <View style={styleSheet.row}>
                <DetailComponent icon={icAcountCircle} title={"Rutu Hirapara"} />
                <DetailComponent icon={icLocationPin} title={"Rutu Hirapara"} />
            </View>
              <View style={styleSheet.row}>
                <DetailComponent icon={icCall} title={"Rutu Hirapara"} />
                <DetailComponent icon={icEmailGray} title={"Rutu Hirapara"} />
            </View>
        </View>
    )
}


function DetailComponent(props:{icon: any, title: string}) {
    return (
        <View style={detailComponetStyle.main}>
            <Image style={detailComponetStyle.image} source={props.icon} resizeMode="cover"/>
            <View style={{width: 8}}/>
            <Text style={detailComponetStyle.titleText}>Rutu Hirapara</Text>
        </View>
    )
}

const detailComponetStyle = StyleSheet.create({
    main: {
        flexDirection: "row",
        justifyContent: "flex-start",
        width: "45%"
    },
    titleText: {
        color: AppColors.grayColor,
        fontSize: 14,
        fontWeight: "400"
    },
    image: {
        height: 18,
        width: 18
    }
})

export default DonationComponent