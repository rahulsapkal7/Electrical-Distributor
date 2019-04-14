import React, { Component } from 'react';
import { AppRegistry, FlatList, TextInput,StyleSheet,ScrollView, Alert, Text, View,TouchableOpacity,Image ,Modal} from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Header from '../../common/header';
import {api} from '../../common/api';

import {UserData} from '../../redux/actions/UserData_action';
import {NavigationActions} from 'react-navigation';
import Loader from '../../common/Loader.js';
import {  Icon } from 'native-base';



 class SearchProduct extends Component {

  constructor(props) {
    super(props);

    console.log('inside pending search product');

    this.state = {
      // selectedArea : this.props.navigation.state.params.selectedArea,
      loading : false,
      productSearchText : ''
     
    }
    this.searchProduct = this
    .searchProduct
    .bind(this);
    console.log("props are --> ",JSON.stringify(props));
   
  }

  componentDidMount() {
    
        // this.getPendingOrderList();
    
      }


      getPendingOrderList = () =>{
        const url = api() + 'ViewOfferImageByCustomer.php';
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
                // var imageData = [ {url: "https://cdn.pixabay.com/photo/2017/08/17/10/47/paris-2650808_960_720.jpg"}];
                var imageData = [ ];
                res.data.forEach(function (data,key) {
                  console.log('inside each data is',data,key);
                  imageData.push({
                    url : data.DisplayImage,
                    index : key
                  })
              }); 
              console.log('imageData data is',imageData);
                this.setState({
                  StoreData: imageData,
                    
                });
              }else{
                Alert.alert('Offers', "Something went wrong");
              }
               
            })
            .catch(error => {
    
                console.log('error:' + (error));
                this.setState({ loading: false});
            });
    
      }
      
     
      searchProduct (){
        if (this.state.productSearchText == '') {
          Alert.alert('Home', "Please enter product name first");
        } else {
          const url = api() + 'SearchProduct.php';
          console.log(url);
         this.setState({loading: true});
         var data = new FormData();
         data.append('word', this.state.productSearchText ),
         console.log("data before hit ",JSON.stringify(data) );
         fetch(url,{method: 'post',body:data})
             .then(response => response.json())
             .then(res => {
               console.log("response is",res);
               this.setState({loading: false});
               console.log("response is",JSON.stringify(res));
               if(res.status){
                //  Alert.alert('My Profile', res.message,[{text: 'OK', 
                //  onPress: () => {
                //      console.log('OK Pressed');
                //      this.props.navigation.goBack(null)}}]
                //  , {cancelable: false},);
                console.log('res is',res);
                this.setState({
                  productSearchText : ''
                })
                this.props.navigation.navigate('AddToCartShopkeeper', { data : {BrandCategoryTableID : '' , SubCategoryTableID : '', searchProductData : res.data} })
                 
               }else{
                 Alert.alert('Home', res.message);
               }
                 
             })
             .catch(error => {
      
                 console.log('error:' + (error));
                 this.setState({ loading: false});
             });
        }
      }

   

  render() {
    return (

    <View style={styles.parentcontainer}>
    <Header
                title={'Search Products'}
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
        <View style={styles.searchcontainer}> 
                  <TextInput style={styles.editbox} placeholder={'Please enter product name'} placeholderTextColor={'#ddd'} onChangeText={(text) => this.setState({productSearchText: text})} value={this.state.productSearchText}
                ></TextInput>
                  <TouchableOpacity style={styles.Backcontainer} onPress={this.searchProduct}>
                  <Icon name='search'  style={{ color: "black" }} />
                   </TouchableOpacity>
               
                  </View>
        
      </View>
              </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    
   
  container: {
   flex: 1,
   paddingTop: 22,
   
   
  },
  parentcontainer: { 
    flexDirection: 'column', 
    height: '100%',  
  },
  searchcontainer: {
    flexDirection: 'row',
    flex : 1,
   
    paddingLeft : 10,
    width: '100%',
    // backgroundColor: '#7dca20',
    // alignItems: 'center',
    // borderColor : "yellow",     borderWidth : 1,
  },
  editbox: {
    width: 300,
    height: 40, 
    borderRadius: 5,
    borderColor: 'black',
    borderWidth:1,
    paddingHorizontal: 10,
    color: 'black',
    marginVertical: 10,
    marginBottom:15
},
Backcontainer: {
  width: '15%',
  height: 40,
  marginVertical: 10,
  marginBottom:15,
  paddingHorizontal: 10, 
  // alignItems: 'center'
  
},
 
})
 
const mapStateToProps = (state, ownProps) => {
  // console.log('state:' + JSON.stringify(state));
  return {}
}

const mapDispatchToProps = dispatch => (bindActionCreators({
  UserData
}, dispatch));

export default connect(mapStateToProps, mapDispatchToProps)(SearchProduct);