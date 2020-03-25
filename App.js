import React, {Fragment, useState} from 'react';
import {
  Button,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  StatusBar,
} from 'react-native';

import Svg, {
  Image,
  Defs,
  Path,
  G,
  ClipPath,
  Rect,
  Circle,
} from 'react-native-svg';

const randomInts = () =>
  new Array(10).fill(null).map(() => Math.floor(Math.random() * 640));

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <View style={styles.body}>
            <Images />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const Images = () => {
  const [nums, setNums] = useState([]);

  return (
    <>
      <Button title="Reload" onPress={() => setNums(randomInts())} />
      <View style={styles.images}>
        {nums.map((random, index) => (
          <Fragment key={index}>
            <View>
              <ProfileImage
                source={{uri: `http://placekitten.com/g/${random}`}}
              />
            </View>
          </Fragment>
        ))}
      </View>
    </>
  );
};

const ProfileImage = ({source}) => (
  <Svg
    width="100%"
    height="100%"
    viewBox="0 0 26 26"
    version={1.1}
    xmlnsXlink="http://www.w3.org/1999/xlink"
    style={styles.profileImage}>
    <Defs>
      <ClipPath id="clip">
        <Circle cx={13} cy={13} r={13} />
      </ClipPath>
    </Defs>
    <G clipPath="url(#clip)">
      <Rect x={0} y={0} width={26} height={26} fill="gray" />
      {source ? (
        <Image
          clipPath="url(#clip)"
          x={0}
          y={0}
          width={26}
          height={26}
          preserveAspectRatio="xMidYMid slice"
          href={source}
        />
      ) : (
        <Path
          d="M1.112 27.5h25.776a10.396 10.396 0 0 0-10.255-8.692h-5.266c-5.109 0-9.43 3.705-10.255 8.692zm13.426-11.846a7.577 7.577 0 1 0 0-15.154 7.577 7.577 0 0 0 0 15.154z"
          fill="#fff"
          fillRule="evenodd"
          x={-1.5}
          y={2}
        />
      )}
    </G>
  </Svg>
);

const styles = StyleSheet.create({
  images: {
    flex: 0,
    height: 24,
    flexDirection: 'row',
  },
  profileImage: {
    aspectRatio: 1,
  },
});

export default App;
