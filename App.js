import React, {Component} from 'react';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import {  Alert } from 'react-native';
import { AsyncStorage } from 'react-native';
import {Provider} from 'react-redux';
import Main from './app/components/Root/Main';
import configureStore from './app/configureStore';
import SplashScreen from 'react-native-splash-screen'
const store = configureStore;
import FCM,{NotificationActionType} from 'react-native-fcm';
import { registerKilledListener, registerAppListener } from "./Listeners";
import firebaseClient from "./FirebaseClient";
// import firebase from 'react-native-firebase';

// test cpmment
// registerKilledListener();
export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      token: "",
      tokenCopyFeedback: ""
    };
  }
  async componentDidMount() {
    // do stuff while splash screen is shown
      // After having done stuff (such as async tasks) hide the splash screen
      SplashScreen.hide();
      // this.checkPermission();
      // this.createNotificationListeners(); //add this line
      FCM.getFCMToken().then(token => {
        console.log("push token is1 -->: " + token);
        // Alert.alert('App',"push token is "+token);
        if(token){
            AsyncStorage.setItem("fcm_id", token);
            this.setState({token : token})
        }
        // store fcm token in your server
    });
    if (this.state.token == null || this.state.token == "") {
      FCM.getFCMToken().then(token => {
        console.log("push token is2 -->: " + token);
        // Alert.alert('App',"push token is "+token);
        if(token){
            AsyncStorage.setItem("fcm_id", token);
            this.setState({token : token})
        }
        // store fcm token in your server
    });
    }

    FCM.on(FCMEvent.RefreshToken, token => {
      console.log("TOKEN (refreshUnsubscribe)", token);
      AsyncStorage.setItem("fcm_id", token);
      this.setState({token : token})
    });
    //
  //FCM.createNotificationChannel is mandatory for Android targeting >=8. Otherwise you won't see any notification
  FCM.createNotificationChannel({
    id: 'default',
    name: 'Default',
    description: 'used for example',
    priority: 'high'
  })
  // registerAppListener(this.props.navigation);
  FCM.getInitialNotification().then(notif => {
    this.setState({
      initNotif: notif
    });
    if (notif && data.AlertType === 'navigate') {
      // setTimeout(() => {
      //   console.log("Navigate to VerifiedCustomers from app.js" );
      //   // this.props.navigation.navigate("VerifiedCustomers");
      // }, 500);
    }
  });

  }
  
 
  render() {    
   return (

      <Provider store={store}>
        <Main/>
      </Provider>

    );
  }
}

