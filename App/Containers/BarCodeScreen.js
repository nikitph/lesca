// @flow

import React, {PropTypes} from 'react'
import {ScrollView, Text, KeyboardAvoidingView, StyleSheet, OS, View} from 'react-native'
import {connect} from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
import BarcodeActions from '../Redux/BarcodeDataRedux'
import BarCodeActions from '../Redux/BarCodeRedux'

import {Metrics} from '../Themes'
// external libs
import Icon from 'react-native-vector-icons/FontAwesome'
import Animatable from 'react-native-animatable'
import {Actions as NavigationActions} from 'react-native-router-flux'

// Styles

// I18n
import I18n from 'react-native-i18n'
import BarcodeScanner from 'react-native-barcode-scanner-universal'


class BarCodeScreen extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      isread: false,
      data: this.props.data,
      code: '',
      bdata: ''
    }
  }

  render() {
    let scanArea = null;

    scanArea = (
      <View style={styles.rectangleContainer}>
        <View style={styles.rectangle}/>
      </View>
    );


    return (
      <BarcodeScanner
        onBarCodeRead={(code_data) => {
          if(this.state.code != code_data.code && this.state.bdata != code_data.data)
           {
             this.props.sendData(code_data);
             this.props.apiReq(code_data.bdata);
             this.state.code = code_data.code;
             this.state.bdata = code_data.data;
           }
        }}
        style={styles.camera}>
        {scanArea}
      </BarcodeScanner>
    )
  }


}

BarCodeScreen.propTypes = {

  sendData: PropTypes.func,
  apiReq: PropTypes.func,
  data: PropTypes.array

};

const mapStateToProps = (state) => {
  return {
    data: state.barcode.payload
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    sendData: (params) => dispatch(BarcodeActions.barcodeDataSuccess(params)),
    apiReq: (params) => dispatch(BarCodeActions.barCodeRequest(params))
  }
};


const styles = StyleSheet.create({
  camera: {
    flex: 1
  },
  rectangleContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent'
  },
  rectangle: {
    height: 250,
    width: 250,
    borderWidth: 2,
    borderColor: '#00FF00',
    backgroundColor: 'transparent'
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(BarCodeScreen)
