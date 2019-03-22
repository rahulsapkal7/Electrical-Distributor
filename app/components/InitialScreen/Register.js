/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {
  StyleSheet,
  ScrollView,
  Text,
  TextInput,
  ActivityIndicator,AsyncStorage,
  View,
  Alert,
  Image,
  TouchableOpacity
} from 'react-native';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {UserData} from '../../redux/actions/UserData_action';
import Header from '../../common/header';
import commonStyles from '../../common/commonStyle';
import {api} from '../../common/api';
import Loader from '../../common/Loader.js';
var ImagePicker = require('react-native-image-picker');


 class Register extends Component {
  constructor(props) {
    super(props);
    this.registerCall = this
      .registerCall
      .bind(this);

    this.state = {
     
      PropreitorName: '',
      PrimaryMobileNo: '',
      AltMobileNo: '',
      Password: '',
      ShopName: '',
      Firmtype: '',
      Address1 :'',
      Address2 :'',
      Landmark:'',
      Timing : '',
      EmailId : "",
      Turnover :'',
      GST_No :'',
      PAN_No:'',
      Aadhar_No : '',
      loading: false,
      filePath: {},
    }
  }
  chooseFile = () => {
    var options = {
      title: 'Select Image',
      customButtons: [
        { name: 'customOptionKey', title: 'Choose Photo from Custom Option' },
      ],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.showImagePicker(options, response => {
      console.log('Response = ', response);
 
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        alert(response.customButton);
      } else {
        let source = response;
        // You can also display the image using data:
        // let source = { uri: 'data:image/jpeg;base64,' + response.data };
        this.setState({
          filePath: source,
        });
      }
    });
  };
  registerCall() {           
    console.log("on click registerCall",this.state);
    if (this.state.PropreitorName === '') {
      Alert.alert('Register', 'Enter a valid Name');
    }else if(this.state.PrimaryMobileNo === ''){
      Alert.alert('Register', 'Enter a valid primary mobile number');
    }else if(this.state.AltMobileNo === ''){
      Alert.alert('Register', 'Enter a valid alternative mobile number');
    }else if(this.state.Password === ''){
      Alert.alert('Register', 'Enter a valid Password');
    }else if(this.state.ShopName === ''){
      Alert.alert('Register', 'Enter a valid shopName');
    }else if(this.state.Firmtype === ''){
      Alert.alert('Register', 'Enter a valid Firmtype');
    }else if(this.state.Address1 === ''){
      Alert.alert('Register', 'Enter a valid first Address');
    }else if(this.state.Address2 === ''){
      Alert.alert('Register', 'Enter a valid second Address');
    }else if(this.state.Landmark === ''){
      Alert.alert('Register', 'Enter a valid Landmark');
    }else if(this.state.Timing === ''){
      Alert.alert('Register', 'Enter a valid Timing');
    }else if(this.state.EmailId === ''){
      Alert.alert('Register', 'Enter a valid EmailId');
    }else if(this.state.Turnover === ''){
      Alert.alert('Register', 'Enter a valid Turnover');
    }else if(this.state.GST_No === ''){
      Alert.alert('Register', 'Enter a valid GST Number');
    }else if(this.state.PAN_No === ''){
      Alert.alert('Register', 'Enter a valid PAN Number');
    // }else if(this.state.Aadhar_No === ''){
    //   Alert.alert('Login', 'Enter a valid mobile number');
    }else{
      const url = api() + 'Reg.php';
      console.log(url);
     
     this.setState({loading: true});
     var data = new FormData()
     data.append('PropreitorName', this.state.PropreitorName ),
     data.append('PrimaryMobileNo', this.state.PrimaryMobileNo ),
     data.append('AltMobileNo', this.state.AltMobileNo ),
     data.append('Password', this.state.Password ),
     data.append('ShopName', this.state.ShopName ),
     data.append('FirmType', this.state.Firmtype ),
     data.append('Address1', this.state.Address1 ),
     data.append('Address2', this.state.Address2 ),
     data.append('Landmark', this.state.Landmark ),
     data.append('Timings', this.state.Timing ),
     data.append('EMailID', this.state.EmailId ),
     data.append('Turnover', this.state.Turnover ),
     data.append('GSTNo', this.state.GST_No ),
     data.append('PANNo', this.state.PAN_No ),
     data.append('AadharNo', this.state.Aadhar_No ),
     console.log("data before hit ",JSON.stringify(data) );
     fetch(url,{method: 'post',body:data})
        //  .then(response => response.json())
         .then(res => {
           console.log("response is",res);
           console.log("response is",JSON.stringify(res));
        
           if(res.status){
            Alert.alert('Register', res.message,[{text: 'OK', 
            onPress: () => {
                console.log('OK Pressed');
                this.props.navigation.goBack(null)}}]
            , {cancelable: false},);
               console.log("after set ",this.state);
           }else{
             Alert.alert('Register', "Something went wrong");
             this.setState({loading: false});
           }
             
         })
         .catch(error => {
 
             console.log('error:' + (error));
             this.setState({error, loading: false});
         });
    }
    // this
    // .props
    // .navigation
    // .goBack(null);
   
  }
  render() {

    return (
      <View style={commonStyles.VWcontainer}>
      
              <Header
                title={'REGISTER'}
                back={() => {
                this
                  .props
                  .navigation
                  .goBack(null)
              }}/>
           <Loader visible={this.state.loading}/>
              
                        {/* <ActivityIndicator
                            ref='loader'
                            animating={this.state.loading}
                            style={{position : 'absolute',alignSelf : 'center',justifyContent :'center',marginTop : '40%',zIndex : 10}}
                            size="large"/> */}
      
              <ScrollView contentContainerStyle={{
                width: window.width
              }}>
                <View style={styles.SWcontainer}>
                <TextInput style={commonStyles.editbox} placeholder="Propreitor Name" onChangeText={(text) => this.setState({PropreitorName: text})}
                                    placeholderTextColor="white"  
                                      underlineColorAndroid={'transparent'} ></TextInput>
                                
                                <TextInput style={commonStyles.editbox} placeholder="Primary Mobile No " onChangeText={(text) => this.setState({PrimaryMobileNo: text})}
                                    placeholderTextColor="white" 
                                      underlineColorAndroid={'transparent'} ></TextInput>
                                
                                <TextInput style={commonStyles.editbox} placeholder="Alternative Mobile No " onChangeText={(text) => this.setState({AltMobileNo: text})}
                                    placeholderTextColor="white"  
                                      underlineColorAndroid={'transparent'} ></TextInput>
                                  <TextInput style={commonStyles.editbox} placeholder="Password" onChangeText={(text) => this.setState({Password: text})}
                                    placeholderTextColor="white"   
                                      underlineColorAndroid={'transparent'} ></TextInput>
                <TextInput style={commonStyles.editbox} placeholder="Shop Name" onChangeText={(text) => this.setState({ShopName: text})}
                                    placeholderTextColor="white"  
                                      underlineColorAndroid={'transparent'} ></TextInput>
                                
                              <TextInput style={commonStyles.editbox} placeholder="Firm type" onChangeText={(text) => this.setState({Firmtype: text})}
                                    placeholderTextColor="white"   
                                      underlineColorAndroid={'transparent'} ></TextInput>
                              
                              <TextInput style={commonStyles.editbox} placeholder="Address1" onChangeText={(text) => this.setState({Address1: text})}
                                    placeholderTextColor="white"   
                                      underlineColorAndroid={'transparent'} ></TextInput>
                             <TextInput style={commonStyles.editbox} placeholder="Address2" onChangeText={(text) => this.setState({Address2: text})}
                                    placeholderTextColor="white"   
                                      underlineColorAndroid={'transparent'} ></TextInput>
                              <TextInput style={commonStyles.editbox} placeholder="Landmark" onChangeText={(text) => this.setState({Landmark: text})}
                                    placeholderTextColor="white"   
                                      underlineColorAndroid={'transparent'} ></TextInput>
                              <TextInput style={commonStyles.editbox} placeholder="Timing" onChangeText={(text) => this.setState({Timing: text})}
                                    placeholderTextColor="white"   
                                      underlineColorAndroid={'transparent'} ></TextInput>
                              <TextInput style={commonStyles.editbox} placeholder="Email Id" onChangeText={(text) => this.setState({EmailId: text})}
                                    placeholderTextColor="white"   
                                      underlineColorAndroid={'transparent'} ></TextInput>
                              <TextInput style={commonStyles.editbox} placeholder="Turnover" onChangeText={(text) => this.setState({Turnover: text})}
                                    placeholderTextColor="white"   
                                      underlineColorAndroid={'transparent'} ></TextInput>
                                      <TextInput style={commonStyles.editbox} placeholder="GST No" onChangeText={(text) => this.setState({GST_No: text})}
                                    placeholderTextColor="white"   
                                      underlineColorAndroid={'transparent'} ></TextInput>
                                      <TextInput style={commonStyles.editbox} placeholder="PAN No" onChangeText={(text) => this.setState({PAN_No: text})}
                                    placeholderTextColor="white"   
                                      underlineColorAndroid={'transparent'} ></TextInput>
                                      <TextInput style={commonStyles.editbox} placeholder="Aadhar No" onChangeText={(text) => this.setState({Aadhar_No: text})}
                                    placeholderTextColor="white"   
                                      underlineColorAndroid={'transparent'} ></TextInput>
                                      {/* <TouchableOpacity marginTop="10"  onPress= {()=> {console.log("Comming Soon");Alert.alert('Register', 'Comming Soon');}} > */}
                                      <TouchableOpacity marginTop="10"   onPress={this.chooseFile.bind(this)} >
                                        <Text style={commonStyles.editbox}>Upload GST Document</Text>
                                      </TouchableOpacity>
                                      <Image
            source={{
              uri: 'data:image/jpeg;base64,' + this.state.filePath.data,
            }}
            style={{ width: 100, height: 100 }}
          />
                              <TouchableOpacity onPress= {()=> this.registerCall()} style={commonStyles.btnBackground}>
                                  <Text style={commonStyles.textbtn}>Register</Text>
                              </TouchableOpacity>
              </View>
               
      
            
              
      
              </ScrollView>
            </View>
    );
  }
}

const styles = StyleSheet.create({

SWcontainer: {
  alignItems: 'center',
  width:'100%',
  flex :1,
  marginVertical: 50,
},


});
const mapStateToProps = (state, ownProps) => {
    // console.log('state:' + JSON.stringify(state));
    return {}
}

const mapDispatchToProps = dispatch => (bindActionCreators({
    UserData
}, dispatch));

export default connect(mapStateToProps, mapDispatchToProps)(Register);