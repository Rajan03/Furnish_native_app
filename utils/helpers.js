import {Dimensions, Platform ,PixelRatio} from "react-native";
import {heightPercentageToDP, widthPercentageToDP} from "react-native-responsive-screen";

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

export {SCREEN_WIDTH, SCREEN_HEIGHT};

export const normalize = (size) => {
   const scale = SCREEN_WIDTH / 320;
   const newSize = size * scale;
   if (Platform.OS === 'ios') {
      return Math.round(PixelRatio.roundToNearestPixel(newSize));
   } else {
      return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
   }
};

export const hp = (size) => {
    return heightPercentageToDP(size);
}
export const wp = (size) => {
    return widthPercentageToDP(size);
}
