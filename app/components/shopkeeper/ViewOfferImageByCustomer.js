import React, { Component } from 'react';
import { AppRegistry, FlatList, StyleSheet,ScrollView, Alert, Text, View,TouchableOpacity,Image ,Modal} from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Header from '../../common/header';
import {api} from '../../common/api';

import {UserData} from '../../redux/actions/UserData_action';
import {NavigationActions} from 'react-navigation';
import Loader from '../../common/Loader.js';
// import ImageView from 'react-native-image-view';
// import Lightbox from 'react-native-lightbox';
import ImageViewer from 'react-native-image-zoom-viewer';


 class ViewOfferImageByCustomer extends Component {

  constructor(props) {
    super(props);

    console.log('inside pending order distributor');

    this.state = {
      // selectedArea : this.props.navigation.state.params.selectedArea,
      loading : false,
      isImageViewVisible : false,
      showImage : '',
      ImageIndicatorIndex : '',
      StoreData : []
    }

    console.log("props are --> ",JSON.stringify(props));
   
  }

  componentDidMount() {
    
        this.getPendingOrderList();
    
      }


      getPendingOrderList = () =>{
        const url = api() + 'ViewOfferImageByCustomer.php';
         console.log(url);
        this.setState({loading: true});
        fetch(url,{method: 'post'})
            .then(response => response.json())
            .then(res => {
              console.log("response is",JSON.stringify(res));
              this.setState({
                loading : false
              })
              if(res.status){
                // var imageData = [ {url: "https://cdn.pixabay.com/photo/2017/08/17/10/47/paris-2650808_960_720.jpg"}];
                var imageData = [ ];
                res.data.forEach(function (data,key) {
                  console.log('inside each data is',data,key);
                  imageData.push({
                    url : data.DisplayImage,
                    index : key
                  })
              }); 
              console.log('imageData data is',imageData);
                this.setState({
                  StoreData: imageData,
                    
                });
              }else{
                Alert.alert('Offers', "Something went wrong");
              }
               
            })
            .catch(error => {
    
                console.log('error:' + (error));
                this.setState({ loading: false});
            });
    
      }
      
     
  

      renderItem=({item})=>{
       
        return(
          // <Modal visible={true} transparent={true}>
          // <ImageViewer imageUrls={images}/>
         
      // </Modal>
<TouchableOpacity  style={styles.productParent} onPress={() => this.setState({ isImageViewVisible: true , showImage : item.url})}>
       <Image
                source={{ uri: item.url}}
                style={{ width: 150, height:200 }}
                resizeMode="cover"
              /> 
             
</TouchableOpacity>
                
    
            )
    }

  render() {
    return (

    <View style={styles.parentcontainer}>
    <Header
                title={'OFFERS'}
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
          numColumns={2}
        />
         <Modal visible={this.state.isImageViewVisible} transparent={true} onRequestClose={() => this.setState({ isImageViewVisible: false })} >
          <ImageViewer  imageUrls={[{url : this.state.showImage}]}/>
         
      </Modal>
        
      </View>
              </ScrollView>
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
    flex:1,
    flexDirection: 'column', 
    // backgroundColor: '#4db6ac',
    alignItems: 'center',
    justifyContent: 'center', 
    // borderRadius:2,
    // borderColor: 'red',
    margin : 10,
    padding : 15,
    // borderWidth:1,
    // borderRadius:2,
    // borderColor: '#ddd',
    
  },
    btnBackground: {
        backgroundColor: 'skyblue',
        borderRadius: 25,
        paddingVertical: 10, 
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10, 
        marginTop:10,
        width: '50%',
    },
  container: {
   flex: 1,
   paddingTop: 22,
   
   
  },
  prodcust_container1: {  
    flexDirection:'column',
    alignItems: 'center',
    justifyContent: 'center', 
    // height: '60%',  
  },
  prodcust_container2: {  
   flexDirection:'column',
   alignItems: 'center',
   justifyContent: 'center', 
   height: '40%',  
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
    alignItems: 'center',
    justifyContent: 'center',
  },
  horizontal_view1: { 
    flexDirection: 'row', 
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop:20,
  },
  
  txtStyle_fourteen: {  
    fontSize: 14,
    color:'white'
  },
  txtStyle_sixteen: {  
    fontSize: 16,
    color:'white',
    fontWeight:'500',
    
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
        // height: '80%', 
  },
  col: {
    flex: 1,
  },
})
 
const mapStateToProps = (state, ownProps) => {
  // console.log('state:' + JSON.stringify(state));
  return {}
}

const mapDispatchToProps = dispatch => (bindActionCreators({
  UserData
}, dispatch));

export default connect(mapStateToProps, mapDispatchToProps)(ViewOfferImageByCustomer);