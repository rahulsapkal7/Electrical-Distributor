import React, { Component } from 'react';
import { AppRegistry, FlatList, StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Header from '../../common/header';
import {api} from '../../common/api';

import {UserData} from '../../redux/actions/UserData_action';
import {NavigationActions} from 'react-navigation';
import Loader from '../../common/Loader.js';

 class PendingOrdersDistributor extends Component {

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

  componentDidMount() {
    
        this.getPendingOrderList();
    
      }


      getPendingOrderList = () =>{
        const url = api() + 'ViewOrderByAdmin.php';
         console.log(url);
        
        this.setState({loading: true});
    
        fetch(url,{method: 'post'})
            .then(response => response.json())
            .then(res => {
              console.log("response is",JSON.stringify(res));
              if(res.status){

              }
                this.setState({
                  StoreData: res.data,
                  loading : false
                    // error: res.error || null,                   
                    // refreshing: false
                });
            })
            .catch(error => {
    
                console.log('error:' + (error));
                this.setState({error, loading: false});
            });
    
      }
      

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
                    {' '+item.PropreitorName}
                </Text>
                </View>

<View style={styles.horizontal_view}>

        <Text style={styles.txtStyle_fourteen}>
                    Shop name : 
                </Text>
                <Text style={styles.txtStyle_sixteen}>
                    {' '+item.SoldToShopName}
                </Text>
                </View>
                
                <View style={styles.horizontal_view}>

        <Text style={styles.txtStyle_fourteen}>
                    Product name : 
                </Text>
                <Text style={styles.txtStyle_sixteen}>
                    {' '+item.ProductName}
                </Text>
                </View>

                <View style={styles.horizontal_view}>

        <Text style={styles.txtStyle_fourteen}>
            Manufacturer : 
                </Text>
                <Text style={styles.txtStyle_sixteen}>
                    {' '+item.MfgName}
                </Text>
                </View>
                <View style={styles.horizontal_view}>

        <Text style={styles.txtStyle_fourteen}>
                    Mobile Number : 
                </Text>
                <Text style={styles.txtStyle_sixteen}>
                    {' '+item.PrimaryMobileNo}
                </Text>
                </View>
                <View style={styles.horizontal_view}>

        <Text style={styles.txtStyle_fourteen}>
                    Sku code : 
                </Text>
                <Text style={styles.txtStyle_sixteen}>
                    {' '+item.SKUCode}
                </Text>
                </View>


                <View style={styles.horizontal_view}>

        <Text style={styles.txtStyle_fourteen}>
                    Quantity : 
                </Text>
                <Text style={styles.txtStyle_sixteen}>
                    {' '+item.Qty}
                </Text>
                </View>

                <View style={styles.horizontal_view}>

        <Text style={styles.txtStyle_fourteen}>
                    Price : 
                </Text>
                <Text style={styles.txtStyle_sixteen}>
                    {' '+item.Price}
                </Text>
                </View>

                <View style={styles.horizontal_view}>

        <Text style={styles.txtStyle_fourteen}>
                    Date : 
                </Text>
                <Text style={styles.txtStyle_sixteen}>
                    {' '+item.PODate}
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
      <View style={styles.container}>
      <Loader visible={this.state.loading}/>
        <FlatList
          data={this.state.StoreData}
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