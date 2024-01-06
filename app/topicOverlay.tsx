import { Text, StyleSheet, View } from 'react-native';
import { useCallback, useState } from 'react';
import { useNavigation, useRouter, useLocalSearchParams, useFocusEffect } from "expo-router";
import * as Content from '../constants/Content.json'
import { ChecklistItem } from '../constants/Types';

// If the `ImportRequiredTopic` function is called frrom multiple places, use useMemo hook
const ImportRequiredTopic = (topicName: string): ChecklistItem => {
    const topic = Object.values(Content).filter(topic => topic.title === topicName)[0];
    if (topic) {
        return topic as ChecklistItem;
    }
    return undefined;
}

const ImportBackground = (path: string) => {
    const image = require('../assets/images/pngTopView.png');
    console.log(image);
    return image
}

export default function topicOverlay() {
    const navigation = useNavigation();
    const router = useRouter();
    const params = useLocalSearchParams();
    const { topicName } = params;
    const [content, setContent] = useState<ChecklistItem>(null);

    useFocusEffect(
        useCallback(() => {
            const loadedContent = ImportRequiredTopic(topicName as string);
            setContent(loadedContent);
        }, [topicName])
    );
    
    if (!content) {
        return (
            <View style={styles().container}>
                <Text>Loading...</Text>
            </View>
        );
    }

    return (
        <View style={styles().container}>
            <Text style={styles().topicTitle}>{topicName}</Text>
        </View>
    )
}

const styles = (backgroundImgUrl = "") => StyleSheet.create({
    container: {
        backgroundImage: ImportBackground(backgroundImgUrl)
    },
    topicTitle: {
      fontSize: 25,
      lineHeight: 25,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: 'white',
      textAlign: 'center',
    },
  });