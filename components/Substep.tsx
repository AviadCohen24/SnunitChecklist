import { StyleSheet, Text, View } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

type SubstepProps = {
    subStepName: string; 
    details: string;
    parentIndex: number;
    index: number;
}

export default function Substep(props: SubstepProps) {
    const { subStepName, details, parentIndex, index } = props;
    const char = `${String.fromCharCode(80)}`; 
    console.log('hebrew', char);
    return(
        <View style={styles.container}>
            <Text style={styles.subStep}>{parentIndex + 1}.{index + 1}</Text>
            <Text style={styles.subStep}>  {subStepName}</Text>
            <Text style={styles.subStepDescription}>  -  {details}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        backgroundColor: "transpert",
        verticalAlign: "middle",
        direction: "rtl",
        paddingLeft: 85,
        marginTop: 7,
    },
    subStep: {
        fontSize: RFPercentage(1.7),
        fontWeight: "600",
        textAlign: "right",
    },
    subStepDescription: {
        fontSize: RFPercentage(1.7),
        textAlign: "right",
    }
})