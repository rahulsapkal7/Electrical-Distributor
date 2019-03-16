
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,ScrollView,Button,Image,TouchableOpacity,FlatList,TouchableWithoutFeedback} from 'react-native'; 
// import Cards from "./Cards.js"; 
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Header from '../../common/header';
// import { Swiper, TitleBar, TabBar } from 'react-native-awesome-viewpager';
import {UserData} from '../../redux/actions/UserData_action';
import {NavigationActions} from 'react-navigation';
// import SwipeALot from 'react-native-swipe-a-lot'



 class ShopkeeperHomePage extends Component {

  constructor(props) {
    super(props);

    
this.state = {
  isOpen: false,
  scrollEnabled: true,
  type: 1,
  selectedItem: 'About',
      
}
  }

  

  _renderItem = ({ item }) => {
    return (
      <TouchableOpacity  style={styles.verticalContainer} onPress={ () => this.actionOnRow(item)}>
      {/* <View
        style={styles.verticalContainer}> */}
        <Text style={styles.textbtn}>{item.menuName}</Text>
      {/* </View> */}
      </TouchableOpacity>
    );
  };

  actionOnRow(item) {
    if(item.menuName=='Alerts'){
      this.props.navigation.navigate('AlertsPageShopkeeper')
    }else if(item.menuName=='My profile'){
      this.props.navigation.navigate('MyProfileShopkeeper')
    }else if(item.menuName=='Order history'){
      this.props.navigation.navigate('OrderHistoryShopkeeper')
    }
 }

  render() {
    return (
        <View style={styles.container}>
         <Header hideBack={"true"}
                title={'Proton enterprise'}
                />
           <View style={styles.firstContainer}>
           <FlatList
          data={[{ menuName: 'My profile' }
          , { menuName: 'Order history' }
          , { menuName: 'Alerts' }
          , { menuName: 'Invoices' }
          , { menuName: 'Purchase order' }
          , { menuName: 'Settings' }]}
          renderItem={this._renderItem}
          horizontal={true}
        // ItemSeparatorComponent={() => <View style={{margin: 4}}/>}
        />
               </View>
              

               <Image  style={{width: '100%',height: 340,}}  source = {{uri : "https://www.hplindia.com/photos/shares/BlogImages/382x232_0001_Electrical_outlet.jpg"}} ></Image>

              
          
               
               <View style={styles.thirdContainer}>

               <TouchableOpacity style={styles.verticalContainer}  onPress = {()=> this.props.navigation.navigate('BuyProductsShopkeeper')}>
               

                <Text style={styles.textbtn}
                >Buy products</Text>  
               </TouchableOpacity>

               <View style={styles.verticalContainer}>
               

                <Text style={styles.textbtn}
                >Offers</Text>  
               </View>

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
  swipercontainer: {
    height: "30%",
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red'
},
  firstContainer:{
      flex:2,
      // justifyContent: 'center'
  },
  secondContainer:{
      flex:6
  },
  slide1: {
    height: 240,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  thirdContainer:{
      flex:2,
      alignSelf:'stretch',
      flexDirection:'row'
  },
  verticalContainer:{
      justifyContent:'center',
      alignItems:'center',
      borderColor:'#ddd',
      borderWidth:1,
      width:120,
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
      flex: 1,
      resizeMode: 'cover', // or 'stretch'
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

export default connect(mapStateToProps, mapDispatchToProps)(ShopkeeperHomePage);