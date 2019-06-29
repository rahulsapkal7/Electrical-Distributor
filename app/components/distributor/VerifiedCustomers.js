import React, { Component } from 'react';
import { AppRegistry, FlatList,TextInput, Alert,StyleSheet, Text, View,TouchableOpacity,Image } from 'react-native';
// import Cards from '../HomeScreen/Cards.js';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {UserData} from '../../redux/actions/UserData_action';
import {NavigationActions} from 'react-navigation';
import Header from '../../common/header';
import {api} from '../../common/api';
import Loader from '../../common/Loader.js';

class VerifiedCustomers extends Component {


  constructor(props) {
    super(props);
    console.log('inside verified customer distributor');
    this.state = {
      type : this.props.navigation.state.params.type,
      loading : false,
      reason : '',
      StoreData : []
    }
    console.log("props are --> ",JSON.stringify(props));
  }

  componentDidMount() {
        this.getVerifiedCustomers();
      }
      getVerifiedCustomers = () =>{
        // const url = api() + 'ApprovedCustList.php';
        var url = null;
        if (this.state.type == "Approved") {
          url =  api() + "ApprovedCustList.php";
        } else if(this.state.type == "Rejected") {
          url =   api() +"RejectedCustList.php";
        }else if(this.state.type == "Pending") {
          url =   api() +"PendingCustList.php";
        }
       
         console.log(url);
        
        this.setState({loading: true});
    
        fetch(url,{method: 'post'})
            .then(response => response.json())
            .then(res => {
              console.log("response is",res);
              
              console.log("response is",JSON.stringify(res));
              if(res.status){
                this.setState({
                  StoreData: res.data,
                  loading : false
                });
              }else{
                Alert.alert('Verified Customer', "Something went wrong");
                this.setState({loading: false});
                
              }
                
            })
            .catch(error => {
    
                console.log('error:' + (error));
                this.setState({error, loading: false});
            });
    
      }
      AdminApprovalReg (registerType,regId){
        console.log('register tpye is ',registerType);
        console.log('register regId is ',regId);
        
        if (registerType == 'reject' && (this.state.reason === undefined || this.state.reason === '' )) {
            Alert.alert('Pending Customer', 'Please enter Reason for rejection');
        } else {
          var  url =  api() + "AdminApprovalReg.php";
           console.log(url);
          this.setState({loading: true});
          var data = new FormData()
          data.append('UserID', regId ),
          data.append('RejectionReason', registerType == 'reject' ? this.state.reason : "" ),
          data.append('Status', registerType == 'reject' ? "Rejected" : "Approved" ),
          console.log("inside AdminApprovalReg data is", data);
          fetch(url,{method: 'post',body:data})
              .then(response => response.json())
              .then(res => {
                console.log("response is",res);
                
                console.log("response is",JSON.stringify(res));
                if(res.status){
                  this.setState({
                    
                    loading : false
                  });
                  Alert.alert('Pending Customer', res.message,[{text: 'OK', 
                  onPress: () => {
                      console.log('OK Pressed');
                      this
                      .props
                      .navigation
                      .goBack(null)
                      // this.textInput.clear()
                      // this.getVerifiedCustomers();
                     }}]
                  , {cancelable: false},);
                
                }else{
                  Alert.alert('Verified Customer', "Something went wrong");
                  this.setState({loading: false});
                }
                  
              })
              .catch(error => {
      
                  console.log('error:' + (error));
                  this.setState({error, loading: false});
              });

        }
      }
renderItem=({item})=>{
        return(
          <View style={styles.productParent} >
          
               
            <View style={styles.horizontal_view}>
               <Text style={styles.txtStyle_fourteen}>
               Shopkeeper name : 
              </Text>
            <Text style={styles.txtStyle_sixteen}>
            {item.PropreitorName }
            </Text>
            </View>
            <View style={styles.horizontal_view}>
               <Text style={styles.txtStyle_fourteen}>
               Shop Name : 
              </Text>
            <Text style={styles.txtStyle_sixteen}>
            {item.ShopName }
            </Text>
            </View>
            <View style={styles.horizontal_view}>
               <Text style={styles.txtStyle_fourteen}>
               Mobile No : 
              </Text>
            <Text style={styles.txtStyle_sixteen}>
            {item.PrimaryMobileNo }
            </Text>
            </View>
    
            <View style={styles.horizontal_view}>
               <Text style={styles.txtStyle_fourteen}>
               Email Id : 
              </Text>
            <Text style={styles.txtStyle_sixteen}>
            {item.EMailID }
            </Text>
            </View>
            <View style={styles.horizontal_view}>
               <Text style={styles.txtStyle_fourteen}>
               Address : 
              </Text>
            <Text style={styles.txtStyle_sixteen}>
            {item.Address1 }
            </Text>
            </View>
            <View style={styles.horizontal_view}>
               <Text style={styles.txtStyle_fourteen}>
               GST No : 
              </Text>
            <Text style={styles.txtStyle_sixteen}>
            {item.GSTNo }
            </Text>
            </View>
    
            <View style={styles.horizontal_view}>
               <Text style={styles.txtStyle_fourteen}>
               PAN No : 
              </Text>
            <Text style={styles.txtStyle_sixteen}>
            {item.PANNo }
            </Text>
            </View>
           {this.state.type == "Pending"  ? 
           <View style={styles.vertical_view}>
           <TextInput style={styles.editbox} placeholder="Reason" onChangeText={(text) => this.setState({reason: text})}
                           ref={input => { this.textInput = input }}   placeholderTextColor="white"  
                                                            underlineColorAndroid={'transparent'} ></TextInput>
           <View style={styles.horizontal_view}>
      <TouchableOpacity style={styles.btnBackground} onPress={() => this.AdminApprovalReg('accept',item.UserID)} >
                    <Text style={styles.txtStyle_sixteen}>Accept</Text>
                </TouchableOpacity>
                 <TouchableOpacity style={styles.btnBackground} onPress={() => this.AdminApprovalReg('reject',item.UserID)} >

                    <Text style={styles.txtStyle_sixteen}>Reject</Text>
                </TouchableOpacity>
                </View>
                </View>
           : null} 
           
            
            
        </View> 


       
            )
    }

  render() {
    return (

    <View style={styles.parentcontainer}>
   
          <Header
                title=  {this.state.type == "Approved" ? 'Approved Customers' : (this.state.type == "Rejected" ? 'Rejected Customers' : 'Pending Customers')  }
                back={() => {
                this
                  .props
                  .navigation
                  .goBack(null)
              }}/>
      <View style={styles.container}>
    
      <Loader visible={this.state.loading}/>
        <FlatList
           data={this.state.StoreData}
          renderItem={this.renderItem}
        />
      </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  editbox: {
    width: 300,
    height: 40, 
    borderRadius: 5,
    borderColor: 'white',
    borderWidth:1,
    paddingHorizontal: 10,
    color: 'white',
    marginVertical: 10,
    marginBottom:10
},
  parentcontainer: { 
    flexDirection: 'column', 
    height: '100%',  
  },
  shopkeeperInfo: {  
    width: '90%',  
  },
  icon: {  
    width: '10%', 
        justifyContent: 'center', 
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
  },
  vertical_view: { 
    flexDirection: 'column', 
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
        backgroundColor:'#ddd',
        flex: 1,        
        marginRight: 5, 
        marginTop: 10,
        flexDirection:'row',
        height: '80%', 
  },
  productParent:{
    flex:1,
    flexDirection: 'column', 
    backgroundColor: '#FFB367',
    // alignItems: 'center',
    // justifyContent: 'center', 
    borderRadius:2,
    borderColor: 'red',
    margin : 10,
    padding : 15,
    borderWidth:1,
    borderRadius:2,
    borderColor: '#ddd',
    
  },
})
 
const mapStateToProps = (state, ownProps) => {
  // console.log('state:' + JSON.stringify(state));
  return {}
}

const mapDispatchToProps = dispatch => (bindActionCreators({
  UserData
}, dispatch));

export default connect(mapStateToProps, mapDispatchToProps)(VerifiedCustomers  );