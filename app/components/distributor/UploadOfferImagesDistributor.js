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

class UploadOfferImagesDistributor extends Component {

  constructor(props) {
    super(props);

    console.log('inside order history');

    this.state = {
      screenView : this.props.navigation.state.params.screenView,
      loading : false,
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
        this.setState({
          filePath: source,
          showImage : true
        });
        console.log("after set image ",this.state.filePath);
      }
    });
  };

  
 

  
      UploadImage = () =>{
        var url = null;
        var data = new FormData();
        var Title = null
        if (this.state.screenView == "OfferImage") {
          url = api() + 'AdminUploadOfferImg.php';
          data.append('ImageName',this.state.filePath.fileName );
          data.append('DisplayImage',this.state.filePath.data );
          data.append('ImageDes','image' );
          data.append('FromDate','');
          data.append('ToDate','' );
          Title = "Offer Image";
        } else {
          url = api() + 'UploadImage.php';
          data.append('ImageName',this.state.filePath.fileName );
          data.append('DisplayImages',this.state.filePath.data );
          Title = "Scroll Image";
        }
        
      // const url = api() + 'ViewCartOrderByAdmin.php';
       console.log("url is -->",url);
       console.log("data is -->",data);
       
      this.setState({loading: true});
  
     
     
      
      // data.append('UserID', "2"),
      fetch(url,{method: 'post',
      body: data
    })
          .then(response => response.json())
          .then(res => {
            console.log("response is -->",JSON.stringify(res));
          this.setState({loading: false});
      
            if(res.status){
              Alert.alert(Title, res.message,[{text: 'OK', 
              onPress: () => {
                  console.log('OK Pressed');
                  // this
                  // .props
                  // .navigation
                  // .goBack(null)
                 
                  this.props.navigation.navigate('DistributorHomePage2')
                 }}]
              , {cancelable: false},);
            
            }else{
              Alert.alert(Title, "Something went wrong");
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
                title={'UPLOAD OFFER IMAGES'}
                title=  {this.state.screenView == "OfferImage" ? 'UPLOAD OFFER' :  'UPLOAD SCROLLER'  }

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
          <View style={{ flexDirection: 'column', alignItems: 'center',}}>
          {this.state.showImage ? 
                                      <Image
            source={{
              uri: 'data:image/jpeg;base64,' + this.state.filePath.data,
            }}
            style={{ width: 100, height: 100 }}
          /> : null }
       
         
                                      
          <View style={styles.horizontal_view}>
          {this.state.showImage 
          ? 
            <TouchableOpacity style={styles.btnBackground1}
      onPress= {this.UploadImage.bind(this)}>
          <Text style={commonStyles.textbtn}>Upload Image</Text>
      </TouchableOpacity>                        
          : 
          <TouchableOpacity style={styles.btnBackground1}
      onPress= {this.chooseFile.bind(this)}>
          <Text style={commonStyles.textbtn}>Add Image</Text>
      </TouchableOpacity>
           }
          
      
      </View>
      </View>
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
        backgroundColor:'#FFB367',
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

export default connect(mapStateToProps, mapDispatchToProps)(UploadOfferImagesDistributor  );