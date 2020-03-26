import React, {useState} from 'react';
import {Button, StyleSheet, ScrollView, View} from 'react-native';

import Svg, {Image, Defs, G, ClipPath, Circle} from 'react-native-svg';

const randomInts = () =>
  new Array(5).fill(null).map(() => Math.floor(Math.random() * 640));

// use random cat images to add random network latency
const getCatImages = () =>
  randomInts().map(random => `http://placekitten.com/g/${random}`);

const App: () => React$Node = () => {
  return (
    <>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View>
          <Images />
        </View>
      </ScrollView>
    </>
  );
};

const Images = () => {
  const [images, setImages] = useState(getCatImages());

  return (
    <>
      <Button title="Reload" onPress={() => setImages(getCatImages())} />
      <View style={styles.images}>
        {images.map((href, index) => (
          <View key={index}>
            <RoundImage href={href} />
          </View>
        ))}
      </View>
    </>
  );
};

const RoundImage = ({href}) => (
  <Svg
    width="100%"
    height="100%"
    viewBox="0 0 64 64"
    version={1.1}
    xmlnsXlink="http://www.w3.org/1999/xlink"
    style={styles.profileImage}>
    <Defs>
      <ClipPath id="clip">
        <Circle cx={32} cy={32} r={32} />
      </ClipPath>
    </Defs>
    <G clipPath="url(#clip)">
      <Image clipPath="url(#clip)" width={64} height={64} href={href} />
    </G>
  </Svg>
);

const styles = StyleSheet.create({
  images: {
    flex: 0,
    height: 64,
    flexDirection: 'row',
  },
  profileImage: {
    aspectRatio: 1,
  },
});

export default App;
