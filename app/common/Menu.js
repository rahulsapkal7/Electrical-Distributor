import React, {Component} from 'react';

import {
    Dimensions,
    StyleSheet,
    ScrollView,
    View,
    Image,
    Text,TouchableOpacity
} from 'react-native';
import {  Icon } from 'native-base';





// const window = Dimensions.get('window');


const styles = StyleSheet.create({
  menu: {
    flex: 1,
    width: "100%",
    // height: window.height,
    backgroundColor: '#2c2b2b',
    paddingTop: 35,
    flexDirection: 'column'
},

avatarContainer: {
    paddingBottom:20,
    alignItems: 'center',
    // borderColor: "yellow",
    // borderWidth: 1
},
listContainer: {
    flexDirection: 'row',
    alignItems: 'center', // borderColor: "red",
    // borderWidth: 1,
   
    height: 45
},
horizontalLine:{
    backgroundColor:'#4f4f4f',
    height:2,
    width:window.width,
    
},
profileImg: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderColor: "azure",
    borderWidth: 5,
    flex: 2
},
name: {
    color: 'honeydew',
    fontWeight: 'bold',
    fontSize: 26,
    paddingTop: 20
},
eamil: {
    color: 'honeydew',
    fontSize: 15,
    paddingTop: 20
},
iconImage: {
    // textAlign : "center", borderColor : "yellow", borderWidth : 1,
    paddingLeft:20,
    fontSize: 25,
    color: "white",
    fontWeight: 'bold'
},
TxtIP: {
paddingLeft:20,
    fontSize: 25,
    color: "white",
    fontWeight: 'bold'
},
item: {
    fontSize: 20,
    color: 'honeydew',
    fontWeight: 'bold',
    paddingLeft: 15
}
  //   menu: {
  //       flex: 1,
  //       // width: "100%",
  //       // height: window.height,
  //       backgroundColor: '#eff0f1',
        
  //       // backgroundColor: '#A7D952',
  //       paddingTop: 35,
  //       flexDirection: 'column'
  //   },

  //   avatarContainer: {
  //       paddingBottom:20,
  //       alignItems: 'center',
  //       // borderColor: "yellow",
  //       // borderWidth: 1
  //   },
  //   listContainer: {
  //       flexDirection: 'row',
  //       alignItems: 'center', // borderColor: "red",
  //       // borderWidth: 1,
       
  //       height: 45
  //   },
  //   horizontalLine:{
  //       backgroundColor:'#4f4f4f',
  //       height:2,
  //       width:'100%',
        
  //   },
  //   profileImg: {
  //       width: 100,
  //       height: 100,
  //       borderRadius: 50,
  //       borderColor: "black",
  //       borderWidth: 2,
  //       flex: 2
  //   },
  //   name: {
  //       color: 'black',
  //       fontSize: 15,
  //       paddingTop: 15
  //   },
  //   eamil: {
  //       color: 'honeydew',
  //       fontSize: 15,
  //       paddingTop: 20
  //   },
  //   iconImage: {
  //       // textAlign : "center", borderColor : "yellow", borderWidth : 1,
  //       paddingLeft:20,
  //       fontSize: 25,
  //       color: "white",
  //       fontWeight: 'bold'
  //   },
  //   TxtIP: {
  //  paddingLeft:20,
  //       fontSize: 25,
  //       color: "white",
  //       fontWeight: 'bold'
  // },
  //   item: {
  //       fontSize: 15,
  //       color: 'black',
       
  //       paddingLeft: 15
  //   }
});

  export default class Menu extends Component {

       constructor(props) {
        super(props);
        this.GoTo = this
            .GoTo
            .bind(this);
            
          
        this.state = {
           
            profile_pic: require('../assets/images/default-profile.png'),
            
        }
    }
    GoTo(screen)
    {
this.props.NavigationToScreen(screen)
    }
  render() {
           
//  console.log("hello"+JSON.stringify(this.props.userData));
 var a = null;

    a =require('../assets/images/default-profile.png');

    return (
        <ScrollView  style={styles.menu}>
            <View style={styles.avatarContainer}>
                <Image style={styles.profileImg}  source={a}/>
                <Text style={styles.name}>{this.props.Name}</Text>
            </View>
            <View style={styles.horizontalLine}></View>
             <TouchableOpacity style={styles.listContainer} onPress={ () => this.props.NavigationToScreen('ShopkeeperHomePage2') } >
             <Icon name="home" style={styles.iconImage}/>
                <Text  style={styles.item}> Home </Text>
                
            </TouchableOpacity>
            <View style={styles.horizontalLine}></View>
            
             <TouchableOpacity style={styles.listContainer} onPress={ () => this.props.NavigationToScreen('MyProfileShopkeeper') } >
             <Icon name="people" style={styles.iconImage}/>
                <Text  style={styles.item}>
                    My Profile
                </Text>
            </TouchableOpacity>
            <View style={styles.horizontalLine}></View>
            
             {/* <TouchableOpacity style={styles.listContainer}>
             <Icon name="settings" style={styles.iconImage}/>
                <Text  style={styles.item}>
                    Settings
                </Text>
            </TouchableOpacity>
            <View style={styles.horizontalLine}></View> */}
            <TouchableOpacity style={styles.listContainer} onPress={ () => this.props.NavigationToScreen('BuyProductsShopkeeper') }  >
             <Icon name="aperture" style={styles.iconImage}/>
                <Text  style={styles.item}>
                    Buy Product
                </Text>
            </TouchableOpacity>
            <View style={styles.horizontalLine}></View>
            <TouchableOpacity style={styles.listContainer} onPress={ () => this.props.NavigationToScreen('OffersShopkeeper') } >
             <Icon name="trophy" style={styles.iconImage}/>
                <Text  style={styles.item}>
                    Offers
                </Text>
            </TouchableOpacity>
            <View style={styles.horizontalLine}></View>
            <TouchableOpacity style={styles.listContainer} onPress={ () => this.props.NavigationToScreen('OrderHistoryShopkeeper') }  >
             <Icon name="time" style={styles.iconImage}/>
                <Text  style={styles.item}>
                    Order History
                </Text>
            </TouchableOpacity>
            <View style={styles.horizontalLine}></View>
            <TouchableOpacity style={styles.listContainer} onPress={ () => this.props.NavigationToScreen('AlertsPageShopkeeper') } >
             <Icon name="notifications" style={styles.iconImage}/>
                <Text  style={styles.item}>
                    Alerts
                </Text>
            </TouchableOpacity>
            <View style={styles.horizontalLine}></View>
            {/* <TouchableOpacity style={styles.listContainer}>
             <Icon name="cart" style={styles.iconImage}/>
                <Text  style={styles.item}>
                My Cart
                </Text>
            </TouchableOpacity>
            <View style={styles.horizontalLine}></View> */}
             {/* <TouchableOpacity style={styles.listContainer}>
             <Icon name="business" style={styles.iconImage}/>
                <Text  style={styles.item}>
                    Contact Us
                </Text>
            </TouchableOpacity>
            <View style={styles.horizontalLine}></View> */}

            
        
            <TouchableOpacity style={styles.listContainer} onPress={ () => this.props.Logout() } >
            <Icon name="log-out" style={styles.iconImage}/>
                <Text style={styles.item}>
                    Logout
                </Text>
            </TouchableOpacity>

        </ScrollView>
    );
}
  }
