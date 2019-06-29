import React, { Component } from 'react';
import { AppRegistry, FlatList, StyleSheet,ScrollView, Alert, ListItem,Text, View,TouchableOpacity,Image } from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
// import Header from '../../common/header';
// import Home_header from '../../common/home_header';
import CartCount_header from '../../common/CartCount_header';

import {api} from '../../common/api';

import {UserData } from '../../redux/actions/UserData_action';
import {cartData } from '../../redux/actions/getCart_action';
import {CartCountData } from '../../redux/actions/CartCountData_action';

import {NavigationActions} from 'react-navigation';
import Loader from '../../common/Loader.js';
var ThisView = null;


 class AddToCartShopkeeper extends Component {
  

  constructor(props) {
    super(props);
   
    console.log('inside Buy Product Detail ',props);
    ThisView = this
    this.state = {
      // selectedArea : this.props.navigation.state.params.selectedArea,
      loading : false,
      ProductData : [],
      addToCartData : [],
      cartCount : this.props.CartCount,
      BrandCategoryTableID : this.props.navigation.state.params.data.BrandCategoryTableID  ,
      SubCategoryTableID : this.props.navigation.state.params.data.SubCategoryTableID ,
      Qty : 1
      // ProductImage : 
    }
    this.addQty = this
    .addQty
    .bind(this);
    this.subtractQty = this
    .subtractQty
    .bind(this);
    this.addToCart = this
    .addToCart
    .bind(this);
    this.GoToCart = this
    .GoToCart
    .bind(this);
    
    console.log("props are --> ",JSON.stringify(props));
   
  }

  componentWillReceiveProps(newProps){
    console.log(JSON.stringify('newProps inside buy product',newProps));
    //  this.setState({
    //   myCartCount : newProps.cartData
    //   });
  }
  componentDidMount() {
        if (this.props.navigation.state.params.data.BrandCategoryTableID == '') {
        //  this.setState({
        //   ProductData : this.props.navigation.state.params.data.searchProductData
        //  }) ;
         var searchProductData = this.props.navigation.state.params.data.searchProductData
         searchProductData.map((item, i) => { item.qty})
         var result = searchProductData.map(function(obj) {
           var data = Object.assign({}, obj);
           data.Qty = 0;
           data.AddedToCartFlag = false;
           return data;
         })
         console.log('result is',result);
         this.setState({
           ProductData: result,
           
         });
        } else {
          this.getProductDetails();
        }
      
    
      }

      getProductDetails = () =>{
        const url = api() + 'GetProductDetails.php';
         console.log(url);
        
        this.setState({loading: true});
        var data = new FormData()
        console.log("this.props.BrandCategoryTableID",this.state.BrandCategoryTableID);
        console.log("this.props.SubCategoryTableID",this.state.SubCategoryTableID);
        
        data.append('BrandCategoryTableID',this.state.BrandCategoryTableID ),
        data.append('SubCategoryTableID',this.state.SubCategoryTableID ),
        
        fetch(url,{method: 'post',body:data})
            .then(response => 
              response.json())
            .then(res => {
              console.log("response is inside alerts page ",JSON.stringify(res));
          
              if(res.status){
                res.data.map((item, i) => { item.qty})
                var result = res.data.map(function(obj) {
                  var data = Object.assign({}, obj);
                  data.Qty = 0;
                  data.AddedToCartFlag = false;
                  return data;
                })
                console.log('result is',result);
                this.setState({
                  ProductData: result,
                  loading : false
                });
              }else{
                Alert.alert('Add To Cart', "Something went wrong");
              }
                
            })
            .catch(error => {
    
                console.log('error:' + (error));
                this.setState({error, loading: false});
            });
    
      }
      
    
      addQty = (item,index) =>{
        if (item.AddedToCartFlag == false) {
        console.log("on press addQty index",index);
        console.log("on press addQty item",item);
        const ProductData = [...this.state.ProductData];
        ProductData[index].Qty += 1;
        this.setState({ ProductData });
       
          console.log("on press addQty",this.state.ProductData[index]);
          console.log("on press addQty",this.state.ProductData);
        }else{
          Alert.alert('Add To Cart', "To change quantity click below Go to Cart button");
        }
      }
      subtractQty = (item,index) =>{
        console.log("on press subtractQty index",index);
        console.log("on press subtractQty item",item);
        console.log("on press subtractQty",this.state.ProductData[index].Qty);
        if (item.AddedToCartFlag == false) {
        
        if (this.state.ProductData[index].Qty == 0) {
          Alert.alert('Add To Cart', "Below 0 not allow");
        } else {
          const ProductData = [...this.state.ProductData];
          ProductData[index].Qty -= 1;
          this.setState({ ProductData })
         
        }
      }else{
        Alert.alert('Add To Cart', "To change quantity click below Go to Cart button");
        
                }
      }

      addToCart = (item,index) =>{
        if (item.AddedToCartFlag == false) {
          console.log("on press addToCart index",index);
          console.log("on press addToCart item",item);
          console.log("on press addToCart this.props.cartData ",this.props.cartData );
          if (item.Qty == 0 ) {
            Alert.alert('Add To Cart', "Please add Quantity first");
          } else {
           
               const url = api() + 'AddToCart.php';
        // UserID,SKUCode,Qty
        
         console.log(url);
        
        this.setState({loading: true});
    
        var data = new FormData();
        console.log("this.props.UserId",this.props.UserId);
        data.append('UserID',this.props.UserId ),
        // data.append('UserID', "2"),
        data.append('ProductTableID', item.ProductTableID),
        data.append('Quantity', item.Qty),
        // data.append('Qty', 3),
        
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
                var arr = this.state.addToCartData;
                arr.push(item);
                this.setState({ addToCartData :  arr})
                console.log('after add to cart ',this.state.addToCartData);
                const ProductData = [...this.state.ProductData];
                ProductData[index].AddedToCartFlag = true;
                this.setState({ ProductData });
                var cartCountLocal = this.state.cartCount;
                cartCountLocal = cartCountLocal + 1;
                this.setState({
                  cartCount : cartCountLocal,
                })
                this.props.CartCountData(this.state.cartCount);
                // this.props.CartCountData(this.state.addToCartData.length);
                console.log("after update cart count ",this.props.CartCountData);
                // this.setState({
                //   cartCount : (this.state.cartCount + 1)
                // })
                Alert.alert('Add To Cart', res.message);
                
              }else{
                Alert.alert('Add To Cart', "Something went wrong");
              }
               
            })
            .catch(error => {
    
                console.log('error:' + (error));
                this.setState({ loading: false});
            });
    
          }
         
        } else {
          console.log("navigate to cart page")
        }
        
        // console.log("on press addToCart",this.state.ProductData[index].Qty);
       
        // if (this.props.cartData.length == 0 ) {
        //   console.log('inside cartData length 0');
        //   var d = [];
        //   d.push(item);
        //   this.props.cartData(d);
        // }else{
        //   console.log('inside cartData ! 0');
          
        //   var d = [];
        //   d = this.props.cartData;
        //   d.push(item);
        //   this.props.cartData(d);
        // }
       
        // this.props.cartData.push(item)
        
       
      }
      GoToCart = () =>{
        // console.log("on press GoToCart index",index);
        // console.log("on press GoToCart item",item);
        console.log("on press GoToCart item",this.state.addToCartData);
        
        this.props.cartData(this.state.addToCartData);
        console.log("on press GoToCart this.props.cartData ",this.props.cartData );
        // var cartCountLocal = this.state.cartCount;
        // cartCountLocal = cartCountLocal + 1;
        // this.setState({
        //   cartCount : cartCountLocal,
        // })
        console.log("on press GoToCart tthis.state.cartCount ",this.state.cartCount );
        
        this.props.CartCountData(this.state.cartCount);
        // this.props.CartCountData(this.state.addToCartData.length);
       
       
        // this.props.CartCountData(this.state.addToCartData.length);
        console.log("after update cart count ",this.props.CartCountData);
        this.props.navigation.navigate('MyCartShopkeeper');
        // console.log("on press addToCart",this.state.ProductData[index].Qty);
        // var d = []
        // d.push(item);
        // this.props.cartData(d);
       
      }
      // placeOrder = (item,index) =>{
      //   console.log("on press placeOrder index",index);
      //   console.log("on press placeOrder item",item);
      //   // const url = api() + 'ViewProdcutsByAdmin.php';
      //   const url = api() + 'CustomerPlaceOrder.php';
      //   // UserID,SKUCode,Qty
        
      //    console.log(url);
        
      //   this.setState({loading: true});
    
      //   var data = new FormData();
      //   console.log("this.props.UserId",this.props.UserId);
      //   data.append('UserID',this.props.UserId ),
      //   // data.append('UserID', "2"),
      //   data.append('ProductTableID', item.ProductTableID),
      //   data.append('Quantity', item.Qty),
      //   // data.append('Qty', 3),
        
      //   console.log("data is", data);
      //   fetch(url,{method: 'post',
      //   body: data
      // })
      //       .then(response => response.json())
      //       .then(res => {
      //         console.log("response of place order is",JSON.stringify(res));
      //         this.setState({
      //           loading : false
      //         })
      //         if(res.status){
                
      //           Alert.alert('Buy Product', res.message,[{text: 'OK', 
      //           onPress: () => {
      //               console.log('OK Pressed');
      //               this.props.navigation.goBack(null)}}]
      //           , {cancelable: false},);
      //         }else{
      //           Alert.alert('Buy Product', "Something went wrong");
      //         }
               
      //       })
      //       .catch(error => {
    
      //           console.log('error:' + (error));
      //           this.setState({ loading: false});
      //       });
    
      // }
      
  

  render() {
    return (

    <View style={styles.parentcontainer}>
    <CartCount_header
                title={'ADD TO CART'}
                // cartCount = { this.state.addToCartData && this.state.addToCartData.length > 0 ? this.state.addToCartData.length : 0 }
                cartCount = { this.state.cartCount && this.state.cartCount > 0 ? this.state.cartCount : 0 }

                // cartCount = {this.state.cartCount}
                GoToCart = {() => this.GoToCart() }
                back={() => {
                this
                  .props
                  .navigation
                  .goBack(null)
                  // this.props.navigation.navigate('ShopkeeperHomePage2')
              }}/>
             
              {/* <Home_header  menu = { () => {  this.toggleMenu() ;
                        console.log("Open Menu",this.state.isOpen) }}  
                title={'PROTON ENTERPRISE'} 
               
                
                /> */}
   <Loader visible={this.state.loading}/>
                <ScrollView contentContainerStyle={{
                width: window.width
              }}>
      <View style={styles.container}>

 <FlatList
        data={this.state.ProductData}
          renderItem={({ item, index }) => (
            <ListItemData
              item={item}
              subtractQty={() => this.subtractQty(item, index)}
              addQty={() => this.addQty(item, index)}
              addToCart = {() => this.addToCart(item,index)}
              GoToCart = {() => this.GoToCart()}
            />
           
          )}
          keyExtractor={item => item.ProductTableID.toString()}
        />
      </View>
              </ScrollView>
      </View>
    );
  }
}
class ListItemData extends React.Component {
  render() {
    const { item } = this.props;

    return (
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

        <View style={styles.horizontal_view}>
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
        </View>
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
         <View style={styles.horizontal_view}>
       <Text style={styles.txtStyle_fourteen}>
           Quantity :     
          </Text>
        <TouchableOpacity style={styles.btnBackgroundAdd} onPress={ this.props.subtractQty} >
            <Text style={styles.txtStyle_fourteen}>-</Text>
        </TouchableOpacity>
        <Text style={styles.txtStyle_sixteenQty} >
        {item.Qty }
        </Text>
        <TouchableOpacity style={styles.btnBackgroundSub} onPress={ this.props.addQty} >

            <Text style={styles.txtStyle_fourteen}>+</Text>
        </TouchableOpacity>
        </View>
        <View style={styles.horizontal_view}>
           <Text style={styles.txtStyle_fourteen}>
           Total : 
          </Text>
        <Text style={styles.txtStyle_sixteen}>
        { (item.MRP) * (item.Qty) }
        </Text>
        </View>
        <View style={{ width : '100%',alignItems: 'center',justifyContent: 'center'}} >
        { item.AddedToCartFlag == false ?
          <TouchableOpacity style={styles.btnBackground} onPress={this.props.addToCart} 
        >
            <Text style={styles.txtStyle_fourteen}>Add to Cart</Text>
        </TouchableOpacity>
         :
         <TouchableOpacity style={styles.blueBtnBackground} onPress={this.props.GoToCart} 
        >
            <Text style={styles.txtStyle_fourteen}>Go to Cart</Text>
        </TouchableOpacity>
          }
       
        </View> 
    </View> 
    )
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
    backgroundColor: '#FFB367',
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
        backgroundColor:'#FFB367',
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

export default connect(mapStateToProps, mapDispatchToProps)(AddToCartShopkeeper);