import { StyleSheet, Text } from "react-native";
import { Operation } from "../constants/Types";
import { RFPercentage } from "react-native-responsive-fontsize";
import { View } from "./Themed";
import OperationStep from "./OperationStep";

type OperationProps = {
    operation: Operation,
}

export default function OperationPanel(props: OperationProps) {
    const { operation } = props;

    return(
        <View style={styles.container}>
            {operation.operationName && <Text style={styles.operationName}>{operation.operationName}</Text>}
            {operation.steps.map((val, index) => (
              <OperationStep key={index} step={val} index={index}/>  
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "transpert",
        justifyContent: "center",
        marginBottom: 15
    },
    operationName: {
        fontSize: RFPercentage(2),
        fontWeight: "700",
        textAlign: "right",
        paddingRight: 15
    }
})