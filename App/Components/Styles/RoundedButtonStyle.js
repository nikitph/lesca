import { StyleSheet } from 'react-native'
import { Fonts, Colors, Metrics } from '../../Themes/'

export default StyleSheet.create({
  button: {
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'transparent',
    marginHorizontal: Metrics.smallMargin,
    marginVertical: Metrics.smallMargin,
    backgroundColor: 'rgba(177, 138, 106, 0.5)',
    justifyContent: 'center'
  },
  buttonText: {
    color: '#482e19',
    textAlign: 'center',
    fontWeight: '400',
    fontFamily: 'Avenir',
    fontSize: Fonts.size.small,
    marginHorizontal: Metrics.baseMargin
  }
})
