
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,ScrollView,Button,ToolbarAndroid,Image,TouchableOpacity,FlatList,TouchableWithoutFeedback} from 'react-native'; 
// import Cards from "./Cards.js"; 
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Header from '../../common/header';
import Home_header from '../../common/home_header';
import { Swiper, TitleBar, TabBar } from 'react-native-awesome-viewpager';
import {UserData} from '../../redux/actions/UserData_action';
import {NavigationActions} from 'react-navigation';



 class ShopkeeperHomePage2 extends Component {
  state = {
    scrollEnabled: true,
    type: 1,
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

  actionOnRow(item) {
    if(item.menuName=='Alerts'){
      this.props.navigation.navigate('AlertsPageShopkeeper')
    }else if(item.menuName=='My profile'){
      this.props.navigation.navigate('MyProfileShopkeeper')
    }else if(item.menuName=='Order history'){
      this.props.navigation.navigate('OrderHistoryShopkeeper')
    }else if(item.menuName=='Buy products'){
      this.props.navigation.navigate('BuyProductsShopkeeper')
    }else if(item.menuName=='Offers'){
      this.props.navigation.navigate('OffersShopkeeper')
    }
 }

  render() {
    return (
        <View style={styles.container}>
         <Home_header  goToMyProfile={() => { this.props.navigation.navigate('MyProfileShopkeeper');  }}
                title={'Proton enterprise'} 
                goToSetting= {() => {console.log("go to setting")}}
                Logout = {()=>{this.props.navigation.navigate('Login');}}
                />
                
           <View style={styles.firstContainer}>
           <FlatList
          data={[{ menuName: 'Order history' }
          , { menuName: 'Offers' }
          , { menuName: 'Buy products' }]}
          renderItem={this._renderItem}
          horizontal={true}
        ItemSeparatorComponent={() => <View style={{margin: 4}}/>}
        />
               </View>
               <View style={styles.secondContainer}>
               <Image source={require('../../assets/images/offer1.jpg')} style={styles.backgroundImage}>
                 
                 </Image>
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

               <Image source={require('../../assets/images/crescent.png')} style={styles.backgroundLogoImage}>
                 
                 </Image>

<Image source={require('../../assets/images/download.png')} style={styles.backgroundLogoImage}>
  
  </Image>

<Image source={require('../../assets/images/magic.png')} style={styles.backgroundLogoImage}>
  
  </Image>

<Image source={require('../../assets/images/opel.png')} style={styles.backgroundLogoImage}>
  
  </Image>

<Image source={require('../../assets/images/opel.png')} style={styles.backgroundLogoImage}>
  
  </Image>

               </View>
        </View>
    );
}
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#4db6ac'
  },
  firstContainer:{
      flex:2,
      justifyContent: 'center'
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
  logotext: {
      marginVertical: 25,
      fontSize: 22,
      color: 'black'
  },
  editbox: {
      width: 300,
      height: 40,
      backgroundColor: 'rgba(255,255,255,0.3)',
      borderRadius: 25,
      paddingHorizontal: 10,
      color: 'white',
      marginVertical: 10
  },
  textbtn: {
      fontSize: 16, 
      color: 'white', 
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
      width: 100,
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
  }
});
const mapStateToProps = (state, ownProps) => {
  // console.log('state:' + JSON.stringify(state));
  return {}
}

const mapDispatchToProps = dispatch => (bindActionCreators({
  UserData
}, dispatch));

export default connect(mapStateToProps, mapDispatchToProps)(ShopkeeperHomePage2);