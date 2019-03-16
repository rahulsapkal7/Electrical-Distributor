import React, { Component } from 'react';
import { AppRegistry, FlatList, StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {UserData} from '../../redux/actions/UserData_action';
import {api} from '../../common/api';
import {NavigationActions} from 'react-navigation';
import Header from '../../common/header';

class OrderHistoryShopkeeper extends Component {

  constructor(props) {
    super(props);

    console.log('inside order history');

    this.state = {
      // selectedArea : this.props.navigation.state.params.selectedArea,
      loading : false,
      StoreData : []
    }

    console.log("props are --> ",JSON.stringify(props));
   
  }

  componentDidMount() {
    
        this.getOrderHistoryOfUser();
    
      }

renderItem=({item})=>{
        return(
        <TouchableOpacity style={{ flex:1,flexDirection:'column',marginBottom:3}} 
        >
           
            <View style={styles.card_outer}>
                 
                <View style={styles.horizontal_view}>

        <Text style={styles.txtStyle_fourteen}>
        Product name : 
                </Text>
                <Text style={styles.txtStyle_sixteen}>
                    {' '+item.ProductName+"("+item.MfgName+")"}
                </Text>
                </View>

<View style={styles.horizontal_view}>

        <Text style={styles.txtStyle_fourteen}>
        Price : 
                </Text>
                <Text style={styles.txtStyle_sixteen}>
                    {' '+item.Price}
                </Text>
                </View>

                <View style={styles.horizontal_view}>

        <Text style={styles.txtStyle_fourteen}>
        Quantity : 
                </Text>
                <Text style={styles.txtStyle_sixteen}>
                    {' '+item.Qty}
                </Text>
                </View>

                <View style={styles.horizontal_view}>

<Text style={styles.txtStyle_fourteen}>
Date : 
        </Text>
        <Text style={styles.txtStyle_sixteen}>
            {' '+item.PODate}
        </Text>
        </View>
            </View> 
        </TouchableOpacity>
            )
    }

    getOrderHistoryOfUser = () =>{
      const url = api() + 'CustomerOrderHistory.php';
       console.log(url);
      
      this.setState({loading: true});
  
      var data = new FormData()
      data.append('UserID', "2"),
      fetch(url,{method: 'post',
      body: data
    })
          .then(response => response.json())
          .then(res => {
            console.warn("response is",JSON.stringify(res));
            if(res.status){

            }
              this.setState({
                StoreData: res.data,
                loading : false
                  // error: res.error || null,                   
                  // refreshing: false
              });
          })
          .catch(error => {
  
              console.warn('error:' + (error));
              this.setState({error, loading: false});
          });
  
    }

  render() {
    return (

    <View style={styles.parentcontainer}>
    <Header
                title={'Order History'}
                back={() => {
                this
                  .props
                  .navigation
                  .goBack(null)
              }}/>
    {/* <View style={styles.menuTextContainer}>
            <Text style={styles.txtMain}>
              Order history
            </Text>
          </View> */}
      <View style={styles.container}>
      <FlatList
          // data={[
          //   {PropreitorName: 'Devin',SoldToShopName: 'Devin',ProductName: 'Devin',SKUCode: 'Devin',Qty: 'Devin'},
          //   {PropreitorName: 'Jackson',SoldToShopName: 'Devin',productName: 'Devin',SKUCode: 'Devin',Qty: 'Devin'},
          //   {PropreitorName: 'James',SoldToShopName: 'Devin',ProductName: 'Devin',SKUCode: 'Devin',Qty: 'Devin'},
          //   {PropreitorName: 'Joel',SoldToShopName: 'Devin',ProductName: 'Devin',SKUCode: 'Devin',Qty: 'Devin'}, 
          // ]}
          data={this.state.StoreData}
          renderItem={this.renderItem}
          numColumns={2}
        />
      </View>

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
        flexDirection:'column',
        height: '80%', 
  },
})
 
const mapStateToProps = (state, ownProps) => {
  // console.log('state:' + JSON.stringify(state));
  return {}
}

const mapDispatchToProps = dispatch => (bindActionCreators({
  UserData
}, dispatch));

export default connect(mapStateToProps, mapDispatchToProps)(OrderHistoryShopkeeper  );