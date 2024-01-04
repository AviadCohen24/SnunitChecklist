import { ImageBackground, StyleSheet } from 'react-native';
import { Text, View } from '../../components/Themed';
import { PngTopView } from '../../assets/ImagesObjects';
import TopicLinkButton from '../../components/TopicLinkButton';

export default function LearningTab() {
  return (
    <View style={styles.container}>
      <ImageBackground source={PngTopView} resizeMode='cover' style={styles.image}>
        <TopicLinkButton topicName={'test'} />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
});
