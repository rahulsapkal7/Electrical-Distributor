import React, { Component } from 'react';
import { AppRegistry, FlatList, StyleSheet,ScrollView, Alert, ListItem,Text, View,TouchableOpacity,Image } from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
// import Header from '../../common/header';
import Home_header from '../../common/home_header';
// import CartCount_header from '../../common/CartCount_header';
import {   Icon, Badge } from 'native-base';

import {api} from '../../common/api';

import {UserData } from '../../redux/actions/UserData_action';
import {cartData } from '../../redux/actions/getCart_action';
import commonStyles from '../../common/commonStyle';
import {CartCountData } from '../../redux/actions/CartCountData_action';

import SideMenu from 'react-native-side-menu';
import Menu from '../../common/Menu.js';

import {NavigationActions} from 'react-navigation';
import Loader from '../../common/Loader.js';
var ThisView = null;


 class MyCartShopkeeper extends Component {
  

  constructor(props) {
    super(props);
   
    console.log('inside Buy Product Detail ',props);
    ThisView = this
    this.state = {
      loading : false,
      isOpen : false,
      MyCartData : [],
      
    }
    this.toggleMenu = this
    .toggleMenu
    .bind(this);
    this.addQty = this
    .addQty
    .bind(this);
    this.subtractQty = this
    .subtractQty
    .bind(this);
    this.RemoveFromCart = this
    .RemoveFromCart
    .bind(this);
   
    
    console.log("props are --> ",JSON.stringify(props));
    console.log("state are --> ",JSON.stringify(this.state));
    
   
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      MyCartData: nextProps.cartData,
    });
    console.log("inside componentWillReceiveProps ",JSON.stringify(this.state) )
  }

  componentDidMount() {
       console.log("inside componentDidMount this.state.MyCartData ",this.state.MyCartData);
      //  this.props.CartCountData(this.state.addToCartData.length);
      //  console.log("after update cart count ",this.props.CartCountData);
      }
      
      componentWillMount () {
        this.ViewCartData();
      }
      ViewCartData = () =>{
        const url = api() + 'ViewCart.php';
         console.log(url);
        
        this.setState({loading: true});
        var data = new FormData();
        console.log("this.props.UserId",this.props.UserId);
        data.append('UserID',this.props.UserId ),
        fetch(url,{method: 'post',body: data})
            .then(response => response.json())
            .then(res => {
              console.log("response is inside alerts page ",JSON.stringify(res));
              if(res.status){
                this.setState({
                  MyCartData: res.data,
                  loading : false
                });
                console.log("length is ",res.data.length);
                console.log("this.state.MyCartData.length ",this.state.MyCartData.length);
                // console.log("this.props.this.props.cartData",this.props.cartData);
               
                // AsyncStorage.setItem('@shopkeeperCartCount', this.state.MyCartData.length); 
                // this.props.CartCountData(this.state.MyCartData.length);
                // console.log("this.state.MyCartData.length ",this.state.MyCartData.length);
                // console.log("this.props.this.props.cartData",this.props.cartData);
                
              }else{
                Alert.alert('My Cart', "There is no data in the cart currently");
                this.setState({loading: false});
              }
                
            })
            .catch(error => {
    
                //console.log('error:' + (error));
                this.setState({error, loading: false});
            });
    
      }
      
  toggleMenu() {
    console.log("inside componentDidMount this.state.MyCartData ",this.state.MyCartData);
     this.props.CartCountData(this.state.MyCartData.length);
       console.log("after update cart count ",this.props.CartCountData);
    
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
      
      addQty = (item,index) =>{
        console.log("on press addQty index",index);
        console.log("on press addQty item",item);
        const MyCartData = [...this.state.MyCartData];
        MyCartData[index].Quantity = parseInt(MyCartData[index].Quantity) + 1 ;
        this.setState({ MyCartData });
          console.log("on press addQty",this.state.MyCartData[index]);
          console.log("on press addQty",this.state.MyCartData);
         
      }
      subtractQty = (item,index) =>{
        console.log("on press subtractQty index",index);
        console.log("on press subtractQty item",item);
        console.log("on press subtractQty",this.state.MyCartData[index].Quantity);
        
        if (this.state.MyCartData[index].Quantity == 0) {
          Alert.alert('Buy Product', "Below 0 not allow");
        } else {
          const MyCartData = [...this.state.MyCartData];
          MyCartData[index].Quantity = parseInt(MyCartData[index].Quantity) - 1 ;
          // MyCartData[index].Quantity -= 1;
          this.setState({ MyCartData })
         
        }
      }

      RemoveFromCart = (item,index) =>{
       
          console.log("on press addToCart index",index);
          console.log("on press addToCart item",item);
          console.log("on press addToCart this.props.cartData ",this.state.MyCartData );
          var arr = this.state.MyCartData;
          arr.splice(index,1);
          this.setState({ MyCartData :  arr})
          console.log('after add to cart ',this.state.MyCartData);
          const MyCartData = [...this.state.MyCartData];
          // MyCartData[index].AddedToCartFlag = true;
          this.setState({ MyCartData })
        
        
      
        
       
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
      

      placeOrder(){
        const url = api() + 'AddOrder.php';
        var data = new FormData();
        console.log("this.props.UserId",this.props.UserId);
        data.append('UserID',this.props.UserId ),
        fetch(url,{method: 'post',body: data})
            .then(response => response.json())
            .then(res => {
              console.log("response is inside alerts page ",JSON.stringify(res));
              if(res.status){
                Alert.alert('My Profile', res.message,[{text: 'OK', 
                onPress: () => {
                    console.log('OK Pressed');
                    this.props.navigation.navigate('ShopkeeperHomePage2');
                    // this.props.navigation.goBack(null)
                  }}]
                , {cancelable: false},);
              }else{
                Alert.alert('My Cart', "Something went wrong");
              }
                
            })
            .catch(error => {
    
                //console.log('error:' + (error));
                this.setState({error, loading: false});
            });
      }
  

  render() {
    var menu = <Menu Name = {this.state.ShopkeeperName} NavigationToScreen={(screen) => {this.props.navigation.navigate(screen);this.setState({isOpen : false})}}  
     Logout = {()=>{ AsyncStorage.removeItem('@shopkeeperId:key'); this.props.navigation.navigate('Login'); }}
     />;
    return (
      <SideMenu
      menu={menu}
      isOpen = {this.state.isOpen}
      onChange={isOpen => this.setState({isOpen})}>
    <View style={styles.parentcontainer}>
    {/* <CartCount_header
                title={'MY CART'}
                cartCount = { this.props.CartCount && this.props.CartCount > 0 ? this.props.CartCount : 0 }
                GoToCart = {() => {} }
                back={() => {
                this
                  .props
                  .navigation
                  .goBack(null)
              }}/> */}
              <Home_header  menu = { () => {  this.toggleMenu() ;
                        console.log("Open Menu",this.state.isOpen) }}  
                title={'MY CART'} 
                cartCount = { this.state.MyCartData && this.state.MyCartData.length > 0 ? this.state.MyCartData.length : 0  }
                
                />
             
             
   <Loader visible={this.state.loading}/>
                <ScrollView contentContainerStyle={{
                width: window.width
              }}>
      <View style={styles.container}>
{ this.state.MyCartData.length > 0 ? 

  <View>
 <FlatList
        data={this.state.MyCartData}
          renderItem={({ item, index }) => (
            <ListItemData
              item={item}
              subtractQty={() => this.subtractQty(item, index)}
              addQty={() => this.addQty(item, index)}
              RemoveFromCart = {() => this.RemoveFromCart(item,index)}
              
            />
           
          )}
          keyExtractor={item => item.ProductTableID.toString()}
        />

        <TouchableOpacity onPress= {()=> this.placeOrder()} style={commonStyles.btnBackground}>
                                  <Text style={commonStyles.textbtn}>Place order</Text>
                              </TouchableOpacity>

                              </View>
        : 
        <View style={styles.emptyCartContainar} >
        
        <Text style={styles.txtStyle_fourteen}>
          Your Shopping Cart is empty !
          </Text>
          <Text style={styles.txtStyle_fourteen}>
          Add items to it now
          </Text>
          {/* <TouchableOpacity style={styles.btnBackground} onPress={ () => this.props.navigation.navigate('BuyProductsBrandList',) } 
        >
            <Text style={styles.txtStyle_fourteen}>Shop Now</Text>
        </TouchableOpacity> */}
        </View>
         }
      </View>
              </ScrollView>
      </View>
      </SideMenu>
    );
  }
}
class ListItemData extends React.Component {
  render() {
    const { item } = this.props;

    return (
      <View style={styles.CartContainer}>
     
    <Image
              source={{ uri: item.Image }}
              style={{ width: 100, height:100 }}
              resizeMode="cover"
            />
           
      <View style={styles.productParent} >
        <Text style={styles.txtStyle_sixteen}>
        {item.ProductCode }
        </Text>
        <Text style={styles.txtStyle_sixteen}>
        {item.ProductDes }
        </Text>
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
        {/* <TouchableOpacity style={styles.btnBackgroundAdd} onPress={ this.props.addQty} >
            <Text style={styles.txtStyle_fourteen}>+</Text>
        </TouchableOpacity> */}
        <Text style={styles.txtStyle_sixteenQty} >
        {item.Quantity }
        </Text>
        {/* <TouchableOpacity style={styles.btnBackgroundSub} onPress={ this.props.subtractQty} >

            <Text style={styles.txtStyle_fourteen}>-</Text>
        </TouchableOpacity> */}
       
        </View>
        <View style={styles.horizontal_view}>
           <Text style={styles.txtStyle_fourteen}>
           Total : 
          </Text>
        <Text style={styles.txtStyle_sixteen}>
        { (item.MRP) * (item.Quantity) }
        </Text>
        </View>
        <View style={{ width : '100%',alignItems: 'center',justifyContent: 'center'}} >
       
          {/* <TouchableOpacity style={styles.btnBackground} onPress={this.props.RemoveFromCart} 
        >
            <Text style={styles.txtStyle_fourteen}>Remove from Cart</Text>
        </TouchableOpacity> */}
        
       
        </View> 
    </View> 
    <View>
             {/* <TouchableOpacity style={{ justifyContent: 'flex-end'}}  onPress={this.props.RemoveFromCart} >
        <Icon name='trash' style={{ color: "red" }} />
         </TouchableOpacity> */}
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
    backgroundColor: 'white',
    height: '100%',  
  },
  productParent:{
    flex:1,
    flexDirection: 'column', 
    backgroundColor: '#4db6ac',
    marginLeft:10
    // borderRadius:2,
    // borderColor: 'red',
    // margin : 10,
    // padding : 15,
    // borderWidth:1,
    // borderRadius:2,
    // borderColor: '#ddd',
    
  },
  emptyCartContainar:{
    flex:1,
    flexDirection: 'column', 
    backgroundColor: '#4db6ac',
    alignItems: 'center',
    justifyContent: 'center', 
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
   alignItems: 'center',
   justifyContent: 'center',
   
   
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
  CartContainer : {
    flexDirection: 'row',
    backgroundColor: '#4db6ac',
     alignItems: 'center',
     justifyContent: 'center', 
    borderRadius:2,
    borderColor: 'red',
    margin : 10,
    padding : 15,
    borderWidth:1,
    borderRadius:2,
    borderColor: '#ddd', 
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
  
  return {UserId: state.UserData_red.UserId , cartData : state.getCartred ,CartCount: state.CartCountData_red.CartCount }
  
  // return {}
}

const mapDispatchToProps = dispatch => (bindActionCreators({
  UserData ,cartData ,CartCountData
}, dispatch));

export default connect(mapStateToProps, mapDispatchToProps)(MyCartShopkeeper);