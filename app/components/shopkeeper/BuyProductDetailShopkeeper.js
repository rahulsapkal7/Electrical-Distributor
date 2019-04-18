import React, { Component } from 'react';
import { AppRegistry, FlatList, StyleSheet,ScrollView, Alert, Text, View,TouchableOpacity,Image } from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Header from '../../common/header';
import {api} from '../../common/api';

import {UserData} from '../../redux/actions/UserData_action';
import {NavigationActions} from 'react-navigation';
import Loader from '../../common/Loader.js';

 class BuyProductDetailShopkeeper extends Component {

  constructor(props) {
    super(props);

    console.log('inside Buy Product Detail ',props);

    this.state = {
      // selectedArea : this.props.navigation.state.params.selectedArea,
      loading : false,
      ProductData : this.props.navigation.state.params.ProductObj,
      Qty : 1
      // ProductImage : 
    }

    console.log("props are --> ",JSON.stringify(props));
   
  }

  componentDidMount() {
    
        // this.getPendingOrderList();
    
      }

      addQty = () =>{
        // if (this.state.Qty == 10) {
          
        // } else {
          this.setState({
            Qty : this.state.Qty + 1
           } )
        // }
      }
      subtractQty = () =>{
        if (this.state.Qty == 1) {
          Alert.alert('Buy Product', "Minimum quantity atleast 1");
        } else {
          this.setState({
            Qty : this.state.Qty - 1
           } )
        }
      }

      placeOrder = () =>{
        // const url = api() + 'ViewProdcutsByAdmin.php';
        const url = api() + 'Placeorder1.php';
        // UserID,SKUCode,Qty
        
         console.log(url);
        
        this.setState({loading: true});
    
        var data = new FormData();
        console.log("this.props.UserId",this.props.UserId);
        data.append('UserID',this.props.UserId ),
        // data.append('UserID', "2"),
        data.append('SKUCode', this.state.ProductData.SKUCode),
        data.append('Qty', this.state.Qty),
        // data.append('Qty', 3),
        
        console.log("data is", data);
        fetch(url,{method: 'post',
        body: data
      })
            .then(response => response.json())
            .then(res => {
              console.log("response is",JSON.stringify(res));
              this.setState({
                loading : false
              })
              if(res.status){
                // this.setState({
                //   StoreData: res.data,
                    
                // });
                // Alert.alert('Buy Product', res.message);
                Alert.alert('Buy Product', res.message,[{text: 'OK', 
                onPress: () => {
                    console.log('OK Pressed');
                    this.props.navigation.goBack(null)}}]
                , {cancelable: false},);
              }else{
                Alert.alert('Buy Product', "Something went wrong");
              }
               
            })
            .catch(error => {
    
                console.log('error:' + (error));
                this.setState({ loading: false});
            });
    
      }
      

      

  render() {
    return (

    <View style={styles.parentcontainer}>
    <Header
                title={'PRODUCT DETAILS'}
                back={() => {
                this
                  .props
                  .navigation
                  .goBack(null)
              }}/>
   <Loader visible={this.state.loading}/>
                <ScrollView contentContainerStyle={{
                width: window.width
              }}>
      <View style={styles.container}>

        {/* <FlatList
         
          data={this.state.StoreData}
          renderItem={this.renderItem}
          numColumns={2}
        /> */}

        <View style={styles.productParent}>
              
                    <Image
                source={{ uri: "https://n4.sdlcdn.com/imgs/f/n/v/eveready_600-dd3f6.jpg" }}
                style={{ width: 200, height:200 }}
                resizeMode="cover"
              />
                   
                <View style={styles.horizontal_view1}>
                <Text style={styles.txtStyle_sixteen}>
                    {this.state.ProductData.ProductName }
                </Text>
                </View>
                <View style={styles.horizontal_view}>
                   <Text style={styles.txtStyle_fourteen}>
                   ProductName : 
                  </Text>
                <Text style={styles.txtStyle_sixteen}>
                {this.state.ProductData.ProductName }
                </Text>
                </View>
                <View style={styles.horizontal_view}>
                   <Text style={styles.txtStyle_fourteen}>
                   MfgName : 
                  </Text>
                <Text style={styles.txtStyle_sixteen}>
                {this.state.ProductData.MfgName }
                </Text>
                </View>
                <View style={styles.horizontal_view}>
                   <Text style={styles.txtStyle_fourteen}>
                   MRP Price : 
                  </Text>
                <Text style={styles.txtStyle_sixteen}>
                {this.state.ProductData.MRPPrice }
                </Text>
                </View>
                <View style={styles.horizontal_view}>
                   <Text style={styles.txtStyle_fourteen}>
                   Selling Price : 
                  </Text>
                <Text style={styles.txtStyle_sixteen}>
                {this.state.ProductData.SellingPrice }
                </Text>
                </View>
                <View style={styles.horizontal_view}>
                <Text style={styles.txtStyle_fourteen}>
                   Quantity :     
                  </Text>
                <TouchableOpacity style={styles.btnBackgroundAdd} onPress={this.addQty.bind(this)} >
                    <Text style={styles.txtStyle_fourteen}>+</Text>
                </TouchableOpacity>
                <Text style={styles.txtStyle_sixteenQty} >
                {this.state.Qty }
                </Text>
                <TouchableOpacity style={styles.btnBackgroundSub} onPress={this.subtractQty.bind(this)} >

                    <Text style={styles.txtStyle_fourteen}>-</Text>
                </TouchableOpacity>
                </View>
                <View style={styles.horizontal_view}>
                   <Text style={styles.txtStyle_fourteen}>
                   Total : 
                  </Text>
                <Text style={styles.txtStyle_sixteen}>
                { (this.state.ProductData.SellingPrice) * (this.state.Qty) }
                </Text>
                </View>
                <TouchableOpacity style={styles.btnBackground} onPress={this.placeOrder.bind(this)} >

                    <Text style={styles.txtStyle_fourteen}>Buy</Text>
                </TouchableOpacity>
            </View> 


      </View>
              </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    canvas: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
      },
  parentcontainer: { 
    flexDirection: 'column', 
    height: '100%',  
  },
  productParent:{
    flex:1,
    flexDirection: 'column', 
    backgroundColor: '#4db6ac',
    alignItems: 'center',
    justifyContent: 'center', 
    // borderRadius:2,
    // borderColor: 'red',
    margin : 10,
    padding : 15,
    borderWidth:1,
    borderRadius:2,
    borderColor: '#ddd',
    
  },
    btnBackground: {
        backgroundColor: 'skyblue',
        borderRadius: 25,
        paddingVertical: 10, 
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10, 
        marginTop:10,
        width: '50%',
    },
    btnBackgroundAdd: {
      backgroundColor: 'skyblue',
      borderRadius: 1,
      // paddingVertical: 15, 
      alignItems: 'center',
      justifyContent: 'center',
      // marginRight: 15, 
      // marginTop:15,
      width: 25,
      height: 25,
      left : 10,
  },
  btnBackgroundSub: {
    backgroundColor: 'skyblue',
    borderRadius: 1,
    // paddingVertical: 15, 
    alignItems: 'center',
    justifyContent: 'center',
    // marginRight: 15, 
    // marginTop:15,
    width: 25,
    height: 25,
    left : 30,
},
  container: {
   flex: 1,
   paddingTop: 22,
   
   
  },
  prodcust_container1: {  
    flexDirection:'column',
    alignItems: 'center',
    justifyContent: 'center', 
    // height: '60%',  
  },
  prodcust_container2: {  
   flexDirection:'column',
   alignItems: 'center',
   justifyContent: 'center', 
   height: '40%',  
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
    alignItems: 'center',
    justifyContent: 'center',
  },
  horizontal_view1: { 
    flexDirection: 'row', 
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop:20,
  },
  
  txtStyle_fourteen: {  
    fontSize: 14,
    color:'white'
  },
  txtStyle_sixteen: {  
    fontSize: 16,
    color:'white',
    fontWeight:'500',
    
  },
  txtStyle_sixteenQty : {
    fontSize: 16,
    color:'white',
    fontWeight:'500',
    left :20
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
        backgroundColor:'#4db6ac',
        flex: 1,        
        marginRight: 5, 
        marginTop: 10,
        flexDirection:'column',
        // height: '80%', 
  },
})
 
const mapStateToProps = (state, ownProps) => {
  console.log('state:' + JSON.stringify(state));
  return {UserId: state.UserData_red.UserId}
  
  // return {}
}

const mapDispatchToProps = dispatch => (bindActionCreators({
  UserData
}, dispatch));

export default connect(mapStateToProps, mapDispatchToProps)(BuyProductDetailShopkeeper);