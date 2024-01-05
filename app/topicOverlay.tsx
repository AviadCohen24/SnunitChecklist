import { Text, StyleSheet, View } from 'react-native';
import { useNavigation, useRouter, useLocalSearchParams } from "expo-router";

export default function topicOverlay() {
    const navigation = useNavigation();
    const router = useRouter();
    const params = useLocalSearchParams();
    const { topicName } = params;

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{`Topic: ${topicName}`}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    text: {
      fontSize: 25,
      lineHeight: 25,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: 'white',
      textAlign: 'center',
    },
  });