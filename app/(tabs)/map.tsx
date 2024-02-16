import { Animated, StyleSheet, View, Image, SafeAreaView } from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import { useEffect,useState } from 'react';
import { PinchGestureHandler, State } from 'react-native-gesture-handler';
import { OfflineMapImage, PngTopView } from '../../assets/ImagesObjects';
import { Dimensions, Text } from 'react-native';
import Draggable from 'react-native-draggable';
import WebView from 'react-native-webview';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const INIT_SCALE: number = 0.24871486924545785;
const GOOGLE_MAP_URI: string = 'https://www.google.com/maps/d/viewer?mid=1RCsK2wtKgAIhkisaa4_JJRjp-GE7Rh5B&ll=31.40926542737884%2C34.63232495688071&z=11';

export default function TabMapScreen() {
    const [netState, setNetState] = useState(false);
    let baseScale = new Animated.Value(INIT_SCALE);
    let pinchScale = new Animated.Value(1);
    let scale = Animated.multiply<number>(baseScale, pinchScale);
    let lastScale = 1;

    useEffect(() => {
        NetInfo.fetch().then(state => setNetState(state.isConnected));
    }, []);

  const onPinchGestureEvent = Animated.event(
    [{ nativeEvent: { scale: pinchScale } }],
    { useNativeDriver: true }
  );

  const onPinchHandlerStateChange = (event) => {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      lastScale *= event.nativeEvent.scale;
      baseScale.setValue(lastScale);
      pinchScale.setValue(1);
    }
  };

    if (netState) {
        return (
          <SafeAreaView style={{ flex: 1 }}>
            <WebView source={{ uri: GOOGLE_MAP_URI }} />
          </SafeAreaView>
        );
    }

    return (
      <View style={styles.container}>
        <Draggable touchableOpacityProps={{ activeOpacity: 1 }} x={60} y={100}>
          <PinchGestureHandler
            onGestureEvent={onPinchGestureEvent}
            onHandlerStateChange={onPinchHandlerStateChange}>
            <Animated.View style={{ transform: [{ perspective: 200 }, { scale }]}}>
              <Image source={OfflineMapImage}
                resizeMode='cover' />
            </Animated.View>
          </PinchGestureHandler>
        </Draggable>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    width: windowWidth,
    height: windowHeight,
  },
});
