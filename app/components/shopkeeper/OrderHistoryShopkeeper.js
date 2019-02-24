import React, { Component } from 'react';
import { AppRegistry, FlatList, StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {UserData} from '../../redux/actions/UserData_action';
import {NavigationActions} from 'react-navigation';
import Header from '../../common/header';

class OrderHistoryShopkeeper extends Component {

renderItem=({item})=>{
        return(
        <TouchableOpacity style={{ flex:1,flexDirection:'column',marginBottom:3}} 
        >
           
            <View style={styles.card_outer}>
                 
                <View style={styles.horizontal_view}>

        <Text style={styles.txtStyle_fourteen}>
                    Product code : 
                </Text>
                <Text style={styles.txtStyle_sixteen}>
                    {' '+item.prodSkuCode}
                </Text>
                </View>

<View style={styles.horizontal_view}>

        <Text style={styles.txtStyle_fourteen}>
                    Product amount : 
                </Text>
                <Text style={styles.txtStyle_sixteen}>
                    {' '+item.prodSkuCode}
                </Text>
                </View>

                <View style={styles.horizontal_view}>

        <Text style={styles.txtStyle_fourteen}>
                    Purchase date : 
                </Text>
                <Text style={styles.txtStyle_sixteen}>
                    {' '+item.prodSkuCode}
                </Text>
                </View>
            </View> 
        </TouchableOpacity>
            )
    }

  render() {
    return (

    <View style={styles.parentcontainer}>
    <Header
                title={'Order History'}
                back={() => {
                this
                  .props
                  .navigation
                  .goBack(null)
              }}/>
    {/* <View style={styles.menuTextContainer}>
            <Text style={styles.txtMain}>
              Order history
            </Text>
          </View> */}
      <View style={styles.container}>
        <FlatList
          data={[
            {prodSkuCode: 'Devin',prodAmt: 'Devin',purchaseDate: 'Devin'},
            {prodSkuCode: 'Jackson',prodAmt: 'Devin',purchaseDate: 'Devin'},
            {prodSkuCode: 'James',prodAmt: 'Devin',purchaseDate: 'Devin'},
            {prodSkuCode: 'Joel',prodAmt: 'Devin',purchaseDate: 'Devin'},
            {prodSkuCode: 'John',prodAmt: 'Devin',purchaseDate: 'Devin'},
            {prodSkuCode: 'Jillian',prodAmt: 'Devin',purchaseDate: 'Devin'},
            {prodSkuCode: 'Jimmy',prodAmt: 'Devin',purchaseDate: 'Devin'},
            {prodSkuCode: 'Julie',prodAmt: 'Devin',purchaseDate: 'Devin'},
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
  container: {
   flex: 1,
   paddingTop: 22,
   height: '90%',  
  },
  txtMain:{
    fontSize: 16,
    color:'white',
    fontWeight:'500'
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
    color:'white'
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

export default connect(mapStateToProps, mapDispatchToProps)(OrderHistoryShopkeeper  );