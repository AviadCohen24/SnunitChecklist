import { Dimensions, ScrollView, StyleSheet } from 'react-native';
import { ImageBackground } from 'expo-image/build/ImageBackground';
import { View } from '../../components/Themed';
import { PngTopView } from '../../assets/ImagesObjects';
import TopicLinkButton from '../../components/TopicLinkButton';
import Content from '../../constants/Content.json'

const screenHeight = Dimensions.get('window').height;

export default function LearningTab() {
  let contentArray = Content.reduce((acc, current, index) => {
    if (index < 3) {
      acc.firstThree.push(current);
    }
    else {
      acc.nextThree.push(current);
    }
    return acc;
  }, { firstThree: [], nextThree: [] });

  return (
    <ImageBackground source={PngTopView} contentFit="cover" style={styles.background}>
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <View style={styles.container}>
          <View style={styles.leftColumn}>
            {contentArray.firstThree.map(topic => (
              <TopicLinkButton key={topic.title} topicName={topic.title} />
            ))}
          </View>
          <View style={styles.rightColumn}>
            {contentArray.nextThree.map(topic => (
              <TopicLinkButton key={topic.title} topicName={topic.title} />
            ))}
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

const baseStyles = StyleSheet.create({
  buttonsColumn: {
    backgroundColor: 'transparent',
    rowGap: 15,
    margin: 10
  }
});

const styles = StyleSheet.create({
  scrollViewContainer: {
    backgroundColor: 'transparent',
    flexGrow: 1,
    justifyContent: 'center', 
  },
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  background: {
    flex: 1,
    justifyContent: 'center',
  },
  leftColumn: {
    ...baseStyles.buttonsColumn,
    alignItems: 'flex-start',
  },
  rightColumn: {
    ...baseStyles.buttonsColumn,
    alignItems: 'flex-end',
  },
});
