import { Link } from "expo-router";
import { Text, StyleSheet, Pressable, Dimensions } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

const screenHeight = Dimensions.get('window').height;
const buttonMargin = 25;
const buttonHeight = (screenHeight / 4) - (buttonMargin * 2);

export type TopicLinkProps = {
    topicName: string
};

export default function TopicLinkButton({ topicName }: TopicLinkProps) {
    return (
        <Link href={{ pathname: '/topicOverlay', params: { topicName }}} asChild>
            <Pressable style={styles.button}>
                <Text style={styles.text}>{topicName}</Text>
            </Pressable>
        </Link>
    )
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#3e6cf7d9',
    height: buttonHeight,
    aspectRatio: 1,
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 6,
    elevation: 3,
  },
  text: {
    fontSize: RFPercentage(2.3),
    lineHeight: 25,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
    textAlign: 'center',
  },
});