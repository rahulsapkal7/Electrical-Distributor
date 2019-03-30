import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Button,
    Image,
    Alert,
    TextInput,ScrollView,TouchableOpacity
                
} from "react-native";

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {UserData} from '../../redux/actions/UserData_action';
import {NavigationActions} from 'react-navigation';
import Header from '../../common/header';
import {api} from '../../common/api';
import Loader from '../../common/Loader.js';
var validators = require('../../lib/validators').validators();

// 
class MyProfileShopkeeper extends Component {

    static navigationOptions = {
        header: null,
    }

    constructor(){
        super()
        this.state={
            userData:'',
            loading : false,
            editable : false,
            UserID : ""
           
        }
        this.editProfile = this
        .editProfile
        .bind(this);
        this.saveProfile = this
        .saveProfile
        .bind(this);
        
    } 
    componentWillReceiveProps(newProps){
        console.log('newProps:' + JSON.stringify(newProps));
       
        
    }
    componentDidMount() {
        this.getMyProfileCustomer();
      }
      editProfile (){
        console.log('edit profile:' ,this.state);
        this.setState({editable: true});
      }
      saveProfile(){
        if (this.state.PropreitorName === undefined || (!validators.RegularExpressionName(this.state.PropreitorName))) {
            Alert.alert('Register', 'Enter a valid Name');
          }else if(this.state.PrimaryMobileNo === undefined || (!validators.RegularExpressionMobileNumber(this.state.PrimaryMobileNo))  ){
            Alert.alert('Register', 'Enter a valid primary mobile number');
          }else if(this.state.AltMobileNo === undefined || (!validators.RegularExpressionMobileNumber(this.state.AltMobileNo))){
            Alert.alert('Register', 'Enter a valid alternative mobile number');
          }
        //   else if(this.state.Password === undefined || (!validators.RegularExpressionPassword(this.state.Password))){
        //     Alert.alert('Register',"Your password should contain \n Minimum 7 characters including atleast 1 number");
        //   }else if(this.state.Password != this.state.ReEnterPassword ){
        //     Alert.alert('Register',"Password does not matched");
        //   }
          else if(this.state.ShopName === undefined){
            Alert.alert('Register', 'Enter a valid shopName');
          }else if(this.state.FirmType === undefined){
            Alert.alert('Register', 'Enter a valid FirmType');
          }
          // else if(this.state.Status === undefined){
          //   Alert.alert('Register', 'Enter a valid Status');
          // }
          else if(this.state.Address1 === undefined){
            Alert.alert('Register', 'Enter a valid first Address');
          }else if(this.state.Address2 === undefined){
            Alert.alert('Register', 'Enter a valid second Address');
          }else if(this.state.Landmark === undefined){
            Alert.alert('Register', 'Enter a valid Landmark');
          }else if(this.state.Timing === undefined){
            Alert.alert('Register', 'Enter a valid Timing');
          }else if(this.state.EmailId === undefined || (!validators.RegularExpressionEmail(this.state.EmailId))){
            Alert.alert('Register', 'Enter a valid EmailId');
          }else if(this.state.Turnover === undefined){
            Alert.alert('Register', 'Enter a valid Turnover');
          }else if(this.state.GST_No === undefined){
            Alert.alert('Register', 'Enter a valid GST Number');
          }else if(this.state.PAN_No === undefined){
            Alert.alert('Register', 'Enter a valid PAN Number');
          // }else if(this.state.Aadhar_No === ''){
          //   Alert.alert('Login', 'Enter a valid mobile number');
          }else{
        console.log('saveProfile profile:',this.state );
        const url = api() + 'UpdateCustProfile.php';
        console.log(url);
       this.setState({loading: true});
       var data = new FormData();
       data.append('UserID', this.props.UserId ),
       data.append('PropreitorName', this.state.PropreitorName ),
       data.append('PrimaryMobileNo', this.state.PrimaryMobileNo ),
       data.append('AltMobileNo', this.state.AltMobileNo ),
       data.append('Status', this.state.Status ),
       data.append('ShopName', this.state.ShopName ),
       data.append('FirmType', this.state.FirmType ),
       data.append('Address1', this.state.Address1 ),
       data.append('Address2', this.state.Address2 ),
       data.append('Landmark', this.state.Landmark ),
       data.append('Timings', this.state.Timings ),
       data.append('EMailID', this.state.EMailID ),
       data.append('Turnover', this.state.Turnover ),
       data.append('GSTNo', this.state.GSTNo ),
       data.append('PANNo', this.state.PANNo ),
       data.append('AadhaarNo', this.state.AadhaarNo ),
       console.log("data before hit ",JSON.stringify(data) );
       fetch(url,{method: 'post',body:data})
           .then(response => response.json())
           .then(res => {
             console.log("response is",res);
             this.setState({loading: false});
             console.log("response is",JSON.stringify(res));
             if(res.status){
               Alert.alert('My Profile', res.message,[{text: 'OK', 
               onPress: () => {
                   console.log('OK Pressed');
                   this.props.navigation.goBack(null)}}]
               , {cancelable: false},);
               
             }else{
               Alert.alert('My Profile', "Something went wrong");
             }
               
           })
           .catch(error => {
   
               console.log('error:' + (error));
               this.setState({ loading: false});
           });
        }
      }
      getMyProfileCustomer = () =>{
        const url = api() + 'ViewCustMyProfile.php';
         console.log(url);
        
        this.setState({loading: true});
        var data = new FormData()
        console.log("this.props.UserId",this.props.UserId);
        data.append('UserID',this.props.UserId ),
        console.log("data before hit ",JSON.stringify(data) );
        fetch(url,{method: 'post',body:data})
            .then(response => response.json())
            .then(res => {
              console.log("response is",res);
              console.log("response is",JSON.stringify(res));
            //   res = {
            //     "status": true,
            //     "message": "Profile detail",
            //     "data": {
            //         "UserID": "2",
            //         "PropreitorName": "Sneha",
            //         "PrimaryMobileNo": "2589647123",
            //         "AltMobileNo": "2589635147",
            //         "Status": "A",
            //         "ShopName": "ABC",
            //         "FirmType": "type",
            //         "Address1": "Write Address1",
            //         "Address2": "Write Address2",
            //         "Landmark": "Write Landmark",
            //         "Timings": "2 am",
            //         "EMailID": "email@.com",
            //         "Turnover": "12000",
            //         "GSTNo": "12jhghj",
            //         "PANNo": "12jhghj",
            //         "PANDoc": "",
            //         "AadhaarNo": "12jhghj",
            //         "AadhaarDoc": ""
            //     }
            // }
              if(res.status){
                this.setState({
                    userData: res.data[0],
                    loading : false,
                    PropreitorName: res.data[0].PropreitorName,
                    PrimaryMobileNo : res.data[0].PrimaryMobileNo,
                    AltMobileNo: res.data[0].AltMobileNo,
                    Status : res.data[0].Status,
                    ShopName : res.data[0].ShopName,
                    FirmType: res.data[0].FirmType,
                    Address1 : res.data[0].Address1,
                    Address2: res.data[0].Address2,
                    Landmark : res.data[0].Landmark,
                    Timings:res.data[0].Timings,
                    EMailID: res.data[0].EMailID,
                    Turnover : res.data[0].Turnover,
                    GSTNo: res.data[0].GSTNo,
                    PANNo : res.data[0].PANNo,
                    AadhaarNo: res.data[0].AadhaarNo,
                    // Turnover : res.data[0].Turnover,
                      // error: res.error || null,                   
                      // refreshing: false
                  });
                  console.log("after set ",this.state);
              }else{
                Alert.alert('My Profile', "Something went wrong");
                this.setState({loading: false});
              }
                
            })
            .catch(error => {
    
                console.log('error:' + (error));
                this.setState({error, loading: false});
            });
    
      }
    render() {
        return (

            <View style={styles.parent_container}>
          <Header
                title={'MY PROFILE'}
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
                <View style={styles.firstContainer}>
                <Image style={{ width: 70, height: 70 }}
                    source={require('../../assets/images/default-profile.png')}></Image>
                    </View>
                <View style={styles.secondContainer}> 
                <TextInput style={styles.editbox} defaultValue={this.state.PropreitorName}  onChangeText={(text) => this.setState({PropreitorName: text})}  editable={this.state.editable}
                ></TextInput>
                <TextInput style={styles.editbox} defaultValue={this.state.PrimaryMobileNo}  editable={this.state.editable} onChangeText={(text) => this.setState({PrimaryMobileNo: text})}
                    ></TextInput>
                <TextInput style={styles.editbox} defaultValue={this.state.AltMobileNo}  editable={this.state.editable} onChangeText={(text) => this.setState({AltMobileNo: text})}
                    ></TextInput>
                     <TextInput style={styles.editbox} defaultValue={this.state.Status}  editable={this.state.editable} onChangeText={(text) => this.setState({Status: text})}
                    ></TextInput>
                <TextInput style={styles.editbox} defaultValue={this.state.ShopName}  editable={this.state.editable} onChangeText={(text) => this.setState({ShopName: text})}
                    ></TextInput>

<TextInput style={styles.editbox} defaultValue={this.state.Address1} editable={this.state.editable} onChangeText={(text) => this.setState({Address1: text})}
                ></TextInput>
                <TextInput style={styles.editbox} defaultValue={this.state.Address2}  editable={this.state.editable} onChangeText={(text) => this.setState({Address2: text})}
                     ></TextInput>
                <TextInput style={styles.editbox} defaultValue={this.state.Landmark}  editable={this.state.editable} onChangeText={(text) => this.setState({Landmark: text})}
                    ></TextInput>
                    <TextInput style={styles.editbox} defaultValue={this.state.Timings}  editable={this.state.editable} onChangeText={(text) => this.setState({Timings: text})}
                     ></TextInput>
                    
                <TextInput style={styles.editbox} defaultValue={this.state.EMailID}  editable={this.state.editable} onChangeText={(text) => this.setState({EMailID: text})}
                    ></TextInput>
                     <TextInput style={styles.editbox} defaultValue={this.state.Turnover} editable={this.state.editable} onChangeText={(text) => this.setState({Turnover: text})}
                ></TextInput>
                <TextInput style={styles.editbox} defaultValue={this.state.GSTNo}  editable={this.state.editable} onChangeText={(text) => this.setState({GSTNo: text})}
                    placeholderTextColor="black" ></TextInput>
                <TextInput style={styles.editbox} defaultValue={this.state.PANNo}  editable={this.state.editable} onChangeText={(text) => this.setState({PANNo: text})}
                    placeholderTextColor="black" ></TextInput>
                <TextInput style={styles.editbox} defaultValue={this.state.AadhaarNo}  editable={this.state.editable} onChangeText={(text) => this.setState({AadhaarNo: text})}
                    placeholderTextColor="black" ></TextInput>
              { this.state.editable ?  
                <TouchableOpacity style={styles.btnBackground} onPress= {()=> this.saveProfile()} >
                    <Text style={styles.textbtn}>Save</Text>
                </TouchableOpacity>
                :
                <TouchableOpacity style={styles.btnBackground} onPress= {()=> this.editProfile()} >

                    <Text style={styles.textbtn}>Edit</Text>
                </TouchableOpacity>
               
                 }
               

                
 
                </View>
            </View>
            </ScrollView>
            </View>
        );
    }
} 

const styles = StyleSheet.create({
     parent_container: {
        flex: 1, 
        backgroundColor: '#ddd'
    },container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    height: '90%',
        backgroundColor: '#ddd'
    },
    firstContainer:{
        flex:0.2,
        justifyContent: 'center'
    },
    secondContainer:{
        flex:0.8
    },
    logotext: {
        marginVertical: 25,
        fontSize: 22,
        color: 'black'
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
    textbtn: {
        fontSize: 16,
        fontWeight: '500',
        color: 'white',
        textAlign: 'center'
    },
    btnBackground: {
      backgroundColor:'skyblue',
        borderRadius: 25,
        paddingVertical: 10,
        marginVertical: 20,
        width: 300,
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
  txtMain:{
    fontSize: 14,
    color:'white',
        fontWeight: '500',
  },
  verticalContainer: { 
    flexDirection: 'column', 
    height: '90%',
    flex: 1,
  }, 
});


const mapStateToProps = (state, ownProps) => {
    console.log('state:' + JSON.stringify(state));
    return {UserId: state.UserData_red.UserId}
    // return {}
  }
  
  const mapDispatchToProps = dispatch => (bindActionCreators({
    UserData
  }, dispatch));
  
  export default connect(mapStateToProps, mapDispatchToProps)(MyProfileShopkeeper);