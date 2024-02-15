import { StyleSheet, Text } from "react-native";
import { Subtopic } from "../constants/Types";
import { RFPercentage } from "react-native-responsive-fontsize";
import { View } from "./Themed";
import OperationPanel from "./OperationPanel";

type SubTopicProps = {
    subTopic: Subtopic,
}

export default function SubTopic(props: SubTopicProps) {
    const { subTopic } = props;

    return(
        <View style={styles.container}>
            <Text style={styles.subTitle}>{subTopic.name}</Text>
            {subTopic.operations.map((val, index) => (
                <OperationPanel key={index} operation={val}/>
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "transpert",
        justifyContent: "center",
    },
    subTitle: {
        fontSize: RFPercentage(3),
        fontWeight: "900",
        textAlign: "center",
        color: "white",
    }
})