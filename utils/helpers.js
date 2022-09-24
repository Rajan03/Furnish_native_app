import {Dimensions} from "react-native";
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from "react-native-responsive-screen";

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

export {SCREEN_WIDTH, SCREEN_HEIGHT};

export const normalizeHeight = (size) => {
   return hp(`${size}%`);
};
export const normalizeWidth = (size) => {
   return wp(`${size}%`);
};
