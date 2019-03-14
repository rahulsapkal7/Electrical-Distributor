import React from 'react';
import {
    Image,
    View,
    Text,Dimensions,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    ActivityIndicator
} from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';



const window = Dimensions.get("window");

const Loader = (props) => {

    console.log('HeaderProps:' + JSON.stringify(props));
    if(props.visible == true){

        return (
            <View
                style={{
                position: 'absolute',
                alignItems: 'center',
                opacity: 0.7,
                justifyContent: 'center',
                width: '100%',
                height: '100%',
                backgroundColor: '#000000',
                zIndex: 100,
            }}>

                <ActivityIndicator
                    animating={true}
                    style={{
                    marginTop : 5,
                    zIndex: 10
                }}
                    size="large"/>
                <Text
                    style={{
                    marginTop: 10,
                    color: '#ffffff',
                    marginBottom: 20,
                    fontSize: 20,
                    fontWeight: 'bold'
                }}>{'Please Wait...'}</Text>

            </View>

        );

    }else{
        return(null);
    }
 
}

export default Loader;
