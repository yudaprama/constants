import {Platform, NativeModules, Dimensions} from 'react-native';
const {LinkingManager, IntentAndroid} = NativeModules;
const isIOS = Platform.OS == 'ios'

export const Linking = isIOS ? LinkingManager : IntentAndroid;

const {width, height} = Dimensions.get('window');

let isGTELOLLIPOP = true
if (!isIOS) {
  isGTELOLLIPOP = Platform.Version > 22
}

export {
	width,
	height,
	isGTELOLLIPOP 
}
