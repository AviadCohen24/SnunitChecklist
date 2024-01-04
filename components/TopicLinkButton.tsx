import { View, Text, StyleSheet, Pressable, Dimensions } from "react-native";

const screenHeight = Dimensions.get('window').height;
const buttonMargin = 25;
const buttonHeight = (screenHeight / 4) - (buttonMargin * 2);

export type TopicLinkProps = {
    topicName: string
};

export default function TopicLinkButton({ topicName }: TopicLinkProps) {
    return (
        <View style={styles.container}>
            <Pressable style={styles.button}>
                <Text style={styles.text}>{topicName}</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    },
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
    fontSize: 25,
    lineHeight: 25,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
    textAlign: 'center',
  },
});