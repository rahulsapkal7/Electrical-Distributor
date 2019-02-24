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

class LoginScreen extends Component {

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

    validate(text,type){
        alph='/^[a-zA-Z]+$/'
        if(type=='username'){
                // if(alph.test(text)){
                //     console.warn('text is correct')
                // }else{
                //     console.warn('invalid text')
                // }
                console.warn('text is '+text)
        }
    }

    render() {
        return (
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

                  

                 

                <TouchableOpacity style={styles.btnBackground}>

                    <Text style={styles.textbtn}>Shopkeeper</Text>
                </TouchableOpacity>
 

                <TouchableOpacity style={styles.btnBackground}>

                    <Text style={styles.textbtn}>Distributor</Text>
                </TouchableOpacity>
                </View>
            </View>
        );
    }
}
export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ddd'
    },
    firstContainer:{
        flex:0.4,
        justifyContent: 'center'
    },
    secondContainer:{
        flex:0.6
    }, 
    textbtn: {
        fontSize: 16,
        fontWeight: '500',
        color: 'white',
        textAlign: 'center'
    },
    btnBackground: {
        backgroundColor: 'skyblue',
        borderRadius: 25,
        paddingVertical: 10,
        marginVertical: 20,
        width: 300,
    }
});