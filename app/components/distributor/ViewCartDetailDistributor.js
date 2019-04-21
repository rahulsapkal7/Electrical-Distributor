import React, { Component } from 'react';
import { AppRegistry, FlatList, StyleSheet,TextInput,Image, Text,Alert, ScrollView,View,TouchableOpacity } from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import commonStyles from '../../common/commonStyle';
import {UserData} from '../../redux/actions/UserData_action';
import {api} from '../../common/api';
import {NavigationActions} from 'react-navigation';
import Header from '../../common/header';
import Loader from '../../common/Loader.js';
import DateTimePicker from 'react-native-modal-datetime-picker';
var ImagePicker = require('react-native-image-picker');

import moment from 'moment';
import {  Icon } from 'native-base';
import {_} from 'underscore';

class ViewCartDetailDistributor extends Component {

  constructor(props) {
    super(props);

    console.log('inside order history');

    this.state = {
      CartUserID : this.props.navigation.state.params.CartUserID,
      CartNo : this.props.navigation.state.params.CartNo,
      screenView : this.props.navigation.state.params.screenView,
      loading : false,
      StoreData : [],
      showImage : false,
      filePath: {},
    }
    console.log("props are --> ",JSON.stringify(props));
   
  }

  chooseFile = () => {
    var options = {
      title: 'Select Image',
     
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.showImagePicker(options, response => {
      // console.log('Response = ', response);
 
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        alert(response.customButton);
      } else {

        let source = response;
        // console.log("Sending base 64 data ",response.data);
        // You can also display the image using data:
        // let source = { uri: 'data:image/jpeg;base64,' + response.data };
        this.setState({
          filePath: source,
          showImage : true
        });
      }
    });
  };

  
  componentDidMount() {
    
        this.viewCartOrderByAdmin();
    
      }

renderItem=({item})=>{
        return(
        <TouchableOpacity style={{ flex:1,marginBottom:3}} 
        >
           
            <View style={styles.card_outer}>
                 
                <View style={styles.horizontal_view}>

        <Text style={styles.txtStyle_fourteen}>
        Product name : 
                </Text>
                <Text style={styles.txtStyle_sixteen}>
                    {' '+item.SubCategoryName+"("+item.BrandCategoryName+"-"+item.BrandName+")"}
                </Text>
                </View>

<View style={styles.horizontal_view}>

        <Text style={styles.txtStyle_fourteen}>
        Price : 
                </Text>
                <Text style={styles.txtStyle_sixteen}>
                    {' '+item.Amount}
                </Text>
                </View>

                <View style={styles.horizontal_view}>

        <Text style={styles.txtStyle_fourteen}>
        Quantity : 
                </Text>
                <Text style={styles.txtStyle_sixteen}>
                    {' '+item.Quantity}
                </Text>
                </View>

                <View style={styles.horizontal_view}>

<Text style={styles.txtStyle_fourteen}>
Date : 
        </Text>
        <Text style={styles.txtStyle_sixteen}>
            {' '+item.OrderDate}
        </Text>
        </View>
               
            </View> 
        </TouchableOpacity>
            )
    }
  
    RejectOrder (status) { 
      console.log('inside RejectOrder',status)
    }
    ChangeOrderStatus (status) { 
      console.log('inside ChangeOrderStatus',this.state);
      console.log('inside ChangeOrderStatus',status)
      
      const url = api() + 'ApproveOrderByAdmin.php';
      console.log(url);
     
     this.setState({loading: true});
 
     var data = new FormData();
     data.append('UserID',this.state.CartUserID ),
     data.append('CartNo',this.state.CartNo ),
     data.append('Status', status ),
     console.log("data is",data);
     fetch(url,{method: 'post',
     body: data
   })
         .then(response => response.json())
         .then(res => {
           console.log("response is ApproveOrderByAdmin",JSON.stringify(res));
     this.setState({loading: false});
     
           if(res.status){
            Alert.alert('View Cart', res.message,[{text: 'OK', 
            onPress: () => {
                console.log('OK Pressed');
                this.props.navigation.navigate('DistributorHomePage2')}}]
            , {cancelable: false},);
           }else{
             Alert.alert('View Cart', "Something went wrong");
           }
            
         })
         .catch(error => {
 
             console.log('error:' + (error));
             this.setState({ loading: false});
         });
    }
    DispatchOrder () { 
      console.log('inside DispatchOrder',this.state.CartUserID);
      console.log('inside CartNo --> ',this.state.CartNo);
      console.log('inside filePath --> ',this.state.filePath);
      if (this.state.showImage == false) {
        Alert.alert('View Cart', "Please Upload image first");
      } else {
        Alert.alert(
          'View Cart',
          'Are you sure you want to Dispatch',
          [
            
            {
              text: 'No',
              onPress: () => console.log('Cancel Pressed'),
              style: 'cancel',
            },
            {text: 'Yes', onPress: () => {console.log('OK Pressed') ;
          
            const url = api() + 'UploadLRByAdmin.php';
            console.log(url);
           
           this.setState({loading: true});
       
           var data = new FormData();
           data.append('UserID',this.state.CartUserID ),
           data.append('LRImage',this.state.filePath.data ),
           data.append('Status','Dispatch' ),
           data.append('CartNo',this.state.CartNo ),
           
           console.log("before hit data is ",data);
           // data.append('UserID', "2"),
           fetch(url,{method: 'post',
           body: data
         })
               .then(response => response.json())
               .then(res => {
                 console.log("response is UploadLRByAdmin",JSON.stringify(res));
           this.setState({loading: false});
           
                 if(res.status){
                  Alert.alert('View Cart', res.message,[{text: 'OK', 
                  onPress: () => {
                      console.log('OK Pressed');
                      this.props.navigation.navigate('DistributorHomePage2')}}]
                  , {cancelable: false},);
                 }else{
                   Alert.alert('View Cart', "Something went wrong");
                 }
                 
                  
               })
               .catch(error => {
       
                   console.log('error:' + (error));
                   this.setState({ loading: false});
               });
          
          
          }},
          ],
          {cancelable: false},
        );
    
     
        }
    }
    viewCartOrderByAdmin = () =>{
      const url = api() + 'ViewCartOrderByAdmin.php';
       console.log(url);
      
      this.setState({loading: true});
  
      var data = new FormData();
      data.append('UserID',this.state.CartUserID ),
      data.append('CartNo',this.state.CartNo ),
      
      // data.append('UserID', "2"),
      fetch(url,{method: 'post',
      body: data
    })
          .then(response => response.json())
          .then(res => {
            console.log("response is viewCartOrderByAdmin",JSON.stringify(res));
      this.setState({loading: false});
      
            if(res.status){
              this.setState({
                StoreData: res.data,
                orderHistoryList : res.data,
              });
            }else{
              Alert.alert('View Cart', "Something went wrong");
            }
             
          })
          .catch(error => {
  
              console.log('error:' + (error));
              this.setState({ loading: false});
          });
  
    }

  render() {
    return (

    <View style={styles.parentcontainer}>
    <Header
                title={'Cart Details'}
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
         { this.state.screenView == 'CartList' ?
         <View style={styles.horizontal_view}>
      <TouchableOpacity style={styles.btnBackground1}
      onPress= {()=> this.ChangeOrderStatus('Accepted')}>
          <Text style={commonStyles.textbtn}>Approve</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.btnBackground1}
      onPress= {()=> this.ChangeOrderStatus('Rejected')}>
          <Text style={commonStyles.textbtn}>Reject</Text>
      </TouchableOpacity>
      </View>
         
          : 
          <View style={{ flexDirection: 'column', alignItems: 'center',}}>
          {this.state.showImage ? 
                                      <Image
            source={{
              uri: 'data:image/jpeg;base64,' + this.state.filePath.data,
            }}
            style={{ width: 100, height: 100 }}
          /> : null }
       
         
                                      
          <View style={styles.horizontal_view}>
          <TouchableOpacity style={styles.btnBackground1}
      onPress= {this.chooseFile.bind(this)}>
          <Text style={commonStyles.textbtn}>Upload Document</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnBackground1}
      onPress= {()=> this.DispatchOrder()}>
          <Text style={commonStyles.textbtn}>Ready To Dispatch</Text>
      </TouchableOpacity>
      </View>
      </View>
          }
       
        
          
       
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



  container: {
   flex: 1,
   paddingTop: 22,
   height: '90%',  
  },
 
  btnBackground1: {
     backgroundColor:'skyblue',
     borderRadius: 25,
     paddingVertical: 10,
     marginVertical: 10,
     marginHorizontal:10,
     flex:1
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
        // flexDirection:'column',
        height: '80%', 
  },
})
 
const mapStateToProps = (state, ownProps) => {
  
  console.log('state:' + JSON.stringify(state));
  return {UserId: state.UserData_red.UserId}
}

const mapDispatchToProps = dispatch => (bindActionCreators({
  UserData
}, dispatch));

export default connect(mapStateToProps, mapDispatchToProps)(ViewCartDetailDistributor  );