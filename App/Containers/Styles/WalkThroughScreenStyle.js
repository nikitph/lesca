// @flow

import { StyleSheet } from 'react-native'
import { ApplicationStyles,Metrics } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  topLogo: {
    alignSelf: 'center',
    resizeMode: 'contain',
    width: Metrics.screenWidth * 0.4,
  },
  cart: {
    alignSelf: 'center',
    resizeMode: 'contain',
    width: Metrics.screenWidth * 0.35,

  }})
