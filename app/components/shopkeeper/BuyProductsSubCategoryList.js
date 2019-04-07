import React, { Component } from 'react';
import { AppRegistry, FlatList, StyleSheet,ScrollView, Alert,Image, Text,View,TouchableOpacity } from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Header from '../../common/header';
import {api} from '../../common/api';

import {UserData} from '../../redux/actions/UserData_action';
import {NavigationActions} from 'react-navigation';
import Loader from '../../common/Loader.js';

 class BuyProductsSubCategoryList extends Component {

  constructor(props) {
    super(props);

    console.log('inside pending order distributor');

    this.state = {
      BrandCategoryTableID : this.props.navigation.state.params.BrandCategoryTableID,
      loading : false,
      StoreData : []
    }

    console.log("props are --> ",JSON.stringify(props));
   
  }

  componentDidMount() {
    
        this.GetCategoryListShopkeeper();
    
      }


      GetCategoryListShopkeeper = () =>{
        const url = api() + 'GetSubCategory.php';
         console.log(url);
        
        this.setState({loading: true});
        var data = new FormData()
        console.log("this.props.BrandCategoryTableID",this.state.BrandCategoryTableID);
        data.append('BrandCategoryTableID',this.state.BrandCategoryTableID ),
        fetch(url,{method: 'post',body:data})
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

        // <TouchableOpacity style={{ flex:1,flexDirection:'column',marginBottom:3}} onPress ={() =>{ //this.props.navigation.navigate('BuyProductsCategoryList', {BrandCategoryTableID : item.BrandCategoryTableID } ) 
        //  }}
        // >
          <View style={styles.productParent}>
               
                    <Image
                source={{ uri: item.SubCategoryImage }}
                style={{ width: 100, height:100 }}
                resizeMode="cover"
              />
                 

                {/* <View style={styles.horizontal_view1}>
                <Text style={styles.txtStyle_sixteen}>
                    {' '+item.ProductName+'('+item.MfgName+')'}
                </Text>
                </View> */}
                <View style={styles.horizontal_view}>
                   <Text style={styles.txtStyle_fourteen}>
                   Brand Name : 
                  </Text>
                <Text style={styles.txtStyle_sixteen}>
                    {' '+item.BrandName}
                </Text>
                </View>
                <View style={styles.horizontal_view}>

        <Text style={styles.txtStyle_fourteen}>
        Brand Category Name : 
                </Text>
                <Text style={styles.txtStyle_sixteen}>
                    {' '+item.BrandCategoryName}
                </Text>
                </View>
                <View style={styles.horizontal_view}>
              <Text style={styles.txtStyle_fourteen}>
              Sub Category Name : 
                      </Text>
                      <Text style={styles.txtStyle_sixteen}>
                          {' '+item.SubCategoryName}
                      </Text>
                </View>
                <TouchableOpacity style={styles.btnBackground}  onPress ={() =>{ this.props.navigation.navigate('AddToCartShopkeeper', { data : {BrandCategoryTableID : this.state.BrandCategoryTableID , SubCategoryTableID : item.SubCategoryTableID } } )}}  >

                    <Text style={styles.txtStyle_fourteen}>Product Detail</Text>
                </TouchableOpacity>
            </View> 
           
        // </TouchableOpacity>
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
          numColumns={1}
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
    productParent:{
      flex:1,
      flexDirection: 'column', 
      backgroundColor: '#4db6ac',
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
        backgroundColor:'#4db6ac',
        flex: 1,        
        marginRight: 5, 
        marginTop: 10,
        flexDirection:'column',
        height: '80%', 
  },
  Detailcontainer: {
    flexDirection: 'column',
    left: 20,
    // borderColor:'blue', borderWidth:1
  },
  Producer: {
    top: 18,
    color: '#4f4f4f',
    fontSize: 12
  },
  Title: {
    top: 15,
    color: '#4f4f4f',
    fontSize: 18
  },
})
 
const mapStateToProps = (state, ownProps) => {
  // console.log('state:' + JSON.stringify(state));
  return {}
}

const mapDispatchToProps = dispatch => (bindActionCreators({
  UserData
}, dispatch));

export default connect(mapStateToProps, mapDispatchToProps)(BuyProductsSubCategoryList);