import React, { Component } from 'react';
import { AppRegistry, FlatList, StyleSheet,ScrollView, Alert, Text, View,TouchableOpacity,Image } from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Header from '../../common/header';
import {api} from '../../common/api';

import {UserData} from '../../redux/actions/UserData_action';
import {NavigationActions} from 'react-navigation';
import Loader from '../../common/Loader.js';

 class BuyProductsShopkeeper extends Component {

  constructor(props) {
    super(props);

    console.log('inside pending order distributor');

    this.state = {
      // selectedArea : this.props.navigation.state.params.selectedArea,
      loading : false,
      StoreData : []
    }

    console.log("props are --> ",JSON.stringify(props));
   
  }

  componentDidMount() {
    
        this.getPendingOrderList();
    
      }


      getPendingOrderList = () =>{
        // const url = api() + 'ViewProdcutsByAdmin.php';
        const url = api() + 'ViewProdcutsByCust.php';
        
        
         console.log(url);
        
        this.setState({loading: true});
    
        fetch(url,{method: 'post'})
            .then(response => response.json())
            .then(res => {
              console.log("response is",JSON.stringify(res));
              this.setState({
                loading : false
              })
              if(res.status){
                this.setState({
                  StoreData: res.data,
                    
                });
              }else{
                Alert.alert('Products', "Something went wrong");
              }
               
            })
            .catch(error => {
    
                console.log('error:' + (error));
                this.setState({ loading: false});
            });
    
      }
      
     
    openCategory = (item, image) => {
      
             console.log("inside openCategory ",item,image);
                  this.props.navigation.navigate('BuyProductDetailShopkeeper',{
                    "Image": image,
                    "ProductObj" : item
                });
              // Alert.alert(item);
      
          }

      renderItem=({item})=>{
        return(

            
            <View style={styles.productParent}>
               {/* <View style={styles.prodcust_container1}> */}
                    <Image
                source={{ uri: "https://n4.sdlcdn.com/imgs/f/n/v/eveready_600-dd3f6.jpg" }}
                style={{ width: 100, height:100 }}
                resizeMode="cover"
              />
                   {/* </View> */}

        {/* <TouchableOpacity style={styles.prodcust_container2}   >
            <View style={styles.card_outer}> */}
                <View style={styles.horizontal_view1}>
                <Text style={styles.txtStyle_sixteen}>
                    {' '+item.ProductName+'('+item.MfgName+')'}
                </Text>
                </View>
                <View style={styles.horizontal_view}>
                   <Text style={styles.txtStyle_fourteen}>
                     MRP : 
                  </Text>
                <Text style={styles.txtStyle_sixteen}>
                    {' '+item.MRPPrice}
                </Text>
                </View>
                <View style={styles.horizontal_view}>

        <Text style={styles.txtStyle_fourteen}>
          Selling price : 
                </Text>
                <Text style={styles.txtStyle_sixteen}>
                    {' '+item.SellingPrice}
                </Text>
                </View>
                <View style={styles.horizontal_view}>
              <Text style={styles.txtStyle_fourteen}>
              Model no : 
                      </Text>
                      <Text style={styles.txtStyle_sixteen}>
                          {' '+item.ModelNo}
                      </Text>
                </View>
                <TouchableOpacity style={styles.btnBackground}  onPress={this
                                        .openCategory
                                        .bind(this,item,  'https://n4.sdlcdn.com/imgs/f/n/v/eveready_600-dd3f6.jpg')}
                                         >

                    <Text style={styles.txtStyle_fourteen}>Buy</Text>
                </TouchableOpacity>
            </View> 
        // </TouchableOpacity>
        // </View>
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
          numColumns={2}
        />
      </View>
              </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    canvas: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
      },
  parentcontainer: { 
    flexDirection: 'column', 
    height: '100%',  
  },
  productParent:{
    flex:1,
    flexDirection: 'column', 
    backgroundColor: '#FFB367',
    alignItems: 'center',
    justifyContent: 'center', 
    // borderRadius:2,
    // borderColor: 'red',
    margin : 10,
    padding : 15,
    borderWidth:1,
    borderRadius:2,
    borderColor: '#ddd',
    
  },
    btnBackground: {
        backgroundColor: 'skyblue',
        borderRadius: 25,
        paddingVertical: 10, 
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10, 
        marginTop:10,
        width: '50%',
    },
  container: {
   flex: 1,
   paddingTop: 22,
   
   
  },
  prodcust_container1: {  
    flexDirection:'column',
    alignItems: 'center',
    justifyContent: 'center', 
    // height: '60%',  
  },
  prodcust_container2: {  
   flexDirection:'column',
   alignItems: 'center',
   justifyContent: 'center', 
   height: '40%',  
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
  horizontal_view1: { 
    flexDirection: 'row', 
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop:20,
  },
  
  txtStyle_fourteen: {  
    fontSize: 14,
    color:'white'
  },
  txtStyle_sixteen: {  
    fontSize: 16,
    color:'white',
    fontWeight:'500',
    
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
        // height: '80%', 
  },
})
 
const mapStateToProps = (state, ownProps) => {
  // console.log('state:' + JSON.stringify(state));
  return {}
}

const mapDispatchToProps = dispatch => (bindActionCreators({
  UserData
}, dispatch));

export default connect(mapStateToProps, mapDispatchToProps)(BuyProductsShopkeeper);