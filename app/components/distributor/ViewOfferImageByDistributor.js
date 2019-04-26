import React, { Component } from 'react';
import { AppRegistry, FlatList, StyleSheet,ScrollView, Alert, Text, View,TouchableOpacity,Image ,Modal} from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Header from '../../common/header';
import {api} from '../../common/api';
import commonStyles from '../../common/commonStyle';

import {UserData} from '../../redux/actions/UserData_action';
import {NavigationActions} from 'react-navigation';
import Loader from '../../common/Loader.js';
// import ImageView from 'react-native-image-view';
// import Lightbox from 'react-native-lightbox';
import ImageViewer from 'react-native-image-zoom-viewer';
import {   Icon, Badge } from 'native-base';


 class ViewOfferImageByDistributor extends Component {

  constructor(props) {
    super(props);

    console.log('inside pending order distributor');

    this.state = {
      // selectedArea : this.props.navigation.state.params.selectedArea,
      loading : false,
      isImageViewVisible : false,
      showImage : '',
      ImageIndicatorIndex : '',
      StoreData : [],
      screenView : this.props.navigation.state.params.screenView,
      Title : this.props.navigation.state.params.screenView == "OfferImage" ? "Offer Image" : "Scroll Image"
      
    }

    console.log("props are --> ",JSON.stringify(props));
   
  }

  componentDidMount() {
    
        this.getPendingOrderList();
    
      }


      getPendingOrderList = () =>{
        var url = null;
        if (this.state.screenView == "OfferImage") {
          url = api() + 'ViewOfferImageByCustomer.php';
         
          
        } else {
          url = api() + 'ImageSlideShow.php';
         
         
        }
        // const url = api() + 'ViewOfferImageByCustomer.php';
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
                Alert.alert(this.state.Title, "Something went wrong");
              }
               
            })
            .catch(error => {
    
                console.log('error:' + (error));
                this.setState({ loading: false});
            });
    
      }
      
      deleteImage () { 

      Alert.alert(
        this.state.Title,
        'Are you sure you want to Delete',
        [
          
          {
            text: 'No',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          {text: 'Yes', onPress: () => {console.log('OK Pressed') ;
        
      //     const url = api() + 'UploadLRByAdmin.php';
      //     console.log(url);
         
      //    this.setState({loading: true});
     
      //    var data = new FormData();
      //    data.append('UserID',this.state.CartUserID ),
      //    data.append('LRImage',this.state.filePath.data ),
      //    data.append('Status','Dispatch' ),
      //    data.append('CartNo',this.state.CartNo ),
         
      //    console.log("before hit data is ",data);
      //    // data.append('UserID', "2"),
      //    fetch(url,{method: 'post',
      //    body: data
      //  })
      //        .then(response => response.json())
      //        .then(res => {
      //          console.log("response is UploadLRByAdmin",JSON.stringify(res));
      //    this.setState({loading: false});
         
      //          if(res.status){
      //           Alert.alert('View Cart', res.message,[{text: 'OK', 
      //           onPress: () => {
      //               console.log('OK Pressed');
      //               this.props.navigation.navigate('DistributorHomePage2')}}]
      //           , {cancelable: false},);
      //          }else{
      //            Alert.alert('View Cart', "Something went wrong");
      //          }
               
                
      //        })
      //        .catch(error => {
     
      //            console.log('error:' + (error));
      //            this.setState({ loading: false});
      //        });
        
        
        }},
        ],
        {cancelable: false},
      );
    }

      renderItem=({item})=>{
       
        return(
          <View style={styles.card_outer}>
         
<TouchableOpacity  style={styles.productParent} onPress={() => this.setState({ isImageViewVisible: true , showImage : item.url})}>
       <Image
                source={{ uri: item.url}}
                style={{ width: 150, height:200 }}
                resizeMode="cover"
              /> 
</TouchableOpacity>
  <TouchableOpacity  style={styles.productParent}  onPress= { () => {console.log("delete press"); this.deleteImage() } } >
        <Icon name='trash' style={{ color: "red" }} />
         </TouchableOpacity>
           </View>      
    
            )
    }

  render() {
    return (

    <View style={styles.parentcontainer}>
    <Header
               
                title=  {this.state.screenView == "OfferImage" ? 'OFFER IMAGES' :  'SCROLLER IMAGES'  }

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
         <TouchableOpacity style={styles.btnBackground1}
     onPress = {()=> this.props.navigation.navigate('UploadOfferImagesDistributor',{screenView : this.state.screenView})}>
          <Text style={commonStyles.textbtn}>Add New Image</Text>
      </TouchableOpacity>   
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
  btnBackground1: {
    backgroundColor:'skyblue',
    borderRadius: 25,
    paddingVertical: 10,
    marginVertical: 10,
    marginHorizontal:10,
    flex:1
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
    // padding : 15,
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
    borderColor: '#3acccb',
         padding: 5,
        flex: 1,        
        flexDirection:'column',
       
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

export default connect(mapStateToProps, mapDispatchToProps)(ViewOfferImageByDistributor);