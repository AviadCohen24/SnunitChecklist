import { StyleSheet, Text } from "react-native";
import { StepDetail } from "../constants/Types";
import { RFPercentage } from "react-native-responsive-fontsize";
import { View } from "./Themed";
import Substep from "./Substep";

type OperationStepProps = {
    step: StepDetail,
    index: number
}

export default function OperationStep(props: OperationStepProps) {
    const { step, index } = props;

    return(
        <View style={styles.container}>
            <View style={styles.stepInfoContainer}>
                <Text style={styles.stepName}>.{index + 1} </Text>
                <Text style={styles.stepName}> {step.stepName} </Text>
                {step.details && <Text style={styles.stepDescription}>  -  {step.details}</Text>}
            </View>
            {step.subSteps && step.subSteps.map((val, subIndex) => (
                <Substep key={subIndex} subStepName={val.subStepName} 
                         details={val.details} index={subIndex} parentIndex={index}/>
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "transpert",
        justifyContent: "center"
    },
    stepInfoContainer: {
        flexDirection: "row",
        backgroundColor: "transpert",
        verticalAlign: "middle",
        direction: "rtl",
        paddingLeft: 35,
        marginTop: 7,
    },
    stepName: {
        fontSize: RFPercentage(2),
        fontWeight: "800",
        textAlign: "right",
        color: "white",
    },
    stepDescription: {
        fontSize: RFPercentage(1.7),
        fontWeight: "700",
        textAlign: "right",
        flexWrap: "wrap",
        color: "white",
    }
})