import {ScrollView, Text, KeyboardAvoidingView, StyleSheet, View} from "react-native";
import {connect} from "react-redux";
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
// external libs
import * as Animatable from "react-native-animatable";
import {Actions as NavigationActions} from "react-native-router-flux";
// Styles
import styles from "./Styles/WalkThroughScreenStyle";
// I18n
import React, {Component} from "react";
import {IndicatorViewPager, PagerDotIndicator} from "rn-viewpager";
import RoundedButton from "../Components/RoundedButton";
import {Images} from "../Themes";


class WalkThroughScreen extends React.Component {

  render() {
    return (
      <View style={{flex:1}}>
        <IndicatorViewPager
          style={{flex:1}}
          indicator={this._renderDotIndicator()}
        >
          <View style={{backgroundColor:'#F7EDD3',justifyContent:'center', alignItems:'center'}}>
            <Animatable.Image animation='fadeIn' source={Images.quiks} style={[styles.topLogo]}/>
            <Text
              style={{fontFamily:'American Typewriter', textAlign:'center', color:'#8F7140', fontSize:16, marginLeft:25,  marginRight:25,  marginTop:-20}}>
              Thank you for choosing Quiks. The self-scan App</Text>

          </View>
          <View style={{backgroundColor:'#F7EDD3',justifyContent:'center', alignItems:'center'}}>
            <Animatable.Image animation='fadeIn' source={Images.quiks} style={[styles.cart]}/>
            <Text
              style={{fontFamily:'American Typewriter', textAlign:'center', color:'#8F7140', fontSize:16, marginLeft:25,  marginRight:25,  marginTop:-75}}>
              Just click scan to add items and then send when you reach cashier. Done!</Text>


            <View style={{marginTop:30}}>

              <RoundedButton onPress={NavigationActions.listviewExample}>
                Start
              </RoundedButton>
            </View>
          </View>
        </IndicatorViewPager>

      </View>
    );
  }


  _renderDotIndicator() {
    return <PagerDotIndicator pageCount={2} dotStyle={{
        width: 10,
        height: 10,
        borderRadius: 10 >> 1,
        backgroundColor: 'transparent',
        borderColor:'#B72219',
        borderWidth:1,
        margin: 10 >> 1}}
                              selectedDotStyle={{width: 10,
        height: 10,
        borderRadius: 10 >> 1,
        backgroundColor: '#B72219',
        margin: 10 >> 1}}

                              style={{ position: 'absolute',
        bottom: 50,
        left: 0,
        right: 0,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'}}
    />;
  }


}

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(WalkThroughScreen)
