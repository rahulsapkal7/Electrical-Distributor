import React, {Component} from 'react';

import {
    Dimensions,
    StyleSheet,
    ScrollView,
    View,
    Image,
    Text,TouchableOpacity
} from 'react-native';





// const window = Dimensions.get('window');


const styles = StyleSheet.create({
    menu: {
        flex: 1,
        // width: "100%",
        // height: window.height,
        backgroundColor: '#eff0f1',
        
        // backgroundColor: '#A7D952',
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
        width:'100%',
        
    },
    profileImg: {
        width: 100,
        height: 100,
        borderRadius: 50,
        borderColor: "black",
        borderWidth: 2,
        flex: 2
    },
    name: {
        color: 'black',
        fontSize: 15,
        paddingTop: 15
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
        fontSize: 15,
        color: 'black',
       
        paddingLeft: 15
    }
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
             <TouchableOpacity style={styles.listContainer}>
                <Text onPress={ () => this.props.NavigationToScreen('ShopkeeperHomePage2') } style={styles.item}>
                    Home
                </Text>
            </TouchableOpacity>
            <View style={styles.horizontalLine}></View>
            
             <TouchableOpacity style={styles.listContainer}>
                <Text onPress={ () => this.props.NavigationToScreen('MyProfileShopkeeper') } style={styles.item}>
                    My Profile
                </Text>
            </TouchableOpacity>
            <View style={styles.horizontalLine}></View>
            
             <TouchableOpacity style={styles.listContainer}>
                <Text  style={styles.item}>
                    Settings
                </Text>
            </TouchableOpacity>
            <View style={styles.horizontalLine}></View>
            
           {/*   <View style={styles.listContainer}>
                <IconIco name="wardrobe" style={styles.iconImage}/>
                <Text onPress={ () => this.GoTo('Product', '4')} style={styles.item}>
                    Cupbords
                </Text>
            </View>
              <View style={styles.horizontalLine}></View>
            <View style={styles.listContainer}>
                              <Icon name="user" style={styles.TxtIP} color="white"/>
                <Text onPress={ () => this.GoTo('Profile')} style={styles.item}>
                    My Account
                </Text>
            </View>
              <View style={styles.horizontalLine}></View>
            <View style={styles.listContainer}>
                              <Icon name="map-marker" style={styles.TxtIP} color="white"/>
                <Text onPress={ () => this.GoTo('Add_address')} style={styles.item}>
                    Add Address
                </Text>
            </View>
             <View style={styles.horizontalLine}></View>
            <View style={styles.listContainer}>
                              <Icon name="list-alt" style={styles.TxtIP} color="white"/>
                <Text onPress={ () => this.GoTo('Address_list')} style={styles.item}>
                    My Address List
                </Text>
            </View>
             <View style={styles.horizontalLine}></View> */}
            <TouchableOpacity style={styles.listContainer}>
                <Text  onPress={ () => this.props.Logout() }   style={styles.item}>
                    Logout
                </Text>
            </TouchableOpacity>

        </ScrollView>
    );
}
  }
