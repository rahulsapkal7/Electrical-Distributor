import React from 'react';
import { View, Text,AsyncStorage,Image } from 'react-native';

var UserId = ''; 

class SplashScreen extends React.Component {
  performTimeConsumingTask = async() => {
    return new Promise((resolve) =>
      setTimeout(
        () => {
            AsyncStorage
            .getItem("@shopkeeperId:key")
            .then((value) => {
              console.warn("value --> ",value);
              UserId = value;
              // Globals.cusId = value;
              console.warn('Globals.cusId://' + value);
              setTimeout(() => {
                this.setState({isLoading: false});
              }, 5);
            })

            if (UserId === null) {
              console.warn("inside login wala flow");
                this.props.navigation.navigate('Login');
            }else{
              console.warn("inside home wala flow");
                this.props.navigation.navigate('ShopkeeperHomePage2');
            }
         },
        2000
      )
    )
  }

  async componentDidMount() {
     
     this.performTimeConsumingTask();
 
  }

  render() {
    return (
      <View style={styles.viewStyles}>
        

<Image source={require('../../assets/images/logo.png')} style={styles.backgroundLogoImage}>
  
  </Image>
      </View>
    );
  }
}

const styles = {
  viewStyles: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  textStyles: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold'
  },
  backgroundLogoImage: { 
      width:100,
      height:100,
      margin:10,  // or 'stretch'
  },
}

export default SplashScreen;