import React, { Component } from 'react';
import { AppRegistry, FlatList, StyleSheet,ScrollView,Image, Alert, Text,View,TouchableOpacity } from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Header from '../../common/header';
import {api} from '../../common/api';

import {UserData} from '../../redux/actions/UserData_action';
import {NavigationActions} from 'react-navigation';
import Loader from '../../common/Loader.js';
var ThisView = null;
 class BuyProductsBrandList extends Component {

  constructor(props) {
    super(props);
    ThisView = this;
    console.log('inside pending order distributor');

    this.state = {
      loading : false,
      StoreData : []
    }

    console.log("props are --> ",JSON.stringify(props));
   
  }

  componentDidMount() {
    
        this.GetBrandListShopkeeper();
    
      }


      GetBrandListShopkeeper = () =>{
        const url = api() + 'GetBrand.php';
         console.log(url);
        
        this.setState({loading: true});
    
        fetch(url,{method: 'post'})
            .then(response => response.json())
            .then(res => {
              console.log("response is inside alerts page ",JSON.stringify(res));
              if(res.status){
                this.setState({
                  StoreData: res.data,
                  loading : false
                });
              }else{
                Alert.alert('Buy Product', "Something went wrong");
              }
                
            })
            .catch(error => {
    
                //console.log('error:' + (error));
                this.setState({error, loading: false});
            });
    
      }
      

      renderItem=({item})=>{
        return(

        <TouchableOpacity style={{ flex:1,flexDirection:'column',marginBottom:3}} onPress ={() => { console.log("on press ",item.BrandTableID); ThisView.props.navigation.navigate('BuyProductsCategoryList', { BrandTableID : item.BrandTableID } )  }}
        >
           
            <View style={styles.card_outer}>
                 
                <View style={styles.horizontal_view}>

        
                <Text style={styles.txtStyle_Thirty}>
                    {item.BrandName}
                </Text>
                </View>

   
            </View> 
        </TouchableOpacity>
            )
    }

  render() {
    return (

    <View style={styles.parentcontainer}>
    <Header
                title={'BUY PRODUCTS'}
                back={() => {
                this
                  .props
                  .navigation
                  .goBack(null)
              }}/>
     <Loader visible={this.state.loading}/>
                <ScrollView contentContainerStyle={{
                width: window.width
              }}>
      <View style={styles.container}>
        <FlatList
          data={this.state.StoreData}
          renderItem={this.renderItem}
        />
      </View>
              </ScrollView> 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  parentcontainer: { 
    flexDirection: 'column', 
    height: '100%',  
  },
  spaceView:{
    flexDirection: 'row', 
  },
  spaceView2:{
    flexDirection: 'row', 
    width: '70%',
  },
  spaceView3:{
    flexDirection: 'row', 
    width: '30%',
  },
  backgroundLogoImage: { 
      width:100,
      height:100,
      width: '80%',
      alignItems: 'flex-end',
      justifyContent: 'flex-end',
      marginRight: 10, 
      marginTop:10,
      marginBottom:10
  },
    btnBackground: {
        backgroundColor: 'skyblue',
        borderRadius: 25,
        paddingVertical: 10, 
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10, 
        marginTop:10,
        width: '40%',
    },
  container: {
   flex: 1,
   paddingTop: 22,
   height: '90%',  
  },
  txtMain: {  
    fontSize: 14,
    fontWeight: '500',
    color:'white'
  },

  menuTextContainer: {   
    height: '7%', 
    backgroundColor:'skyblue',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor:'#000', 
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 5,
    borderRadius:2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  horizontal_view: { 
    flexDirection: 'row', 
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtStyle_fourteen: {  
    fontSize: 14,
    color:'white'
  },
  txtStyle_sixteen: {  
    fontSize: 16,
    color:'white',
    fontWeight:'500'
  },
  txtStyle_Thirty: {  
    fontSize: 30,
    color:'white',
    fontWeight:'500'
  },
  txtStyle_eighteen: {  
    fontSize: 18,
    color:'white'
  },
  card_outer: {
      borderWidth:1,
        borderRadius:2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor:'#000', 
        shadowOpacity: 0.5,
        shadowRadius: 5,
         padding: 10,
        elevation: 5,
        marginBottom:10,
        marginLeft: 5,
        backgroundColor:'#FFB367',
        flex: 1,        
        marginRight: 5, 
        marginTop: 10,
        flexDirection:'column',
        height: '80%', 
        
  },
})
 
const mapStateToProps = (state, ownProps) => {
  // console.log('state:' + JSON.stringify(state));
  return {}
}

const mapDispatchToProps = dispatch => (bindActionCreators({
  UserData
}, dispatch));

export default connect(mapStateToProps, mapDispatchToProps)(BuyProductsBrandList);