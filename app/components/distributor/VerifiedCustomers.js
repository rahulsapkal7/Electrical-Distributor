import React, { Component } from 'react';
import { AppRegistry, FlatList, StyleSheet, Text, View,TouchableOpacity,Image } from 'react-native';
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
      // selectedArea : this.props.navigation.state.params.selectedArea,
      loading : false,
      StoreData : []
    }
    console.log("props are --> ",JSON.stringify(props));
  }

  componentDidMount() {
        this.getVerifiedCustomers();
      }
      getVerifiedCustomers = () =>{
        // const url = api() + 'ApprovedCustList.php';
        var url = "http://elec.mycit.co.in/PHP/webservices/ApprovedCustList.php";
         console.log(url);
        
        this.setState({loading: true});
    
        fetch(url,{method: 'post'})
            // .then(response => response.json())
            .then(res => {
              console.log("response is",res);
              
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
        <TouchableOpacity style={{ flex:1,flexDirection:'column',marginBottom:3}} 
        >
           
            <View style={styles.card_outer}>

            <View style={styles.shopkeeperInfo}>
                 
                <View style={styles.horizontal_view}>

        <Text style={styles.txtStyle_fourteen}>
                    Shopkeeper name : 
                </Text>
                <Text style={styles.txtStyle_sixteen}>
                    {' '+item.skName}
                </Text>
                </View>

<View style={styles.horizontal_view}>

        <Text style={styles.txtStyle_fourteen}>
                    Shop name : 
                </Text>
                <Text style={styles.txtStyle_sixteen}>
                    {' '+item.shopName}
                </Text>
                </View> 
                </View>

                 <View style={styles.icon}>
 <Image style={{ width: 20, height: 20 }}
                    source={require('../../assets/images/right_arrow.png')}></Image>
                 </View>
                 
            </View> 
        </TouchableOpacity>
            )
    }

  render() {
    return (

    <View style={styles.parentcontainer}>
   
          <Header
                title={'Verified Customers'}
                back={() => {
                this
                  .props
                  .navigation
                  .goBack(null)
              }}/>
      <View style={styles.container}>
      {/* <Loader visible={this.state.loading}/> */}
        <FlatList
          data={[
            {skName: 'Devin',shopName: 'Devin'},
            {skName: 'Jackson',shopName: 'Devin'},
            {skName: 'James',shopName: 'Devin'},
            {skName: 'Joel',shopName: 'Devin'}, 
          ]}
          renderItem={this.renderItem}
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
})
 
const mapStateToProps = (state, ownProps) => {
  // console.log('state:' + JSON.stringify(state));
  return {}
}

const mapDispatchToProps = dispatch => (bindActionCreators({
  UserData
}, dispatch));

export default connect(mapStateToProps, mapDispatchToProps)(VerifiedCustomers  );