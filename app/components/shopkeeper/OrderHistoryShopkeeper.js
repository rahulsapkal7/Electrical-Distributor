import React, { Component } from 'react';
import { AppRegistry, FlatList, StyleSheet,TextInput, Text,Alert, ScrollView,View,TouchableOpacity } from 'react-native';
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

class OrderHistoryShopkeeper extends Component {

  constructor(props) {
    super(props);

    console.log('inside order history');

    this.state = {
      // selectedArea : this.props.navigation.state.params.selectedArea,
      isDateTimePickerVisible: false,
      isEndDatePickerVisible : false,
      startDate : 'Start Date',
      endDate : 'End Date',
      loading : false,
      StoreData : [],
      orderHistoryList : [],
      orderSearchText : ''
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
        
        let formattedDate = new Date(date).toLocaleDateString();
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
   
      _hideEndDateTimePicker = () => this.setState({isEndDatePickerVisible: false});
    
          _handleEndDatePicked = (date) => {
            console.log('A date has been picked: ', date);
           
            let formattedDate = new Date(date).toLocaleDateString();
            console.log("formattedDate is",formattedDate);
            var startDate =  moment(this.state.startDate, "DD/MM/YYYY");
            var endDate = moment(formattedDate, "DD/MM/YYYY");
            console.log('endDate < startDate ',endDate < startDate);
            if(endDate < startDate){
              Alert.alert('Order History', "End date should be more than start date");
              this._hideEndDateTimePicker();
            }else{
              this.setState({endDate : formattedDate});
              this.filterDataOnDate();
              this._hideEndDateTimePicker();
            }
           
          };

          filterDataOnDate () {
            console.log("after set both dates this.state.startDate ->",this.state.startDate)
            console.log("after set both dates this.state.endDate ->",this.state.endDate)
            console.log("after set both dates this.state.StoreData ->",this.state.StoreData)
            console.log("after set both dates this.state.orderHistoryList ->",this.state.orderHistoryList);
            var data = this.state.orderHistoryList;
            var startDate =  moment(this.state.startDate, "DD/MM/YYYY");
            var endDate = moment(this.state.endDate, "DD/MM/YYYY");
            var filterData = [];
            var a = data.filter((item) => {
            console.log("item --> ",item.OrderDate);
            var orderDate =  moment(item.OrderDate, "YYYY-DD-MM") ;
            console.log("startDate --> ",startDate);
            console.log("fromDate <= orderDate", startDate <= orderDate );
            console.log("toDate --> ",endDate);
            console.log("orderDate <= toDate ", orderDate <= endDate );
                            if(startDate <= orderDate && orderDate <= endDate ){
                              filterData.push(item);
            }
                        });
          // //  fromDate <= orderDate && orderDate <= toDate
          //   var data = this.state.orderHistoryList;
          //   var filterData = [];
          //   var fromDate = this.state.startDate ;
          //   var toDate =this.state.endDate ;
          //   // var fromDate = moment(this.state.startDate, "DD/MM/YYYY") ;
          //   // var toDate = moment(this.state.endDate, "DD/MM/YYYY") ;
          //   data = data.filter((item) => {
          //     console.log("OrderDate --> ",item.OrderDate)
          //     // orderDate =  moment(this.state.endDate, "YYYY-DD-MM") ;
          //     var flag =  new Date(item.OrderDate).getTime() >= new Date(fromDate).getTime() &&
          //     new Date(item.OrderDate).getTime() <= new Date(toDate).getTime();
          //     // var flag =  fromDate <= orderDate && orderDate <= toDate
              
          //     if(flag){
          //     console.log("inside true OrderDate --> ",item.OrderDate)
             
          //       filterData.push(item);
          //     }
          // });
          console.log('filterData is --> ', filterData);
          this.setState({
            StoreData : filterData,
            
          })

          };
          clearDate (){

            this.setState({
              
              StoreData : this.state.orderHistoryList,
              startDate : 'Start Date',
              endDate : 'End Date',
            })
          }
          searchOrder (){
            if (this.state.orderSearchText == '') {
              Alert.alert('Order History', "Please enter Brand name first");
            } else {
              console.log('search box is not empty',this.state.orderSearchText);
              var orderSearchText = this.state.orderSearchText;
            var search_data = _.filter(this.state.orderHistoryList, function (item) { 
              console.log('item is',item);
              return  (item.BrandName.toLowerCase().indexOf(orderSearchText.toLowerCase())  >= 0 )
            })
            console.log("search_data is",search_data);
            this.setState({
              StoreData : search_data
            });
          }
          }
  componentDidMount() {
    
        this.getOrderHistoryOfUser();
    
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

<View style={styles.horizontal_view}>

<Text style={styles.txtStyle_fourteen}>
Order id : 
</Text>
<Text style={styles.txtStyle_sixteen}>
{' '+item.OrderID}
</Text>
</View>

                <View style={styles.horizontal_view}>
      
      <TouchableOpacity style={styles.btnBackground1}
      onPress= {()=> this.showPDF()}>
          <Text style={commonStyles.textbtn}>Invoice</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.btnBackground1}
      onPress= {()=> this.showPDF()}>
          <Text style={commonStyles.textbtn}>Purchase order</Text>
      </TouchableOpacity>
        </View>
            </View> 
        </TouchableOpacity>
            )
    }
    showPDF() { 
      this.props.navigation.navigate('PDFExample');
    }

    getOrderHistoryOfUser = () =>{
      const url = api() + 'ViewAddOrder.php';
       console.log(url);
      
      this.setState({loading: true});
  
      var data = new FormData();
      data.append('UserID',this.props.UserId ),
      
      // data.append('UserID', "2"),
      fetch(url,{method: 'post',
      body: data
    })
          .then(response => response.json())
          .then(res => {
            console.log("response is",JSON.stringify(res));
      this.setState({loading: false});
      
            if(res.status){
              this.setState({
                StoreData: res.data,
                orderHistoryList : res.data,
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
                title={'ORDER HISTORY'}
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
              <View style={styles.filtercontainer}> 
               <TouchableOpacity style={{paddingLeft:10}} onPress={this._showDateTimePicker}>
               <TextInput style={styles.editbox} value={this.state.startDate}  editable={false}
                ></TextInput>

        </TouchableOpacity>
        <TouchableOpacity style={{paddingLeft:10}} onPress={this._showEndDatePicker}>
               <TextInput style={styles.editbox} value={this.state.endDate}  editable={false}
                ></TextInput>

        </TouchableOpacity>
        <TouchableOpacity style={styles.btnBackground}
      onPress= {()=> this.clearDate()}>
          <Text style={commonStyles.textbtn}>Clear</Text>
      </TouchableOpacity>
        <DateTimePicker
          isVisible={this.state.isDateTimePickerVisible}
          onConfirm={this._handleDatePicked}
          onCancel={this._hideDateTimePicker}
        />
        <DateTimePicker
          isVisible={this.state.isEndDatePickerVisible}
          onConfirm={this._handleEndDatePicked}
          onCancel={this._hideEndDateTimePicker}
        />
              </View>
              <View style={styles.searchContainer}> 
                  <TextInput style={styles.searchEditbox} placeholder={'Please enter order details'} placeholderTextColor={'#ddd'} onChangeText={(text) => this.setState({orderSearchText: text})} 
                ></TextInput>
                  <TouchableOpacity style={styles.searchBackcontainer} onPress={() => this.searchOrder()}>
                  <Icon name='search'  style={{ color: "black" }} />
                   </TouchableOpacity>
               
                  </View>
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
  searchContainer: {
    flexDirection: 'row',
    height: 50,
    paddingLeft : 10,
    width: '100%',
    // backgroundColor: '#7dca20',
    // alignItems: 'center',
    // borderColor : "yellow",     borderWidth : 1,
  },
  searchEditbox: {
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
searchBackcontainer: {
  width: '15%',
  height: 40,
  marginVertical: 10,
  marginBottom:15,
  paddingHorizontal: 10, 
  // alignItems: 'center'
  
},
  parentcontainer: { 
    flexDirection: 'column', 
    height: '100%',  
  },

  btnBackground: {
     backgroundColor:'skyblue',
     borderRadius: 5,
     width: 100,
     height: 30, 
     paddingHorizontal: 10,
     marginVertical: 10,
     marginBottom:15,
     marginLeft:10
 },
 editbox: {
  width: 100,
  height: 30, 
  borderRadius: 5,
  borderColor: 'black',
  borderWidth:1,
  paddingHorizontal: 10,
  color: 'black',
  marginVertical: 10,
  marginBottom:15
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
  txtStyle_fourteen: {  
    fontSize: 14,
    color:'white'
  },
  txtStyle_sixteen: {  
    fontSize: 16,
    color:'white'
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

export default connect(mapStateToProps, mapDispatchToProps)(OrderHistoryShopkeeper  );