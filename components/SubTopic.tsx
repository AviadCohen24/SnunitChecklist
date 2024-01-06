import { StyleSheet, Text } from "react-native";
import { Subtopic } from "../constants/Types";
import { RFPercentage } from "react-native-responsive-fontsize";
import { View } from "./Themed";
import OperationStack from "./Operation";

type SubTopicProps = {
    subTopic: Subtopic,
}

export default function SubTopic(props: SubTopicProps) {
    const { subTopic } = props;

    return(
        <View style={styles.container}>
            <Text style={styles.subTitle}>{subTopic.name}</Text>
            {subTopic.operations.map((val, index) => (
                <OperationStack key={index} operation={val} />
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "transpert",
        justifyContent: "center"
    },
    subTitle: {
        fontSize: RFPercentage(2.5),
        fontWeight: "700",
        textAlign: "center"
    }
})