import React, { Component } from 'react';
import { AppRegistry, FlatList, StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Header from '../../common/header';
import {api} from '../../common/api';

import {UserData} from '../../redux/actions/UserData_action';
import {NavigationActions} from 'react-navigation';
import Loader from '../../common/Loader.js';

 class CommingSoonDistributor extends Component {

  constructor(props) {
    super(props);

    console.log('inside pending order distributor');

    this.state = {
      // selectedArea : this.props.navigation.state.params.selectedArea,
      loading : false,
      StoreData : []
    }

    console.log("props are --> ",JSON.stringify(props));
   
  }

 


  render() {
    return (

    <View style={styles.parentcontainer}>
    <Header
                title={'Proton'}
                back={() => {
                this
                  .props
                  .navigation
                  .goBack(null)
              }}/>
     
      <Loader visible={this.state.loading}/>
      <View style={styles.card_outer}>
      <Text style={styles.name}>Comming Soon</Text>
      </View>
      </View>
     
    );
  }
}

const styles = StyleSheet.create({
  parentcontainer: { 
    flexDirection: 'column', 
    height: '100%',  
  },
    btnBackground: {
        backgroundColor: 'skyblue',
        borderRadius: 25,
        paddingVertical: 10, 
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10, 
        marginTop:10,
        width: '40%',
    },
  container: {
   flex: 1,
   paddingTop: 22,
   height: '90%',  
  },
  txtMain: {  
    fontSize: 14,
    fontWeight: '500',
    color:'white'
  },

  menuTextContainer: {   
    height: '7%', 
    backgroundColor:'skyblue',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor:'#000', 
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 5,
    borderRadius:2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  horizontal_view: { 
    flexDirection: 'row', 
  },
  txtStyle_fourteen: {  
    fontSize: 14,
    color:'white'
  },
  txtStyle_sixteen: {  
    fontSize: 16,
    color:'white',
    fontWeight:'500'
  },
  txtStyle_eighteen: {  
    fontSize: 18,
    color:'white'
  },
  card_outer: {
      borderWidth:1,
        borderRadius:2,
        borderColor: 'blue',
        borderBottomWidth: 0,
        shadowColor:'#000', 
        shadowOpacity: 0.5,
        shadowRadius: 5,
         margin: 10,
        elevation: 5,
        // marginBottom:10,
        // marginLeft: 5,
        backgroundColor:'blue',
        // flex: 1,   
        alignItems: 'center',
        justifyContent: 'center',     
        // marginRight: 5, 
        // marginTop: 10,
        flexDirection:'column',
        height: '30%', 
  },
  name: {
    color: 'honeydew',
    fontWeight: 'bold',
    fontSize: 26, 
},
})
 
const mapStateToProps = (state, ownProps) => {
  // console.log('state:' + JSON.stringify(state));
  return {}
}

const mapDispatchToProps = dispatch => (bindActionCreators({
  UserData
}, dispatch));

export default connect(mapStateToProps, mapDispatchToProps)(CommingSoonDistributor);