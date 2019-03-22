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
// import Camera from 'react-native-camera';
// import { RNCamera } from 'react-native-camera';


 class RegisterPage2 extends Component {
  constructor(props) {
    super(props);
    this.RegisterPage2Call = this
      .RegisterPage2Call
      .bind(this);

    this.state = {
     
      firstname: '',
      lastname: '',
      email: '',
      mobile_No: '',
      password: '',
      gender: '',
      ConfirmPassword :'',
      terms_condition: false,
      loading: false,
     
    }
  }
  // takePicture = async function() {
  //   if (this.camera) {
  //     const options = { quality: 0.5, base64: true };
  //     const data = await this.camera.takePictureAsync(options);
  //     console.log(data.uri);
  //   }
  // };

  RegisterPage2Call() {
    console.log("on click RegisterPage2Call");
    // this
    // .props
    // .navigation
    // .goBack(null);
    this.props.navigation.navigate('OtpScreen');
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
      
                        <ActivityIndicator
                            ref='loader'
                            animating={this.state.loading}
                            style={{position : 'absolute',alignSelf : 'center',justifyContent :'center',marginTop : '40%',zIndex : 10}}
                            size="large"/>
      
      {/* <RNCamera
          ref={ref => {
            this.camera = ref;
          }}
          style={styles.preview}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.on}
          permissionDialogTitle={'Permission to use camera'}
          permissionDialogMessage={'We need your permission to use your camera phone'}
          onGoogleVisionBarcodesDetected={({ barcodes }) => {
            console.log(barcodes);
          }}
        />
        <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
          <TouchableOpacity onPress={this.takePicture.bind(this)} style={styles.capture}>
            <Text style={{ fontSize: 14 }}> SNAP </Text>
          </TouchableOpacity>
        </View> */}
              <ScrollView contentContainerStyle={{
                width: window.width
              }}>
                <View style={styles.SWcontainer}>
               
                                      <TextInput style={commonStyles.editbox} placeholder="GST No" 
                                    placeholderTextColor="white"   
                                      underlineColorAndroid={'transparent'} ></TextInput>
                                      <TextInput style={commonStyles.editbox} placeholder="PAN No" 
                                    placeholderTextColor="white"   
                                      underlineColorAndroid={'transparent'} ></TextInput>
                                      <TextInput style={commonStyles.editbox} placeholder="Aadhar No" 
                                    placeholderTextColor="white"   
                                      underlineColorAndroid={'transparent'} ></TextInput>
                                   
                                      
                              <TouchableOpacity onPress= {()=> this.RegisterPage2Call()} style={commonStyles.btnBackground}>
                                  <Text style={commonStyles.textbtn}>Next</Text>
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
preview: {
  flex: 1,
  justifyContent: 'flex-end',
  alignItems: 'center',
},
capture: {
  flex: 0,
  backgroundColor: '#fff',
  borderRadius: 5,
  padding: 15,
  paddingHorizontal: 20,
  alignSelf: 'center',
  margin: 20,
},

});
const mapStateToProps = (state, ownProps) => {
    // console.log('state:' + JSON.stringify(state));
    return {}
}

const mapDispatchToProps = dispatch => (bindActionCreators({
    UserData
}, dispatch));

export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage2);