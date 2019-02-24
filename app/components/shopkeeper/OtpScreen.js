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
import Header from '../../common/header';

import {UserData} from '../../redux/actions/UserData_action';
import {NavigationActions} from 'react-navigation';

 class OtpScreen extends Component {

    static navigationOptions = {
        header: null,
    }

    constructor(props){
        super(props)
        this.goToHome = this
        .goToHome
        .bind(this);
        this.state={
            email:'',
            password:''
        }
        
    } 
    goToHome() {
        console.log("on click goToHome");
        // this
        // .props
        // .navigation
        // .goBack(null);
        this.props.navigation.navigate('ShopkeeperHomePage');
      }
    render() {
        return (
            <View style={styles.container}>
             <Header
                title={'OTP screen'}
                back={() => {
                this
                  .props
                  .navigation
                  .goBack(null)
              }}/>
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

                  

                <TextInput style={styles.editbox} placeholder="Enter OTP" 
                placeholderTextColor="white"
                onChangeText={(text)=>console.log("tet is",text)}
                ></TextInput>
               
                <TouchableOpacity style={styles.btnBackground} onPress= {()=> this.goToHome()} >

                    <Text style={styles.textbtn}>Validate OTP</Text>
                </TouchableOpacity>

                
                </View>
            </View>
        );
    }
} 

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#455a64'
    },
    firstContainer:{
        flex:0.4,
        justifyContent: 'center'
    },
    secondContainer:{
        flex:0.6
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
        borderColor: 'white',
        borderWidth:1,
        paddingHorizontal: 10,
        color: 'white',
        marginVertical: 10,
        marginBottom:30
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
    }
});

const mapStateToProps = (state, ownProps) => {
    // console.log('state:' + JSON.stringify(state));
    return {}
}

const mapDispatchToProps = dispatch => (bindActionCreators({
    UserData
}, dispatch));

export default connect(mapStateToProps, mapDispatchToProps)(OtpScreen);