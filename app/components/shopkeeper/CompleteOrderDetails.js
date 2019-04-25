import React, { Component } from 'react';
import { AppRegistry, FlatList,Image, StyleSheet,TextInput, Text,Alert, ScrollView,View,TouchableOpacity } from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import commonStyles from '../../common/commonStyle';
import {UserData} from '../../redux/actions/UserData_action';
import {api} from '../../common/api';
import {NavigationActions} from 'react-navigation';
import Header from '../../common/header';
import Loader from '../../common/Loader.js';
import DateTimePicker from 'react-native-modal-datetime-picker';
import moment from 'moment';
import {  Icon } from 'native-base';
import {_} from 'underscore';

class CompleteOrderDetails extends Component {

  constructor(props) {
    super(props);

    console.log('inside order history');
    // this.params = this.props.navigation.state.params;
    

    this.state = {
        CartId : this.props.navigation.state.params.CartId,
    //   isDateTimePickerVisible: false,
    //   isEndDatePickerVisible : false,
    //   startDate : 'Start Date',
    //   endDate : 'End Date',
      loading : false,
      StoreData : [],
      cartTotal:0,
      mFilePathOfInvoice:'',
      
    //   orderHistoryList : [],
    //   orderSearchText : ''
    }
    // this.searchOrder = this
    // .searchOrder
    // .bind(this);
    console.log("props are --> ",JSON.stringify(props));
   
  }
  _showDateTimePicker = () => this.setState({isDateTimePickerVisible: true});
  
      _hideDateTimePicker = () => {this.setState({isDateTimePickerVisible: false });console.log("Cancel pressed")};

      _handleDatePicked = (date) => {
        console.log('A date has been picked: ', date);
        
        // let formattedDate = new Date(date).toLocaleDateString();
        let formattedDate = moment(date).format('DD/MM/YYYY');
        
        console.log("formattedDate is",formattedDate);
        this.setState({startDate : formattedDate, endDate : 'End Date'});
        this._hideDateTimePicker();
      };

      _showEndDatePicker = () => {
        console.log("isDateTimePickerVisible --> ",this.state.isDateTimePickerVisible);
        if (this.state.startDate == 'Start Date') {
          Alert.alert('Order History', "Please select start date first");
        } else{
          this.setState({isEndDatePickerVisible: true});
        }
        

    
    }; 
     
  componentDidMount() {
    
        this.getCompleteDetailsOfSpecificCart();
    
      } 


renderItem=({item})=>{

        

        return(
        <TouchableOpacity style={{ flex:1}}  
        >
          <View style={styles.card_outer}>
          <View style={styles.horizontal_view}>
          <View style={styles.detailView}>
           <View style={styles.horizontal_view}>
        <Text style={styles.txtStyle_fourteen}>
        Brand : 
                </Text>
                <Text style={styles.txtStyle_sixteen}>
                    {item.BrandName}
                </Text>
                </View>
                <View style={styles.horizontal_view}>
        <Text style={styles.txtStyle_fourteen}>
        Category : 
                </Text>
                <Text style={styles.txtStyle_sixteen}>
                    {item.BrandCategoryName}
                </Text>
                </View>
               

                <View style={styles.horizontal_view}>
        <Text style={styles.txtStyle_fourteen}>
        Quantity : 
                </Text>
                <Text style={styles.txtStyle_sixteen}>
                    {item.Quantity}
                </Text>
                </View>
                <View style={styles.horizontal_view}>
        <Text style={styles.txtStyle_fourteen}>
        Product Price : 
                </Text>
                <Text style={styles.txtStyle_sixteen}>
                    {item.ProductPrice}
                </Text>
                </View>
                <View style={styles.horizontal_view}>
        <Text style={styles.txtStyle_fourteen}>
        Amount : 
                </Text>
                <Text style={styles.txtStyle_sixteen}>
                    {item.Amount}
                </Text>
                </View>
</View>
<View style={styles.imageView}>
<Image
              source={{ uri: item.SubCategoryImage }}
              style={{ width: "90%", height:"90%" }}
              
            />

</View>
</View>


                {/* <View style={styles.horizontal_view}>
        <Text style={styles.txtStyle_fourteen}>
        Product Description : 
                </Text>
                <Text style={styles.txtStyle_sixteen}>
                    {item.ProductDes}
                </Text>
                </View> */}
               

            </View> 
        </TouchableOpacity>
            )
    }

    showPDF() { 
    //   this.props.navigation.navigate('');
      this.navigate = this.props.navigation.navigate;
      this.navigate("PDFExample", {
        pdfURL: this.state.mFilePathOfInvoice
      }); 
    }

    getCompleteDetailsOfSpecificCart = () =>{
      const url = api() + 'ViewOrderCustomer.php';
       console.log(url);
      
      this.setState({loading: true});

      console.warn(this.state.CartId);
  
      var data = new FormData();
      data.append('UserID',this.props.UserId ),
      data.append('CartNo',this.state.CartId ),
      console.log("Data is",data);
      // data.append('UserID', "2"),
      fetch(url,{method: 'post',
      body: data
    })
          .then(response => response.json())
          .then(res => {
            console.log("response is",JSON.stringify(res));
      this.setState({loading: false});
      
            if(res.status){
              var Total = 0 ;
              var result = res.data.map(function(obj) {
                 Total = Total + parseInt(obj.Amount) ;
              });
              console.log("Total of cart is",Total)
              this.setState({
                StoreData: res.data,
                orderHistoryList : res.data,
                mFilePathOfInvoice:res.result.file_path,
                cartTotal : Total
              });
             
            }else{
              Alert.alert('Order History', "Something went wrong");
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
                title={'COMPLETE DETAILS'}
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

       
       
       <View style={styles.card_outer}>
       <View style={styles.horizontal_view}>
        <Text style={styles.txtStyle_fourteen_width}>
        Total : 
                </Text>
                <Text style={styles.txtStyle_sixteen_width}>
                    {this.state.cartTotal}
                </Text>
                </View>

      
        </View>
      <TouchableOpacity style={styles.btnBackground1}
      onPress= {()=> this.showPDF()}>
          <Text style={commonStyles.textbtn}>View invoice</Text>
      </TouchableOpacity> 
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
  filtercontainer: {
    flexDirection: 'row',
    height: 40,
    width: '100%',
    // backgroundColor: '#7dca20',
    // alignItems: 'center',
    // borderColor : "yellow",     borderWidth : 1,
  },
  btnBackground1: {
     backgroundColor:'skyblue',
     borderRadius: 25,
     paddingVertical: 10,
     marginVertical: 10,
     marginHorizontal:10,
     flex:1
 },
  txtMain:{
    fontSize: 16,
    color:'white',
    fontWeight:'500'
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
  verticle_view: { 
    flexDirection: 'column', 
  },
  detailView : { 
    width : "70%"
  },
  imageView : { 
    width : "30%"
  },
  txtStyle_fourteen: {  
    fontSize: 14,
    color:'white',
   
  },
  txtStyle_fourteen_width: {  
    fontSize: 22,
    color:'white',
    width : "70%"
  },
  txtStyle_sixteen_width: {  
    fontSize: 26,
    color:'white',
    width : "30%"
  },
  txtStyle_sixteen: {  
    fontSize: 16,
    color:'white',
   
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
        // flexDirection:'column',
        height: '100%', 
  },
})
 
const mapStateToProps = (state, ownProps) => {
  
  console.log('state:' + JSON.stringify(state));
  return {UserId: state.UserData_red.UserId}
}

const mapDispatchToProps = dispatch => (bindActionCreators({
  UserData
}, dispatch));

export default connect(mapStateToProps, mapDispatchToProps)(CompleteOrderDetails  );