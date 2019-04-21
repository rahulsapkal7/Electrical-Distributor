import React, {Component} from 'react';
import {Platform, StyleSheet,AsyncStorage,Alert,BackHandler, ImageBackground,TextInput,Text, View,ScrollView,Button,ToolbarAndroid,Image,TouchableOpacity,FlatList,TouchableWithoutFeedback} from 'react-native'; 
// import Cards from "./Cards.js"; 
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Header from '../../common/header';
import Home_header from '../../common/home_header';
import { Swiper, TitleBar, TabBar } from 'react-native-awesome-viewpager';
import {UserData  } from '../../redux/actions/UserData_action';
import {cartData } from '../../redux/actions/getCart_action';
import {CartCountData } from '../../redux/actions/CartCountData_action';
import {api} from '../../common/api';
import Loader from '../../common/Loader.js';
import {NavigationActions } from 'react-navigation';
import ImageSlider from 'react-native-image-slider';
// import { Drawer } from 'native-base';
import SideMenu from 'react-native-side-menu';
import Menu from '../../common/Menu.js';
import {  Icon } from 'native-base';

 class ShopkeeperHomePage2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading : false,
      scrollEnabled: true,
      type: 1,
      isOpen : false,
      myCartCount : 0,
      productSearchText : '',
      ImageSliderData : [],
      ShopkeeperName : 'Welcome',
      screenName : "ShopkeeperHomePage2"
    }
    this.toggleMenu = this
    .toggleMenu
    .bind(this);
    this.searchProduct = this
    .searchProduct
    .bind(this);
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
    console.log("props ShopkeeperHomePage2 are --> ",JSON.stringify(props));
  }
  componentWillReceiveProps(newProps){
    // console.log(JSON.stringify(newProps));
    console.log(JSON.stringify('newProps inside home',newProps));
    
     this.setState({
      myCartCount : newProps.cartData
      });
  }
  componentWillMount() {
    console.log('cartData ://' + this.props.cartData);
    
      AsyncStorage
          .getItem("@shopkeeperId:key")
          .then((value) => {
            console.log("value --> ",value);
            if (value != null) {}
            this.props.UserData(value);
            // Globals.cusId = value;
            console.log('Globals.cusId://' + value);
            // setTimeout(() => {
            //   this.setState({isLoading: false});
            // }, 5);
          })
          AsyncStorage
          .getItem("@shopkeeperName:key")
          .then((value) => {
            console.log("value --> ",value);
            if (value != null) {}
            this.setState({ShopkeeperName: value});
            
            console.log('Globals.cusId://' + value);
            // setTimeout(() => {
            //   this.setState({isLoading: false});
            // }, 5);
          })
          
          AsyncStorage
          .getItem("@shopkeeperCartCount")
          .then((value) => {
            console.log("shopkeeperCartCount value --> ",value);
            if (value != null) {}
            // this.setState({
            //   ShopkeeperName : value
            // })
            
            console.log('Globals.shopkeeperCartCount://' + value);
           
          })
          
          BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
          
  }
  
componentWillUnmount() {
  console.log('inside will unmount method ');
 
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
}

handleBackButtonClick() {
  
  console.log('this.props.navigation.state.routeName -->',this.props.navigation)

    console.log("android back press",this.state.screenName);
    BackHandler.exitApp();
  
 
  // return false;
  // this.exitApp();
}

  componentDidMount() {
    // BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
    const url = api() + 'ImageSlideShow.php';
    console.log(url);
   
   this.setState({loading: true});
  
   
   fetch(url,{method: 'post'})
       .then(response => response.json())
       .then(res => {
         console.log("response is",res);
         console.log("response is",JSON.stringify(res));
      
         if(res.status){
           var imgArr = [];
           res.data.forEach((item) => {
            imgArr.push(item.DisplayImage);
          })
          console.log('imgArr --> ',imgArr);
           this.setState({
             ImageSliderData: imgArr
             });
             console.log("after set ",this.state);
          this.setState({loading: false});

         }else{
          //  Alert.alert('My Profile', "Something went wrong");
           this.setState({loading: false});
         }
           
       })
       .catch(error => {

           console.log('error:' + (error));
           this.setState({error, loading: false});
       });
  }
  
  

  _renderItem = ({ item }) => {
    return (
      <TouchableWithoutFeedback onPress={ () => this.actionOnRow(item)}>
      <View
        style={styles.verticalContainer}>
        <Text style={styles.textbtn}>{item.menuName}</Text>
      </View>
      </TouchableWithoutFeedback>
    );
  };
  _renderItemBG = ({ item }) => {
    return (
      
      <TouchableWithoutFeedback onPress={ () =>  this.actionOnRow(item)}>
      <View
        style={styles.verticalContainer1}>
      <ImageBackground source={item.backgroundImg} style={{width: 60,height:60,opacity :1}}>
      </ImageBackground> 
      <Text style={styles.textbtn}>{item.menuName}</Text>
      </View>
      </TouchableWithoutFeedback>
    );
  };
  actionOnRow(item) {
    if(item.menuName=='Alerts'){
      this.props.navigation.navigate('AlertsPageShopkeeper')
    }else if(item.menuName=='My profile'){
      this.props.navigation.navigate('MyProfileShopkeeper')
    }else if(item.menuName=='Order History'){
      this.props.navigation.navigate('OrderHistoryShopkeeper')
    }else if(item.menuName=='Buy'){
      this.props.navigation.navigate('BuyProductsBrandList')
    }else if(item.menuName=='Offers'){
      this.props.navigation.navigate('ViewOfferImageByCustomer')
    }
 }

 toggleMenu() {
  this.setState({
    isOpen: !this.state.isOpen
  });
}
searchProduct (){
  if (this.state.productSearchText == '') {
    Alert.alert('Home', "Please enter product name first");
  } else {
    const url = api() + 'SearchProduct.php';
    console.log(url);
   this.setState({loading: true});
   var data = new FormData();
   data.append('word', this.state.productSearchText ),
   console.log("data before hit ",JSON.stringify(data) );
   fetch(url,{method: 'post',body:data})
       .then(response => response.json())
       .then(res => {
         console.log("response is",res);
         this.setState({loading: false});
         console.log("response is",JSON.stringify(res));
         if(res.status){
          //  Alert.alert('My Profile', res.message,[{text: 'OK', 
          //  onPress: () => {
          //      console.log('OK Pressed');
          //      this.props.navigation.goBack(null)}}]
          //  , {cancelable: false},);
          console.log('res is',res);
          this.setState({
            productSearchText : ''
          })
          this.props.navigation.navigate('AddToCartShopkeeper', { data : {BrandCategoryTableID : '' , SubCategoryTableID : '', searchProductData : res.data} })
           
         }else{
           Alert.alert('Home', res.message);
         }
           
       })
       .catch(error => {

           console.log('error:' + (error));
           this.setState({ loading: false});
       });
  }
}
updateMenuState(isOpen) {
  this.setState({isOpen});
}

  render() {
    var menu = <Menu Name = {this.state.ShopkeeperName} NavigationToScreen={(screen) => {this.props.navigation.navigate(screen);this.setState({isOpen : false})}}  
     Logout = {()=>{ AsyncStorage.removeItem('@shopkeeperId:key'); this.setState({isOpen : false}) ;this.props.navigation.navigate('Login'); }}
     />;
    
    return (
      <SideMenu
      menu={menu}
      isOpen = {this.state.isOpen}
      
      onChange={isOpen => this.updateMenuState(isOpen)}>
     
        <View style={styles.container}>
         <Home_header  menu = { () => {  this.toggleMenu() ;
                        console.log("Open Menu",this.state.isOpen) }}  
                title={'PROTON ENTERPRISE'} 
                cartCount = { this.props.CartCount && this.props.CartCount > 0 ? this.props.CartCount : 0  }
                GoToCart = {() =>  this.props.navigation.navigate('MyCartShopkeeper')}
                showSearch = {true}
                gotoSearchScreens = {() => this.props.navigation.navigate('SearchProduct') }
                />
                  <Loader visible={this.state.loading}/>
                  {/* <View style={styles.searchcontainer}> 
                  <TextInput style={styles.editbox} placeholder={'Please enter product name'} placeholderTextColor={'#ddd'} onChangeText={(text) => this.setState({productSearchText: text})} value={this.state.productSearchText}
                ></TextInput>
                  <TouchableOpacity style={styles.Backcontainer} onPress={this.searchProduct}>
                  <Icon name='search'  style={{ color: "black" }} />
                   </TouchableOpacity>
               
                  </View> */}
           <View style={styles.firstContainer}>
           <FlatList
          data={[{ menuName: 'Order History',backgroundImg : require('../../assets/images/history.png') }
          , { menuName: 'Offers' ,backgroundImg : require('../../assets/images/Sale.png') }
          , { menuName: 'Buy' ,backgroundImg : require('../../assets/images/Buy.png') }]}
          renderItem={this._renderItemBG}
          horizontal={true}
          
        ItemSeparatorComponent={() => <View style={{margin: 4}}/>}
        />
        {/* <TouchableWithoutFeedback onPress={ () =>  this.props.navigation.navigate('OrderHistoryShopkeeper')}>
     
      <ImageBackground source={require('../../assets/images/history.png')} style={{width: 100}}>
    
  </ImageBackground>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={ () =>  this.props.navigation.navigate('ViewOfferImageByCustomer')}>
      <ImageBackground source={require('../../assets/images/history.png')} style={{width: 100}}>
      </ImageBackground>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={ () =>  this.props.navigation.navigate('BuyProductsBrandList')}>
      <ImageBackground source={require('../../assets/images/history.png')} style={{width: 100}}>
      </ImageBackground>
      </TouchableWithoutFeedback> */}
               </View>
               <View style={styles.secondContainer}>
               <ImageSlider autoPlayWithInterval={3000}
                images ={this.state.ImageSliderData}
      // images={[require('../../assets/homeSliderImage/slide1.jpeg'),
      //          require('../../assets/homeSliderImage/slide2.jpeg')  ]}
                onPress={({ index,image }) => console.log("index is ",index," image url",image)}
                
     />
               {/* <Image source={require('../../assets/images/offer1.jpg')} style={styles.backgroundImage}>
                 
                 </Image> */}
                {/* <Swiper
            ref='ViewPager'
            loop={true}
            autoplay={true}
            interval={2000}
            onPageScroll={(e) => console.log(e, 'onPageScroll')}
            onPageScrollStateChanged={(e) => console.log(e, 'onPageScrollStateChanged')}
            onPageSelected={(e) => console.log(e, 'onPageSelected')}
            scrollEnabled={this.state.scrollEnabled}
            style={styles.container}>
            
            <View style={{ backgroundColor: 'red', padding: 0.5 }}> 
            
            </View> 
            <Image source={require('../../assets/images/isco_one.jpg')} style={styles.backgroundImage}>
                 
                 </Image>
            <Image source={require('../../assets/images/isco_two.jpg')} style={styles.backgroundImage}>
                 
            </Image>
          </Swiper > */}
               </View>
               <View style={styles.thirdContainer}>

               {/* <Image source={require('../../assets/homeLogo/Cresent.png')} style={styles.backgroundLogoImage}>
                 
                 </Image>
<Image source={require('../../assets/homeLogo/GM.png')} style={styles.backgroundLogoImage}>
  
  </Image>
<Image source={require('../../assets/homeLogo/Magic.png')} style={styles.backgroundLogoImage}>
  
  </Image> */}

<Image source={require('../../assets/homeLogo/Ople.png')} style={styles.backgroundLogoImage}>
  
  </Image>

  {/* <View style={styles.horizontalLine}></View> */}
  <View
  style={{
    height: 100,
          width: 3,
          backgroundColor: '#4183DA'
  }}
/>
<Image source={require('../../assets/homeLogo/Svarochi.png')} style={styles.backgroundLogoImage}>
  
  </Image>

               </View>
        </View>
        </SideMenu>
    );
}
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center', 
  },
  horizontalLine:{
      backgroundColor:'#4f4f4f',
      height:window.height,
      width:1, 
  },
  firstContainer:{
      flex:2,
      justifyContent: 'center',
      // flexDirection:'row',
  },
  secondContainer:{
      flex:6,
      // backgroundColor: 'rgba(255,255,255,0.3)',
      // // borderRadius: 25,
      // paddingHorizontal: 10,
      // color: 'white',
  },
  thirdContainer:{
      flex:2, 
      flexDirection:'row',
      alignItems: 'center',
      justifyContent: 'center',
  },
  verticalContainer:{
      justifyContent:'center',
      alignItems:'center',
      borderColor:'#ddd',
      borderWidth:1,
      width:100,
      flex:1,
      margin:10,
      borderRadius:2,
      shadowColor:'#000',
      shadowOpacity:0.5,
      shadowRadius:5,
      elevation:5,
      borderColor:'#ddd',
      flexDirection:'column'
  },
  verticalContainer1:{
    justifyContent:'center',
    alignItems:'center',
    // borderColor:'#ddd',
    // borderWidth:1,
    width:100,
    flex:1,
    // borderRadius:2,
    // shadowColor:'#000',
    // shadowOpacity:0.5,
    // shadowRadius:5,
    elevation:5,
    // borderColor:'#ddd',
    flexDirection:'column',
    // margin:5,
},
  logotext: {
      marginVertical: 25,
      fontSize: 22,
      color: 'black'
  },


  textbtn: {
      fontSize: 16, 
      color: 'black', 
      justifyContent:'center',
      alignItems:'center',

  },
  backgroundImage: {
    // width: 100,
    // height:100,
      flex: 1,
      // resizeMode: 'cover', // or 'stretch'
  },
  backgroundLogoImage: {
      flex: 1,
      width:100,
      height:100,
      margin:10,
      resizeMode: 'stretch', // or 'stretch'
  },
  btnBackground: {
      backgroundColor: '#1c313a',
      borderRadius: 25,
      paddingVertical: 10,
      marginVertical: 20,
      width: 300,
  },
  searchcontainer: {
    flexDirection: 'row',
    flex : 1,
   
    paddingLeft : 10,
    width: '100%',
    // backgroundColor: '#7dca20',
    // alignItems: 'center',
    // borderColor : "yellow",     borderWidth : 1,
  },
  editbox: {
    width: 300,
    height: 40, 
    borderRadius: 5,
    borderColor: 'black',
    borderWidth:1,
    paddingHorizontal: 10,
    color: 'black',
    marginVertical: 10,
    marginBottom:15
},
Backcontainer: {
  width: '15%',
  height: 40,
  marginVertical: 10,
  marginBottom:15,
  paddingHorizontal: 10, 
  // alignItems: 'center'
  
},
});
const mapStateToProps = (state, ownProps) => {
  console.log('state:' + JSON.stringify(state));
  console.log('cartData :' + JSON.stringify(state.getCartred));
  console.log('cartData length :' + state.getCartred.length);
  console.log('ownProps:' + JSON.stringify(ownProps));
  console.log('CartCount @@@ :' + state.CartCountData_red.CartCount);
  
  // return { cartData : state.getCartred}
  return {UserId: state.UserData_red.UserId , cartData : state.getCartred , CartCount: state.CartCountData_red.CartCount}
  
}

const mapDispatchToProps = dispatch => (bindActionCreators({
  UserData ,cartData, CartCountData
}, dispatch));

export default connect(mapStateToProps, mapDispatchToProps)(ShopkeeperHomePage2);