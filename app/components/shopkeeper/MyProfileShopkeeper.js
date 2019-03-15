import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Button,
    Image,
    TextInput,ScrollView,TouchableOpacity
                
} from "react-native";

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {UserData} from '../../redux/actions/UserData_action';
import {NavigationActions} from 'react-navigation';
import Header from '../../common/header';
import {api} from '../../common/api';

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
        console.log('saveProfile profile:',this.state );
        const url = api() + 'UpdateCustProfile.php';
        console.log(url);
       this.setState({loading: true});
       var data = new FormData();
       data.append('UserId', this.props.UserId ),
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
       
       console.log("data before hit ",JSON.stringify(data) );
       fetch(url,{method: 'post',body:data})
           // .then(response => response.json())
           .then(res => {
             console.log("response is",res);
             
             console.log("response is",JSON.stringify(res));
             if(res.status){
               Alert.alert('My Profile', res.message);
               
             }else{
               Alert.alert('My Profile', "Something went wrong");
             }
               
           })
           .catch(error => {
   
               console.log('error:' + (error));
               this.setState({error, loading: false});
           });
      }
      getMyProfileCustomer = () =>{
        const url = api() + 'ViewCustMyProfile.php';
         console.log(url);
        
        this.setState({loading: true});
        var data = new FormData()
        data.append('UserId', this.props.UserId ),
        console.log("data before hit ",JSON.stringify(data) );
        fetch(url,{method: 'post',body:data})
            // .then(response => response.json())
            .then(res => {
              console.log("response is",res);
              
              console.log("response is",JSON.stringify(res));
              res = {
                "status": true,
                "message": "Profile detail",
                "data": {
                    "UserID": "2",
                    "PropreitorName": "Sneha",
                    "PrimaryMobileNo": "2589647123",
                    "AltMobileNo": "2589635147",
                    "Status": "A",
                    "ShopName": "ABC",
                    "FirmType": "type",
                    "Address1": "Write Address1",
                    "Address2": "Write Address2",
                    "Landmark": "Write Landmark",
                    "Timings": "2 am",
                    "EMailID": "email@.com",
                    "Turnover": "12000",
                    "GSTNo": "12jhghj",
                    "PANNo": "12jhghj",
                    "PANDoc": "",
                    "AadhaarNo": "12jhghj",
                    "AadhaarDoc": ""
                }
            }
              if(res.status){
                this.setState({
                    userData: res.data,
                    loading : false,
                    PropreitorName: res.data.PropreitorName,
                    PrimaryMobileNo : res.data.PrimaryMobileNo,
                    AltMobileNo: res.data.AltMobileNo,
                    Status : res.data.Status,
                    ShopName : res.data.ShopName,
                    FirmType: res.data.FirmType,
                    Address1 : res.data.Address1,
                    Address2: res.data.Address2,
                    Landmark : res.data.Landmark,
                    Timings:res.data.Timings,
                    EMailID: res.data.EMailID,
                    Turnover : res.data.Turnover,
                    // GSTNo: res.data.GSTNo,
                    // PANNo : res.data.PANNo,
                    // AadhaarNo: res.data.AadhaarNo,
                    // Turnover : res.data.Turnover,
                      // error: res.error || null,                   
                      // refreshing: false
                  });
                  console.log("after set ",this.state);
              }else{
                Alert.alert('My Profile', "Something went wrong");
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
                title={'My profile'}
                back={() => {
                this
                  .props
                  .navigation
                  .goBack(null)
              }}/>
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
                {/* <TextInput style={styles.editbox} defaultValue={this.state.GSTNo}  editable={this.state.editable} onChangeText={(text) => this.setState({GSTNo: text})}
                    placeholderTextColor="black" ></TextInput>
                <TextInput style={styles.editbox} defaultValue={this.state.PANNo}  editable={this.state.editable} onChangeText={(text) => this.setState({PANNo: text})}
                    placeholderTextColor="black" ></TextInput>
                <TextInput style={styles.editbox} defaultValue={this.state.AadhaarNo}  editable={this.state.editable} onChangeText={(text) => this.setState({AadhaarNo: text})}
                    placeholderTextColor="black" ></TextInput> */}
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