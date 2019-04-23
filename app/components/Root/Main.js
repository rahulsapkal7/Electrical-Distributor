import React, { Component } from 'react';
import {
  AppRegistry,
  Alert,
  StyleSheet,
  TouchableOpacity,
  AsyncStorage,
  Text,
  Image,
  ImageBackground,
  View
} from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import { createStackNavigator, createAppContainer } from "react-navigation";
import Login from '../InitialScreen/Login.js';
import Register from '../InitialScreen/Register.js';
import ShopkeeperHomePage from '../shopkeeper/ShopkeeperHomePage.js';
import ShopkeeperHomePage2 from '../shopkeeper/ShopkeeperHomePage2.js';
import OtpScreen from '../shopkeeper/OtpScreen.js';
import DistributorHomePage from '../distributor/DistributorHomePage.js';
import DistributorHomePage2 from '../distributor/DistributorHomePage2.js';

import MyProfileShopkeeper from '../shopkeeper/MyProfileShopkeeper.js';
import OffersShopkeeper from '../shopkeeper/OffersShopkeeper.js';
import BrandWiseOffersShopkeeper from '../shopkeeper/BrandWiseOffersShopkeeper.js';
import ProtonOffersTypes from '../shopkeeper/ProtonOffersTypes.js';
import CashWiseOffersShopkeeper from '../shopkeeper/CashWiseOffersShopkeeper.js';
import DealWiseOffersShopkeeper from '../shopkeeper/DealWiseOffersShopkeeper.js';
import CompleteOrderDetails from '../shopkeeper/CompleteOrderDetails.js';


import PDFExample from '../shopkeeper/PDFExample.js';
import BuyProductsShopkeeper from '../shopkeeper/BuyProductsShopkeeper.js';
import BuyProductDetailShopkeeper from '../shopkeeper/BuyProductDetailShopkeeper.js';


import AlertsPageShopkeeper from '../shopkeeper/AlertsPageShopkeeper.js';
import OrderHistoryShopkeeper from '../shopkeeper/OrderHistoryShopkeeper.js';
import PendingOrdersDistributor from '../distributor/PendingOrdersDistributor.js';
import PendingDispatchOrdersDistributor from '../distributor/PendingDispatchOrdersDistributor.js';
import RegisterPage2 from '../InitialScreen/RegisterPage2.js';

import VerifiedCustomers from '../distributor/VerifiedCustomers.js';
import ShopkeeperBrandList from '../shopkeeper/ShopkeeperBrandList.js';
import ViewOfferImageByCustomer from '../shopkeeper/ViewOfferImageByCustomer.js';
import BuyProductsCategoryList from '../shopkeeper/BuyProductsCategoryList.js';
import BuyProductsBrandList from '../shopkeeper/BuyProductsBrandList.js';
import BuyProductsSubCategoryList from '../shopkeeper/BuyProductsSubCategoryList.js';
import AddToCartShopkeeper from '../shopkeeper/AddToCartShopkeeper.js';
import MyCartShopkeeper from '../shopkeeper/MyCartShopkeeper.js';
import SearchProduct from '../shopkeeper/SearchProduct.js';

import ViewCartListDistributor from '../distributor/ViewCartListDistributor.js';
import ViewCartDetailDistributor from '../distributor/ViewCartDetailDistributor.js';
import CommingSoonDistributor from '../distributor/CommingSoonDistributor.js';
import RegistrationOptions from '../distributor/RegistrationOptions.js';
import DisplayProductsDistributor from '../distributor/DisplayProductsDistributor.js';





export const HomeStack = createStackNavigator({
  Login:{
    screen : Login,
    navigationOptions: {
      header: null
    }
    
  },
  Register:{
    screen : Register,
    navigationOptions: {
      header: null
    }
  },
  RegisterPage2 : {
    screen : RegisterPage2,
    navigationOptions: {
      header: null
    }
  },
  ShopkeeperHomePage : {
    screen : ShopkeeperHomePage,
    navigationOptions: {
      header: null
    }
  },
  ShopkeeperHomePage2 : {
    screen : ShopkeeperHomePage2,
    navigationOptions: {
      header: null
    }
  },
  OffersShopkeeper : {
    screen : OffersShopkeeper,
    navigationOptions: {
      header: null
    }
  },
  CashWiseOffersShopkeeper : {
    screen : CashWiseOffersShopkeeper,
    navigationOptions: {
      header: null
    }
  },
  DealWiseOffersShopkeeper : {
    screen : DealWiseOffersShopkeeper,
    navigationOptions: {
      header: null
    }
  },
  ProtonOffersTypes : {
    screen : ProtonOffersTypes,
    navigationOptions: {
      header: null
    }
  },
  BrandWiseOffersShopkeeper : {
    screen : BrandWiseOffersShopkeeper,
    navigationOptions: {
      header: null
    }
  },
  BuyProductsShopkeeper : {
    screen : BuyProductsShopkeeper,
    navigationOptions: {
      header: null
    }
  },
  BuyProductDetailShopkeeper : {
    screen : BuyProductDetailShopkeeper,
    navigationOptions: {
      header: null
    }
  },
  AlertsPageShopkeeper : {
    screen : AlertsPageShopkeeper,
    navigationOptions: {
      header: null
    }
  },
  OtpScreen : {
    screen : OtpScreen,
    navigationOptions: {
      header: null
    }
  },
  DistributorHomePage : {
    screen : DistributorHomePage,
    navigationOptions: {
      header: null
    },
  },
  DistributorHomePage2 : {
    screen : DistributorHomePage2,
    navigationOptions: {
      header: null
    },
  }, 
  MyProfileShopkeeper : {
    screen : MyProfileShopkeeper,
    navigationOptions: {
      header: null
    }
  },
  OrderHistoryShopkeeper : {
    screen : OrderHistoryShopkeeper,
    navigationOptions: {
      header: null
    }
  },
  PendingOrdersDistributor : {
    screen : PendingOrdersDistributor,
    navigationOptions: {
      header: null
    }
  },
  PendingDispatchOrdersDistributor : {
    screen : PendingDispatchOrdersDistributor,
    navigationOptions: {
      header: null
    }
  },
  PDFExample : {
    screen : PDFExample,
    navigationOptions: {
      header: null
    }
  },

  VerifiedCustomers : {
    screen : VerifiedCustomers,
    navigationOptions: {
      header: null
    }
  },
  
  ShopkeeperBrandList : {
    screen : ShopkeeperBrandList,
    navigationOptions: {
      header: null
    }
  },
  ViewOfferImageByCustomer :{
    screen : ViewOfferImageByCustomer,
    navigationOptions: {
      header: null
    }
  },
  BuyProductsCategoryList :{
    screen : BuyProductsCategoryList,
    navigationOptions: {
      header: null
    }
  },
  BuyProductsBrandList :{
    screen : BuyProductsBrandList,
    navigationOptions: {
      header: null
    }
  },
  BuyProductsSubCategoryList :{
    screen : BuyProductsSubCategoryList,
    navigationOptions: {
      header: null
    }
  },
  AddToCartShopkeeper : {
    screen : AddToCartShopkeeper,
    navigationOptions: {
      header: null
    }
  },
  MyCartShopkeeper: {
    screen : MyCartShopkeeper,
    navigationOptions: {
      header: null
    }
  },
  SearchProduct: {
    screen : SearchProduct,
    navigationOptions: {
      header: null
    }
  },
  CompleteOrderDetails: {
    screen : CompleteOrderDetails,
    navigationOptions: {
      header: null
    }
  },
  ViewCartListDistributor : {
    screen : ViewCartListDistributor,
    navigationOptions: {
      header: null
    }
  },
  ViewCartDetailDistributor : {
    screen : ViewCartDetailDistributor,
    navigationOptions: {
      header: null
    }
  },
  CommingSoonDistributor: {
    screen : CommingSoonDistributor,
    navigationOptions: {
      header: null
    }
  },
  RegistrationOptions: {
    screen : RegistrationOptions,
    navigationOptions: {
      header: null
    }
  },
  DisplayProductsDistributor :  {
    screen : DisplayProductsDistributor,
    navigationOptions: {
      header: null
    }
  },
  // },{ initialRouteName: 'Login' })
  },{ initialRouteName: 'ShopkeeperHomePage2' })

  export const DistributorHomeStack = createStackNavigator({
    Login:{
      screen : Login,
      navigationOptions: {
        header: null
      }
      
    },
  
    Register:{
      screen : Register,
      navigationOptions: {
        header: null
      }
    },
    RegisterPage2 : {
      screen : RegisterPage2,
      navigationOptions: {
        header: null
      }
    },
    ShopkeeperHomePage : {
      screen : ShopkeeperHomePage,
      navigationOptions: {
        header: null
      }
    },
    ShopkeeperHomePage2 : {
      screen : ShopkeeperHomePage2,
      navigationOptions: {
        header: null
      }
    },
    OffersShopkeeper : {
      screen : OffersShopkeeper,
      navigationOptions: {
        header: null
      }
    },
    CashWiseOffersShopkeeper : {
      screen : CashWiseOffersShopkeeper,
      navigationOptions: {
        header: null
      }
    },
    DealWiseOffersShopkeeper : {
      screen : DealWiseOffersShopkeeper,
      navigationOptions: {
        header: null
      }
    },
    ProtonOffersTypes : {
      screen : ProtonOffersTypes,
      navigationOptions: {
        header: null
      }
    },
    BrandWiseOffersShopkeeper : {
      screen : BrandWiseOffersShopkeeper,
      navigationOptions: {
        header: null
      }
    },
    BuyProductsShopkeeper : {
      screen : BuyProductsShopkeeper,
      navigationOptions: {
        header: null
      }
    },
    BuyProductDetailShopkeeper : {
      screen : BuyProductDetailShopkeeper,
      navigationOptions: {
        header: null
      }
    },
    AlertsPageShopkeeper : {
      screen : AlertsPageShopkeeper,
      navigationOptions: {
        header: null
      }
    },
    OtpScreen : {
      screen : OtpScreen,
      navigationOptions: {
        header: null
      }
    },
    DistributorHomePage : {
      screen : DistributorHomePage,
      navigationOptions: {
        header: null
      },
    },
    DistributorHomePage2 : {
      screen : DistributorHomePage2,
      navigationOptions: {
        header: null
      },
    }, 
    MyProfileShopkeeper : {
      screen : MyProfileShopkeeper,
      navigationOptions: {
        header: null
      }
    },
    OrderHistoryShopkeeper : {
      screen : OrderHistoryShopkeeper,
      navigationOptions: {
        header: null
      }
    },
    PendingOrdersDistributor : {
      screen : PendingOrdersDistributor,
      navigationOptions: {
        header: null
      }
    },
    PendingDispatchOrdersDistributor : {
      screen : PendingDispatchOrdersDistributor,
      navigationOptions: {
        header: null
      }
    },
    PDFExample : {
      screen : PDFExample,
      navigationOptions: {
        header: null
      }
    },
  
    VerifiedCustomers : {
      screen : VerifiedCustomers,
      navigationOptions: {
        header: null
      }
    },
    
    ShopkeeperBrandList : {
      screen : ShopkeeperBrandList,
      navigationOptions: {
        header: null
      }
    },
    ViewOfferImageByCustomer :{
      screen : ViewOfferImageByCustomer,
      navigationOptions: {
        header: null
      }
    },
    BuyProductsCategoryList :{
      screen : BuyProductsCategoryList,
      navigationOptions: {
        header: null
      }
    },
    BuyProductsBrandList :{
      screen : BuyProductsBrandList,
      navigationOptions: {
        header: null
      }
    },
    BuyProductsSubCategoryList :{
      screen : BuyProductsSubCategoryList,
      navigationOptions: {
        header: null
      }
    },
    AddToCartShopkeeper : {
      screen : AddToCartShopkeeper,
      navigationOptions: {
        header: null
      }
    },
    MyCartShopkeeper: {
      screen : MyCartShopkeeper,
      navigationOptions: {
        header: null
      }
    },
    SearchProduct: {
      screen : SearchProduct,
      navigationOptions: {
        header: null
      }
    },
    CompleteOrderDetails: {
      screen : CompleteOrderDetails,
      navigationOptions: {
        header: null
      }
    },
    ViewCartListDistributor : {
      screen : ViewCartListDistributor,
      navigationOptions: {
        header: null
      }
    },
    ViewCartDetailDistributor : {
      screen : ViewCartDetailDistributor,
      navigationOptions: {
        header: null
      }
    },
    CommingSoonDistributor: {
      screen : CommingSoonDistributor,
      navigationOptions: {
        header: null
      }
    },
    RegistrationOptions: {
      screen : RegistrationOptions,
      navigationOptions: {
        header: null
      }
    },
    DisplayProductsDistributor :  {
      screen : DisplayProductsDistributor,
      navigationOptions: {
        header: null
      }
    },
    // },{ initialRouteName: 'Login' })
    },{ initialRouteName: 'DistributorHomePage2' })

export const LoginStack = createStackNavigator({
  Login:{
    screen : Login,
    navigationOptions: {
      header: null
    }
    
  },

  Register:{
    screen : Register,
    navigationOptions: {
      header: null
    }
  },
  RegisterPage2 : {
    screen : RegisterPage2,
    navigationOptions: {
      header: null
    }
  },
  ShopkeeperHomePage : {
    screen : ShopkeeperHomePage,
    navigationOptions: {
      header: null
    }
  },
  ShopkeeperHomePage2 : {
    screen : ShopkeeperHomePage2,
    navigationOptions: {
      header: null
    }
  },
  OffersShopkeeper : {
    screen : OffersShopkeeper,
    navigationOptions: {
      header: null
    }
  },
  CashWiseOffersShopkeeper : {
    screen : CashWiseOffersShopkeeper,
    navigationOptions: {
      header: null
    }
  },
  DealWiseOffersShopkeeper : {
    screen : DealWiseOffersShopkeeper,
    navigationOptions: {
      header: null
    }
  },
  ProtonOffersTypes : {
    screen : ProtonOffersTypes,
    navigationOptions: {
      header: null
    }
  },
  BrandWiseOffersShopkeeper : {
    screen : BrandWiseOffersShopkeeper,
    navigationOptions: {
      header: null
    }
  },
  BuyProductsShopkeeper : {
    screen : BuyProductsShopkeeper,
    navigationOptions: {
      header: null
    }
  },
  BuyProductDetailShopkeeper : {
    screen : BuyProductDetailShopkeeper,
    navigationOptions: {
      header: null
    }
  },
  AlertsPageShopkeeper : {
    screen : AlertsPageShopkeeper,
    navigationOptions: {
      header: null
    }
  },
  OtpScreen : {
    screen : OtpScreen,
    navigationOptions: {
      header: null
    }
  },
  DistributorHomePage : {
    screen : DistributorHomePage,
    navigationOptions: {
      header: null
    },
  },
  DistributorHomePage2 : {
    screen : DistributorHomePage2,
    navigationOptions: {
      header: null
    },
  },
  MyProfileShopkeeper : {
    screen : MyProfileShopkeeper,
    navigationOptions: {
      header: null
    }
  },
  OrderHistoryShopkeeper : {
    screen : OrderHistoryShopkeeper,
    navigationOptions: {
      header: null
    }
  },
  PendingOrdersDistributor : {
    screen : PendingOrdersDistributor,
    navigationOptions: {
      header: null
    }
  },
  PendingDispatchOrdersDistributor : {
    screen : PendingDispatchOrdersDistributor,
    navigationOptions: {
      header: null
    }
  },
  PDFExample : {
    screen : PDFExample,
    navigationOptions: {
      header: null
    }
  },

  VerifiedCustomers : {
    screen : VerifiedCustomers,
    navigationOptions: {
      header: null
    }
  },
  ShopkeeperBrandList : {
    screen : ShopkeeperBrandList,
    navigationOptions: {
      header: null
    }
  },
  ViewOfferImageByCustomer :{
    screen : ViewOfferImageByCustomer,
    navigationOptions: {
      header: null
    }
  },
  BuyProductsCategoryList :{
    screen : BuyProductsCategoryList,
    navigationOptions: {
      header: null
    }
  },
  BuyProductsBrandList :{
    screen : BuyProductsBrandList,
    navigationOptions: {
      header: null
    }
  },
  BuyProductsSubCategoryList :{
    screen : BuyProductsSubCategoryList,
    navigationOptions: {
      header: null
    }
  },
  AddToCartShopkeeper : {
    screen : AddToCartShopkeeper,
    navigationOptions: {
      header: null
    }
  },
  MyCartShopkeeper: {
    screen : MyCartShopkeeper,
    navigationOptions: {
      header: null
    }
  },
  SearchProduct: {
    screen : SearchProduct,
    navigationOptions: {
      header: null
    }
  },
  CompleteOrderDetails: {
    screen : CompleteOrderDetails,
    navigationOptions: {
      header: null
    }
  },
  ViewCartListDistributor : {
    screen : ViewCartListDistributor,
    navigationOptions: {
      header: null
    }
  },
  ViewCartDetailDistributor : {
    screen : ViewCartDetailDistributor,
    navigationOptions: {
      header: null
    }
  },
  CommingSoonDistributor: {
    screen : CommingSoonDistributor,
    navigationOptions: {
      header: null
    }
  },
  RegistrationOptions: {
    screen : RegistrationOptions,
    navigationOptions: {
      header: null
    }
  },
  DisplayProductsDistributor :  {
    screen : DisplayProductsDistributor,
    navigationOptions: {
      header: null
    }
  },
  },{ initialRouteName: 'Login' })
  // },{ initialRouteName: 'ShopkeeperHomePage2' })
  var UserId = ''; 
  var DistributorUserId = ''
class Main extends Component { 

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    }

  }

  componentWillMount() {

    // AsyncStorage.getItem('@shopkeeperId:key', (err, result) => {
    //   console.log("",result);
    // });

        AsyncStorage
          .getItem("@shopkeeperId:key")
          .then((value) => {
            console.log("value --> ",value);
            UserId = value;
            // Globals.cusId = value;
            console.log('Globals.cusId://' + value);
            setTimeout(() => {
              this.setState({isLoading: false});
            }, 3);
          })
          
          AsyncStorage
          .getItem("@distributorId:key")
          .then((value) => {
            console.log("value --> ",value);
            DistributorUserId = value;
            // Globals.cusId = value;
            console.log('Globals.cusId://' + value);
            setTimeout(() => {
              this.setState({isLoading: false});
            }, 3);
          })

          
      }

  render() { 
    console.log("inside render");
    if (this.state.isLoading) {
      // return       <ImageBackground source={require('../../assets/images/backgroundImg.jpeg')} style={{width: '100%', height: '100%'}} ></ImageBackground>
      return       <View ></View>
      
      ;
    } else {
      console.log("UserId is --> "+ UserId + ' // '  + (UserId === null));
      if (UserId === null && DistributorUserId === null) {
        console.log('LoginStack');
        const AppContainer = createAppContainer(LoginStack);
        return  <AppContainer />
        
      } else if(DistributorUserId === null && UserId != null){
        console.log('HomeStack');
        const AppContainer = createAppContainer(HomeStack);
        return  <AppContainer />
        
      }else {
        console.log('DistributorHomeStack');
        const AppContainer = createAppContainer(DistributorHomeStack);
        return  <AppContainer />
      }
      // 
    }
  }
  }
  // inside back click function
// { const { dispatch, nav } = this.props const stack = nav.routes[0]; if (stack.routes.length === 1) { Alert.alert( 'Exit App', 'Do you want to exit?', [ { text: 'No', onPress: () => { } }, { text: 'Yes', onPress: () => BackHandler.exitApp() }, ], { cancelable: false }) } dispatch({ type: 'Navigation/BACK' }) return true }

  const mapStateToProps = (state, ownProps) => {
  // // console.log('state:' + JSON.stringify(state));
  // return {get_lang_red: state.get_lang_red}
  return {}
}

const mapDispatchToProps = dispatch => (bindActionCreators({
  
  // UserData
  
}, dispatch));

export default connect(mapStateToProps, mapDispatchToProps)(Main);
// export default createAppContainer(Stack);