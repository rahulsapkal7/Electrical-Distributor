import React, { Component } from 'react';
import { AppRegistry, FlatList, Switch,StyleSheet,ScrollView, Alert, ListItem,Text, View,TouchableOpacity,Image } from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import Header from '../../common/header';
import {api} from '../../common/api';

import {UserData } from '../../redux/actions/UserData_action';
import {cartData } from '../../redux/actions/getCart_action';
import {CartCountData } from '../../redux/actions/CartCountData_action';
import {_} from 'underscore';

import {NavigationActions} from 'react-navigation';
import Loader from '../../common/Loader.js';
var ThisView = null;


 class DisplayProductsDistributor extends Component {
  

  constructor(props) {
    super(props);
   
    console.log('inside Buy Product Detail ',props);
    ThisView = this
    this.state = {
      loading : false,
      ProductData : [],
      dispalyProductData : [],
      
    }
    console.log("props are --> ",JSON.stringify(props));
   
  }

  componentWillReceiveProps(newProps){
    console.log(JSON.stringify('newProps inside buy product',newProps));
   
  }
  componentDidMount() {
          this.getProductDetails();
      }

      getProductDetails = () =>{
        const url = api() + 'AdminViewProduct.php';
         console.log(url);
        this.setState({loading: true});
        fetch(url,{method: 'post'})
            .then(response => 
              response.json())
            .then(res => {
              console.log("response is inside alerts page ",JSON.stringify(res));
          
              if(res.status){
                res.data.map((item, i) => { item.switch})
                var result = res.data.map(function(obj) {
                  var data = Object.assign({}, obj);
                  data.switch = (obj.Display == "Yes" ? true : false );
                  return data;
                })
                console.log('result switch is',result);
                this.setState({
                  ProductData: res.data,
                  dispalyProductData : res.data,
                  loading : false
                });
                const ProductData = [...this.state.ProductData];
                // MyCartData[index].AddedToCartFlag = true;
                this.setState({ ProductData })
              }else{
                Alert.alert('Add To Cart', "Something went wrong");
              }
                
            })
            .catch(error => {
            
                console.log('error:' + (error));
                this.setState({ loading: false});
            });
    
      }
      
      listItem = ({item, index}) => (
        <View style={styles.productParent} >
        
             
          <View style={styles.horizontal_view}>
             <Text style={styles.txtStyle_fourteen}>
             Brand Category Name : 
            </Text>
          <Text style={styles.txtStyle_sixteen}>
          {item.BrandCategoryName }
          </Text>
          </View>
          <View style={styles.horizontal_view}>
             <Text style={styles.txtStyle_fourteen}>
             Sub Category Name : 
            </Text>
          <Text style={styles.txtStyle_sixteen}>
          {item.SubCategoryName }
          </Text>
          </View>
          <View style={styles.horizontal_view}>
             <Text style={styles.txtStyle_fourteen}>
             Product Code : 
            </Text>
          <Text style={styles.txtStyle_sixteen}>
          {item.ProductCode }
          </Text>
          </View>
  
          {/* <View style={styles.horizontal_view}>
             <Text style={styles.txtStyle_fourteen}>
             Power W : 
            </Text>
          <Text style={styles.txtStyle_sixteen}>
          {item.PowerW }
          </Text>
          </View>
          <View style={styles.horizontal_view}>
             <Text style={styles.txtStyle_fourteen}>
             Colour : 
            </Text>
          <Text style={styles.txtStyle_sixteen}>
          {item.Colour }
          </Text>
          </View> */}
          <View style={styles.horizontal_view}>
             <Text style={styles.txtStyle_fourteen}>
             Product Desc : 
            </Text>
          <Text style={styles.txtStyle_sixteen}>
          {item.ProductDes }
          </Text>
          </View>
  
          <View style={styles.horizontal_view}>
             <Text style={styles.txtStyle_fourteen}>
             MRP : 
            </Text>
          <Text style={styles.txtStyle_sixteen}>
          {item.MRP }
          </Text>
          </View>
           
          <View style={{ width : '100%',alignItems: 'center',justifyContent: 'center'}} >
          <Switch
            onValueChange={(value) => this.setSwitchValue(value, index,item.ProductCode)}
           value = {(item.Display == "Yes" ? true : false ) }/>
         
          </View> 
      </View> 
      )

     
    
     setSwitchValue = (val, ind,ProductCode) => {
       console.log("inside setSwitchValue ",val,ind,ProductCode);
       const url = api() + 'DisplayProductByAdmin.php';
       var status = (val == true ? "Yes" : "No")
         this.setState({loading: true});
        var data = new FormData();
        data.append('ProductCode',ProductCode ),
        data.append('Display', status),
        
        console.log("data is", data);
        fetch(url,{method: 'post',
        body: data
      })
            .then(response => response.json())
            .then(res => {
              console.log("response of place order is",JSON.stringify(res));
              this.setState({
                loading : false
              })
              if(res.status == true){
                const tempData = this.state.ProductData;
                tempData[ind].Display = (val == true ? "Yes" : "No");
                this.setState({ ProductData: tempData });
                console.log('after add to ProductData ',this.state.ProductData);
                const ProductData = [...this.state.ProductData];
                // MyCartData[index].AddedToCartFlag = true;
                this.setState({ ProductData })
                Alert.alert('Display Products', res.message);
                
              }else{
                Alert.alert('Display Products', "Something went wrong");
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
                title={'DISPLAY PRODUCTS'}
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

 <FlatList
        data={this.state.ProductData}
          renderItem={this.listItem}
          
        />
       
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
    // alignItems: 'center',
    // justifyContent: 'center', 
    borderRadius:2,
    borderColor: 'red',
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
    blueBtnBackground: {
      backgroundColor: '#4183DA',
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
    
  },
  horizontal_view1: { 
    flexDirection: 'row', 
    
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
  console.log('cartData :' + JSON.stringify(state.getCartred));
  console.log('cartData length :' + state.getCartred.length);
  console.log('ownProps:' + JSON.stringify(ownProps));
  console.log('CartCount @@@ :' + state.CartCountData_red.CartCount);
  return {UserId: state.UserData_red.UserId , cartData : state.getCartred , CartCount: state.CartCountData_red.CartCount}
  
  // return {}
}

const mapDispatchToProps = dispatch => (bindActionCreators({
  UserData ,cartData ,CartCountData
}, dispatch));

export default connect(mapStateToProps, mapDispatchToProps)(DisplayProductsDistributor);