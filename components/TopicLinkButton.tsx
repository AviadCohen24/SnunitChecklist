import { View, Text, StyleSheet } from "react-native";

export type TopicLinkProps = {
    topicName: string
};

export default function TopicLinkButton({ topicName }: TopicLinkProps) {
    <View style={styles.container}>
        <Text>{topicName}</Text>
    </View>
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#4a2b2b47'
    },
  });