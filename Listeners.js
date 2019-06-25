import { Platform, AsyncStorage, AppState ,Alert } from 'react-native';

import FCM, {FCMEvent, RemoteNotificationResult, WillPresentNotificationResult, NotificationType, NotificationActionType, NotificationActionOption, NotificationCategoryOption} from "react-native-fcm";

AsyncStorage.getItem('lastNotification').then(data=>{

  if(data){
    if (notif.SourcePackage != undefined && notif.SourcePackage != "" && notif.SourcePackage == "electrical") {
      
    // if notification arrives when app is killed, it should still be logged here
    console.log('last notification', JSON.parse(data));
    AsyncStorage.removeItem('lastNotification');
    if(data.AlertType === 'navigate'){
      setTimeout(()=>{
        console.log("Navigate to VerifiedCustomers from listen.js app kill" );
        
         navigation.navigate('VerifiedCustomers')
      }, 500)
    }
    setTimeout(()=>{
      Alert.alert('Background alert',data.AlertMessage);
      
    }, 500)
  } }
})

// AsyncStorage.getItem('lastMessage').then(data=>{
//   if(data){
//     // if notification arrives when app is killed, it should still be logged here
//     console.log('last message', JSON.parse(data));
//     alert("last message app killed "+data);
//     AsyncStorage.removeItem('lastMessage');
//   }
// })

export function registerKilledListener(){
  // these callback will be triggered even when app is killed
  FCM.on(FCMEvent.Notification, notif => {
    if (notif.SourcePackage != undefined && notif.SourcePackage != "" && notif.SourcePackage == "electrical") {
      
    AsyncStorage.setItem('lastNotification', JSON.stringify(notif));
  //  var notification = notif.notification;
  //  var msg = JSON.parse(notification);
    if(notif.opened_from_tray){
      // setTimeout(()=>{
        // if(notif._actionIdentifier === 'reply'){
        //   if(AppState.currentState !== 'background'){
        //     console.log('User replied '+ JSON.stringify(notif._userText))
        //     Alert.alert('Killed ',"msg is "+JSON.stringify(notif));
        //     // alert('User replied app killed '+ JSON.stringify(notif._userText));
        //   } else {
        //     AsyncStorage.setItem('lastMessage', JSON.stringify(notif._userText));
        //     Alert.alert('Not Killed',"msg is "+JSON.stringify(notif));
            
        //     // alert("User clicked app killed "+JSON.stringify(notif));
        //   }
        // }
        // if(notif._actionIdentifier === 'view'){
        //   // alert("User clicked View in App app killed "+JSON.stringify(notif));
        //   Alert.alert('Killed View',"msg is "+msg.AlertMsg);
        // }
        // if(notif._actionIdentifier === 'dismiss'){
        //   // alert("User clicked Dismiss app killed "+JSON.stringify(notif));
        //   Alert.alert('Killed dismiss',"msg is "+msg.AlertMsg);
          
        // }
      // }, 500)
    } }
  });
}

// these callback will be triggered only when app is foreground or background
export function registerAppListener(navigation){
  FCM.on(FCMEvent.Notification, notif => {
    console.log("Notification triggered background ", JSON.stringify(notif));
    
    if(Platform.OS ==='ios' && notif._notificationType === NotificationType.WillPresent && !notif.local_notification){
      // this notification is only to decide if you want to show the notification when user if in foreground.
      // usually you can ignore it. just decide to show or not.
      notif.finish(WillPresentNotificationResult.All)
      return;
    }

    if(notif.opened_from_tray){
      if (notif.SourcePackage != undefined && notif.SourcePackage != "" && notif.SourcePackage == "electrical") {
      if(notif.AlertType === 'navigate'){
        setTimeout(()=>{
          // alert("Notification Navigate to details--> ");
          // Alert.alert('Background Navigation alert',"msg is "+msg.AlertMsg);
        console.log("Navigate to VerifiedCustomers from listen.js app background" );
        
          navigation.navigate('VerifiedCustomers')
        }, 500)
      }
      setTimeout(()=>{
        Alert.alert('Background alert',notif.AlertMessage);
        
         
       
      }, 500)
    }
  } 
   
  });

  FCM.on(FCMEvent.RefreshToken, token => {
    console.log("TOKEN (refreshUnsubscribe)", token);
  });

  FCM.enableDirectChannel();
  FCM.on(FCMEvent.DirectChannelConnectionChanged, (data) => {
    console.log('direct channel connected' + data);
  });
  setTimeout(function() {
    FCM.isDirectChannelEstablished().then(d => console.log(d));
  }, 1000);
}

