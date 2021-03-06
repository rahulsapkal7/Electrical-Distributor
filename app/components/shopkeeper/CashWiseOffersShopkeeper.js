import React, { Component } from 'react';
import { AppRegistry, FlatList, StyleSheet, Text, View,TouchableOpacity,Image } from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Header from '../../common/header';
import {api} from '../../common/api';

import {UserData} from '../../redux/actions/UserData_action';
import {NavigationActions} from 'react-navigation';

 class CashWiseOffersShopkeeper extends Component {

  constructor(props) {
    super(props);

    console.log('inside pending order distributor');

    this.state = {
      // selectedArea : this.props.navigation.state.params.selectedArea,
      loading : false,
      StoreData : []
    }

    console.log("props are --> ",JSON.stringify(props));
   
  }

  componentDidMount() {
    
        this.getPendingOrderList();
    
      }


      getPendingOrderList = () =>{
        const url = api() + 'ViewCashWiseOffer.php';
         console.log(url);
        
        this.setState({loading: true});
    
        fetch(url,{method: 'post'})
            .then(response => response.json())
            .then(res => {
              console.log("response is",JSON.stringify(res));
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
    
                console.log('error:' + (error));
                this.setState({error, loading: false});
            });
    
      }
      

      renderItem=({item})=>{
        return(

            
            <View style={styles.productParent}>
               
               {/* <View style={styles.prodcust_container1}>
               <Image
          source={{ uri: `https://images.pexels.com/photos/671557/pexels-photo-671557.jpeg` }}
          style={{ width: 100, height:100 }}
          resizeMode="cover"
        />

                   </View> */}

        <TouchableOpacity style={styles.prodcust_container2} 
        >
           
            <View style={styles.card_outer}>
                 
                {/* <View style={styles.horizontal_view}>

        <Text style={styles.txtStyle_fourteen}>
        Product ID : 
                </Text>
                <Text style={styles.txtStyle_sixteen}>
                    {' '+item.ProductID}
                </Text>
                </View> */}

{/* <View style={styles.horizontal_view}>

        <Text style={styles.txtStyle_fourteen}>
        SKU Code : 
                </Text>
                <Text style={styles.txtStyle_sixteen}>
                    {' '+item.SKUCode}
                </Text>
                </View> */}
                
                <View style={styles.horizontal_view}>

        <Text style={styles.txtStyle_fourteen}>
                    Offer type : 
                </Text>
                <Text style={styles.txtStyle_sixteen}>
                    {' '+item.OfferType}
                </Text>
                </View>

                {/* <View style={styles.horizontal_view}>

        <Text style={styles.txtStyle_fourteen}>
            Manufacturer : 
                </Text>
                <Text style={styles.txtStyle_sixteen}>
                    {' '+item.MfgName}
                </Text>
                </View> */}
                <View style={styles.horizontal_view}>

        <Text style={styles.txtStyle_fourteen}>
        Offer name : 
                </Text>
                <Text style={styles.txtStyle_sixteen}>
                    {' '+item.OfferName}
                </Text>
                </View>
                <View style={styles.horizontal_view}>

        <Text style={styles.txtStyle_fourteen}>
        Offer code : 
                </Text>
                <Text style={styles.txtStyle_sixteen}>
                    {' '+item.OfferCode}
                </Text>
                </View>


                {/* <View style={styles.horizontal_view}>

        <Text style={styles.txtStyle_fourteen}>
        Landing price : 
                </Text>
                <Text style={styles.txtStyle_sixteen}>
                    {' '+item.LandingPrice}
                </Text>
                </View> */}

                <View style={styles.horizontal_view}>

        <Text style={styles.txtStyle_fourteen}>
        Description : 
                </Text>
                <Text style={styles.txtStyle_sixteen}>
                    {' '+item.OfferDes}
                </Text>
                </View>

                <View style={styles.horizontal_view}>

<Text style={styles.txtStyle_fourteen}>
Date : 
        </Text>
        <Text style={styles.txtStyle_sixteen}>
            {' '+item.FromDate +' to '+item.ToDate}
        </Text>
        </View>
            </View> 
        </TouchableOpacity>
        </View>
            )
    }

  render() {
    return (

    <View style={styles.parentcontainer}>
    <Header
                title={'CASH OFFERS'}
                back={() => {
                this
                  .props
                  .navigation
                  .goBack(null)
              }}/>
    {/* <View style={styles.menuTextContainer}>
            <Text style={styles.txtMain}>
              Pending orders
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
    canvas: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
      },
  parentcontainer: { 
    flexDirection: 'column', 
    height: '100%',  
  },
  productParent:{ 
    flexDirection: 'column', 
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
   height: '100%',  
  },
  prodcust_container1: {  
    flexDirection:'column',
    alignItems: 'center',
    justifyContent: 'center', 
    height: '60%',  
  },
  prodcust_container2: {  
   flexDirection:'column', 
   height: '100%',  
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
        backgroundColor:'#FFB367',
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

export default connect(mapStateToProps, mapDispatchToProps)(CashWiseOffersShopkeeper);