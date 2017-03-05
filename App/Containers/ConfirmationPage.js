// @flow

import React from 'react'
import {ScrollView, Text, Animated, View, Dimensions, TouchableHighlight, Image} from 'react-native'
import {connect} from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import {Actions as NavigationActions} from 'react-native-router-flux'
import {Images, Metrics, Colors} from '../Themes'

// Styles
import styles from './Styles/ConfirmationPageStyle'


class ConfirmationPage extends React.Component {


  componentWillMount() {
    this.setState({isOpen: true});
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{flex:0.2, backgroundColor:'#F1E7D1',    justifyContent: 'center',alignItems: 'center'}}>
        </View>
        <View style={styles.modal}>
          <Image source={Images.check} style={styles.topLogo}>
          </Image>
        </View>
        <View style={{flex:0.4, backgroundColor:'#F1E7D1', justifyContent: 'flex-start',alignItems: 'center'}}>
          <Text style={styles.text}>
            {this.props.message}
          </Text>
        </View>

        <TouchableHighlight onPress={() => {NavigationActions.pop();}} style={{flex:0.1, backgroundColor:'#F4B459',    justifyContent: 'center',
    alignItems: 'center'}}>
          <Text
            style={{fontFamily:'AvenirNext-UltraLight', fontSize:20, fontWeight:'200',alignSelf:'center'}}>CLOSE</Text>
        </TouchableHighlight>

      </View>
    );
  }


}

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(ConfirmationPage)
