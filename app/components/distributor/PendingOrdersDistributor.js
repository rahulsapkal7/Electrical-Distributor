import React, { Component } from 'react';
import { AppRegistry, FlatList, StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Header from '../../common/header';

import {UserData} from '../../redux/actions/UserData_action';
import {NavigationActions} from 'react-navigation';

 class PendingOrdersDistributor extends Component {

renderItem=({item})=>{
        return(
        <TouchableOpacity style={{ flex:1,flexDirection:'column',marginBottom:3}} 
        >
           
            <View style={styles.card_outer}>
                 
                <View style={styles.horizontal_view}>

        <Text style={styles.txtStyle_fourteen}>
                    Shopkeeper name : 
                </Text>
                <Text style={styles.txtStyle_sixteen}>
                    {' '+item.skName}
                </Text>
                </View>

<View style={styles.horizontal_view}>

        <Text style={styles.txtStyle_fourteen}>
                    Shop name : 
                </Text>
                <Text style={styles.txtStyle_sixteen}>
                    {' '+item.shopName}
                </Text>
                </View>

                <View style={styles.horizontal_view}>

        <Text style={styles.txtStyle_fourteen}>
                    Product name : 
                </Text>
                <Text style={styles.txtStyle_sixteen}>
                    {' '+item.productName}
                </Text>
                </View>


                <View style={styles.horizontal_view}>

        <Text style={styles.txtStyle_fourteen}>
                    Sku code : 
                </Text>
                <Text style={styles.txtStyle_sixteen}>
                    {' '+item.skuCode}
                </Text>
                </View>


                <View style={styles.horizontal_view}>

        <Text style={styles.txtStyle_fourteen}>
                    Quantity : 
                </Text>
                <Text style={styles.txtStyle_sixteen}>
                    {' '+item.qunatity}
                </Text>
                </View>

                 <View style={styles.horizontal_view}>

      <TouchableOpacity style={styles.btnBackground}  >

                    <Text style={styles.txtStyle_sixteen}>Accept</Text>
                </TouchableOpacity>
                 <TouchableOpacity style={styles.btnBackground} >

                    <Text style={styles.txtStyle_sixteen}>Reject</Text>
                </TouchableOpacity>
                </View>
            </View> 
        </TouchableOpacity>
            )
    }

  render() {
    return (

    <View style={styles.parentcontainer}>
    <Header
                title={'Pending orders'}
                back={() => {
                this
                  .props
                  .navigation
                  .goBack(null)
              }}/>
    {/* <View style={styles.menuTextContainer}>
            <Text style={styles.txtMain}>
              Pending orders
            </Text>
          </View> */}
      <View style={styles.container}>
        <FlatList
          data={[
            {skName: 'Devin',shopName: 'Devin',productName: 'Devin',skuCode: 'Devin',qunatity: 'Devin'},
            {skName: 'Jackson',shopName: 'Devin',productName: 'Devin',skuCode: 'Devin',qunatity: 'Devin'},
            {skName: 'James',shopName: 'Devin',productName: 'Devin',skuCode: 'Devin',qunatity: 'Devin'},
            {skName: 'Joel',shopName: 'Devin',productName: 'Devin',skuCode: 'Devin',qunatity: 'Devin'}, 
          ]}
          renderItem={this.renderItem}
        />
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
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor:'#000', 
        shadowOpacity: 0.5,
        shadowRadius: 5,
         padding: 10,
        elevation: 5,
        marginBottom:10,
        marginLeft: 5,
        backgroundColor:'#ddd',
        flex: 1,        
        marginRight: 5, 
        marginTop: 10,
        flexDirection:'column',
        height: '80%', 
  },
})
 
const mapStateToProps = (state, ownProps) => {
  // console.log('state:' + JSON.stringify(state));
  return {}
}

const mapDispatchToProps = dispatch => (bindActionCreators({
  UserData
}, dispatch));

export default connect(mapStateToProps, mapDispatchToProps)(PendingOrdersDistributor);