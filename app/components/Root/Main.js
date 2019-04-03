import React, { Component } from 'react';
import {
  AppRegistry,
  Alert,
  StyleSheet,
  TouchableOpacity,
  AsyncStorage,
  Text,
  Image,
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
import MyProfileShopkeeper from '../shopkeeper/MyProfileShopkeeper.js';
import OffersShopkeeper from '../shopkeeper/OffersShopkeeper.js';
import BrandWiseOffersShopkeeper from '../shopkeeper/BrandWiseOffersShopkeeper.js';
import ProtonOffersTypes from '../shopkeeper/ProtonOffersTypes.js';
import CashWiseOffersShopkeeper from '../shopkeeper/CashWiseOffersShopkeeper.js';
import DealWiseOffersShopkeeper from '../shopkeeper/DealWiseOffersShopkeeper.js';


import PDFExample from '../shopkeeper/PDFExample.js';
import BuyProductsShopkeeper from '../shopkeeper/BuyProductsShopkeeper.js';
import BuyProductDetailShopkeeper from '../shopkeeper/BuyProductDetailShopkeeper.js';


import AlertsPageShopkeeper from '../shopkeeper/AlertsPageShopkeeper.js';
import OrderHistoryShopkeeper from '../shopkeeper/OrderHistoryShopkeeper.js';
import PendingOrdersDistributor from '../distributor/PendingOrdersDistributor.js';
import PendingDispatchOrdersDistributor from '../distributor/PendingDispatchOrdersDistributor.js';
import RegisterPage2 from '../InitialScreen/RegisterPage2.js';

import VerifiedCustomers from '../distributor/VerifiedCustomers.js';



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
  
 
  
  // },{ initialRouteName: 'Login' })
  },{ initialRouteName: 'ShopkeeperHomePage2' })


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
 
  
 
  },{ initialRouteName: 'Login' })
  // },{ initialRouteName: 'ShopkeeperHomePage2' })
  var UserId = ''; 

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
            }, 5);
          })
          

          
      }

  render() { 
    console.log("inside render");
    if (this.state.isLoading) {
      return <View></View>;
    } else {
      // Alert.alert('came' +  Globals.Language);
      console.log("UserId is --> "+ UserId + ' // '  + (UserId === null));
      if (UserId === null) {
        console.log('LoginStack');
        const AppContainer = createAppContainer(LoginStack);
        return  <AppContainer />
        // return (createAppContainer(LoginStack)  )
      } else {
        console.log('HomeStack');
        const AppContainer = createAppContainer(HomeStack);
        return  <AppContainer />
        // return (createAppContainer(HomeStack)  )
        // return <HomeStack/>
      }

    }
  }
  }


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



