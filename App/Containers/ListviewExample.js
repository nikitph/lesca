import React, {PropTypes} from 'react'
import {View, Text, ListView, Image, TouchableOpacity} from 'react-native'
import { connect } from 'react-redux'
import {Actions as NavigationActions} from 'react-native-router-flux'

// For empty lists
import AlertMessage from '../Components/AlertMessage'

// Styles
import styles from './Styles/ListviewExampleStyle'
import {Images} from '../Themes'


class ListviewExample extends React.Component {

  state: {

    dataSource: Object,
    user: null

  };

  constructor (props) {
    super(props);
    /* ***********************************************************
     * STEP 1
     * This is an array of objects with the properties you desire
     * Usually this should come from Redux mapStateToProps
     *************************************************************/
    const dataObjects = props.item_data;

    /* ***********************************************************
     * STEP 2
     * Teach datasource how to detect if rows are different
     * Make this function fast!  Perhaps something like:
     *   (r1, r2) => r1.id !== r2.id}
     *************************************************************/
    const rowHasChanged = (r1, r2) => r1 !== r2

    // DataSource configured
    const ds = new ListView.DataSource({rowHasChanged})

    // Datasource is always in state
    this.state = {
      dataSource: ds.cloneWithRows(dataObjects)
    }
  }

  static onPressButton = () => {
    console.tron.log('yup');
  }

  /* ***********************************************************
   * STEP 3
   * `renderRow` function -How each cell/row should be rendered
   * It's our best practice to place a single component here:
   *
   * e.g.
   return <MyCustomCell title={rowData.title} description={rowData.description} />
   *************************************************************/
  renderRow (rowData) {

    return (
      <TouchableOpacity onPress={() => console.log(rowData)}>

        <View style={styles.row}>
          <View style={{justifyContent:'flex-start', padding:5, flex:1}}>
            <Text
              style={{fontFamily:'AvenirNext-UltraLight', fontSize:12, fontWeight:'300'}}>{rowData.data.toUpperCase()}</Text>
            <Text style={{fontFamily:'AvenirNext-UltraLight', fontSize:12, fontWeight:'100'}}>{rowData.type}</Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  }

  /* ***********************************************************
   * STEP 4
   * If your datasource is driven by Redux, you'll need to
   * reset it when new data arrives.
   * DO NOT! place `cloneWithRows` inside of render, since render
   * is called very often, and should remain fast!  Just replace
   * state's datasource on newProps.
   *
   * e.g.
   componentWillReceiveProps (newProps) {
   if (newProps.someData) {
   this.setState({
   dataSource: this.state.dataSource.cloneWithRows(newProps.someData)
   })
   }
   }
   *************************************************************/

  // Used for friendly AlertMessage
  // returns true if the dataSource is empty
  noRowData () {
    return this.state.dataSource.getRowCount() === 0
  }

  render () {
    return (
      <View style={styles.container}>
        <AlertMessage title='Nothing to See Here, Move Along' show={this.noRowData()} />
        <ListView
          contentContainerStyle={styles.listContent}
          dataSource={this.state.dataSource}
          renderRow={this.renderRow}
          pageSize={15}
        />
      </View>
    )
  }
}

ListviewExample.propTypes = {

  item_data: PropTypes.array

};

const mapStateToProps = (state) => {

  console.log(state.barcode);
  return {
    item_data: state.barcode.payload
  }
};

export default connect(mapStateToProps)(ListviewExample)
