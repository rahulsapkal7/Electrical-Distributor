import React, { Component } from 'react';
import {Platform, View,Text, StyleSheet,Image, TouchableOpacity,ToolbarAndroid} from 'react-native';
import {  Button, Icon, Badge } from 'native-base';
// import Icon from 'react-native-vector-icons/FontAwesome';
import OptionsMenu from "react-native-options-menu";
import IconBadge from 'react-native-icon-badge';
// import {  Icon } from 'native-base';

// const MoreIcon =;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: (Platform.OS === 'ios')
      ? 70
      : 50,
    width: '100%',
    backgroundColor: '#7dca20',
    alignItems: 'center',
    // borderColor : "yellow",     borderWidth : 1,
  },
  Titlecontainer: {
    width: '60%',
   // marginLeft: '15%',
    alignItems: 'center'
  },
  Menucontainer:{
    width: '10%',
    alignItems: 'center',
    marginTop: 5,
    
    // backgroundColor:'blue' 
  },
  Backcontainer: {
    width: '15%',
    alignItems: 'center'
    
  },
  SearchContainer :{
    width: '10%',
    alignItems: 'center'
    
  },
  text: {
    alignItems: 'center',
    fontSize: 18,
    marginTop: 5,
    fontWeight: 'bold',
    color: 'white'
    // color: '#0094d8'
  },
  TxtIP: {
    fontSize: 20,
    marginTop: 5,
    //top : 3,
    alignItems: 'center',
    // fontWeight: 'bold', top:10,
    color: '#818285'
  },
  image_style:{
    width:30,
    height:30
  }
});

class Home_header extends Component {

  constructor(props) {
    super(props);
    this.state = {
     

  };
  console.log("props are ",props);
  }
  
  render() {
  return (

    // <Container>
    // <Header>
    //   <Left>
    //     <Button  style={styles.Backcontainer} onPress={this.props.menu}>
    //     <Icon name='menu'  style={{ color: "black" }} />
    //     </Button>
    //   </Left>
    //   <Body>
    //     <Title> {this.props.title}</Title>
    //   </Body>
    //   <Right>
    //     <Button transparent>
    //       <Badge style={{ position: 'absolute' }}><Text>2</Text></Badge>
    //       <Icon name='cart'  style={{ color: "black" }} />
    //     </Button>
    //   </Right>
    // </Header>
    // <Content />
    // </Container>
    <View style={styles.container}>
      <TouchableOpacity style={styles.Backcontainer} onPress={this.props.menu}>
      <Icon name='menu'  style={{ color: "black" }} />
      
      </TouchableOpacity>
      <View style={styles.Titlecontainer}>
        <Text style={styles.text}>
          {this.props.title}
        </Text>
        
      </View>    
      <TouchableOpacity style={styles.Menucontainer} onPress={this.props.GoToCart}>
      {this.props.cartCount != 0  ?  
      <IconBadge
                            MainElement={< Icon name = "cart" size = {
                            30
                        }
                        style = {{ height: 40, width : 40, marginTop : 5 }}color = "white" />}
                            BadgeElement={< Text style = {{color:'#FFFFFF',fontSize : 10}} > {
                              this.props.cartCount 
                        } </Text>}
                            IconBadgeStyle={{
                            width: 20,
                            height: 20,
                            backgroundColor: '#FF230C'
                        }}/>
                    :      <Icon name='cart'  style={{ color: "black" }} /> 
     
    }
     
    </TouchableOpacity>
    {this.props.showSearch == true  ?  
      <TouchableOpacity style={styles.SearchContainer} onPress={this.props.gotoSearchScreens}>
                  <Icon name='search'  style={{ color: "black" }} />
                   </TouchableOpacity>
      :
      <View style={styles.SearchContainer} >
                 
                   </View>
    }
    
    </View>
 

    
  );
}
}


export default (Home_header);