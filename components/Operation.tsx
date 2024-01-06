import { StyleSheet, Text } from "react-native";
import { Operation } from "../constants/Types";
import { RFPercentage } from "react-native-responsive-fontsize";
import { View } from "./Themed";

type OperationProps = {
    operation: Operation,
}

export default function OperationStack(props: OperationProps) {
    const { operation } = props;

    return(
        <View style={styles.container}>
            { operation.operationName && <Text style={styles.operationName}>{operation.operationName}</Text> }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "transpert",
        justifyContent: "center"
    },
    operationName: {
        fontSize: RFPercentage(2),
        fontWeight: "600",
        textAlign: "right",
        paddingRight: 15
    }
})