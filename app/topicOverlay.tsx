import { Text, StyleSheet, View } from 'react-native';
import { useCallback, useState } from 'react';
import { useNavigation, useRouter, useLocalSearchParams, useFocusEffect } from 'expo-router';
import { ImageBackground } from 'expo-image/build/ImageBackground';
import * as Content from '../constants/Content.json'
import { ChecklistItem } from '../constants/Types';
import { TopicBackgrounds } from '../assets/ImagesObjects';
import { RFPercentage } from 'react-native-responsive-fontsize';
import SubTopic from '../components/SubTopic';

// If the `ImportRequiredTopic` function is called frrom multiple places, use useMemo hook
const ImportRequiredTopic = (topicName: string): ChecklistItem => {
    const topic = Object.values(Content).filter(topic => topic.title === topicName)[0];
    if (topic) {
        return topic as ChecklistItem;
    }
    return undefined;
}

const ImportBackground = (backgroundName: string) => {
    return TopicBackgrounds[backgroundName];
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
            <View>
                <Text>Loading...</Text>
            </View>
        );
    }

    return (
        <ImageBackground source={ImportBackground(content.background)} style={styles.background}>
            <Text style={styles.topicTitle}>{topicName}</Text>
            {content.subtopics.map(val => (
              <SubTopic key={val.name} subTopic={val}/>      
            ))}
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    background: {
      flex: 1,
    },
    topicTitle: {
      fontSize: RFPercentage(3.3),
      fontWeight: '900',
      letterSpacing: 0.25,
      color: 'black',
      textAlign: 'center'
    },
  });