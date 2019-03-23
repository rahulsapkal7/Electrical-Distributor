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
import AlertsPageShopkeeper from '../shopkeeper/AlertsPageShopkeeper.js';
import OrderHistoryShopkeeper from '../shopkeeper/OrderHistoryShopkeeper.js';
import PendingOrdersDistributor from '../distributor/PendingOrdersDistributor.js';
import PendingDispatchOrdersDistributor from '../distributor/PendingDispatchOrdersDistributor.js';

import VerifiedCustomers from '../distributor/VerifiedCustomers.js';


const Stack = createStackNavigator({
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

export default createAppContainer(Stack);



