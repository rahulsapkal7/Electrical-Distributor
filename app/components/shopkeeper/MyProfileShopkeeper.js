import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Button,
    Image,
    TextInput,
    TouchableOpacity
} from "react-native";

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {UserData} from '../../redux/actions/UserData_action';
import {NavigationActions} from 'react-navigation';
import Header from '../../common/header';

class MyProfileShopkeeper extends Component {

    static navigationOptions = {
        header: null,
    }

    constructor(){
        super()
        this.state={
            email:'',
            password:''
        }
    } 

    render() {
        return (

            <View style={styles.parent_container}>
            {/* <View style={styles.menuTextContainer}>
            <Text style={styles.txtMain}>
              My profile
            </Text>
          </View> */}
          <Header
                title={'My profile'}
                back={() => {
                this
                  .props
                  .navigation
                  .goBack(null)
              }}/>
            <View style={styles.container}>
                {/* <Button title="Go To Home Screen"
                    onPress={() => this.props.navigation.navigate('Home',
                    {
                        itemId:86,
                        otherParam:'Navigation working...',
                    }
                    )} /> */}
                {/* <Logo/> */}
                <View style={styles.firstContainer}>
                <Image style={{ width: 70, height: 70 }}
                    source={require('../../assets/images/default-profile.png')}></Image>

                    </View>

                {/* <Text style={styles.logotext}>Welcome</Text> */}
                <View style={styles.secondContainer}> 

                  

                <TextInput style={styles.editbox} placeholder="Name" 
                placeholderTextColor="black" 
                ></TextInput>
                <TextInput style={styles.editbox} placeholder="Shopname"
                    placeholderTextColor="black" ></TextInput>
                <TextInput style={styles.editbox} placeholder="Mobile no"
                    placeholderTextColor="black" ></TextInput>
                <TextInput style={styles.editbox} placeholder="Address"
                    placeholderTextColor="black" ></TextInput>

                <TouchableOpacity style={styles.btnBackground}>

                    <Text style={styles.textbtn}>Save</Text>
                </TouchableOpacity>
 
                </View>
            </View>
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
    // console.log('state:' + JSON.stringify(state));
    return {}
  }
  
  const mapDispatchToProps = dispatch => (bindActionCreators({
    UserData
  }, dispatch));
  
  export default connect(mapStateToProps, mapDispatchToProps)(MyProfileShopkeeper);