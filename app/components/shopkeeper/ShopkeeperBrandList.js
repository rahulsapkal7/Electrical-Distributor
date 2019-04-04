import React, { Component } from "react";
import { Container, Content, Icon, Accordion } from "native-base";
import { AppRegistry, FlatList, StyleSheet, Text,Alert, ScrollView,View,TouchableOpacity } from 'react-native';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Header from '../../common/header';
import Loader from '../../common/Loader.js';

import {UserData} from '../../redux/actions/UserData_action';
import {NavigationActions } from 'react-navigation';


const dataArray = [
  { title: "OPPLE", content1: "Light Source",content2: "Consumer",content3: "Professional"},
  { title: "POLYCAB ", content1: "Smart Bulbs",content2: "Smart Downlights",content3: "Smart SpotLights" },
  { title: "NIRVANA", content1: "Smart Bulbs" }
];
var ThisView = null;
 class ShopkeeperBrandList extends Component {
  
  constructor(props) {
    super(props);
    ThisView = this;
    this.state = {
      loading : false,
     
    }
    // this.toggleMenu = this
    // .toggleMenu
    // .bind(this);
    console.log("props are --> ",JSON.stringify(props));

  }



  _renderHeader(item, expanded) {
    return (
      <View style={{
        flexDirection: "row",
        padding: 15,
        
        justifyContent: "space-between",
        alignItems: "center" ,
        backgroundColor: "#A9DAD6" }}>
      <Text style={{ fontWeight: "600",fontSize: 20, }}>
          {" "}{item.title}
        </Text>
        {expanded
          ? <Icon style={{ fontSize: 18 }} name="remove" />
          : <Icon style={{ fontSize: 18 }} name="add" />}
      </View>
    );
  }
  _renderContent(item) {
   
    return (
      
      <View style={{  flexDirection: 'column'
     }}>
      <TouchableOpacity  onPress= {()=> ThisView.props.navigation.navigate('ViewOfferImageByCustomer')} >
          <Text style={{
          backgroundColor: "#e3f1f1",
          padding: 15,
          fontSize: 18,
          fontStyle: "italic",
        }} > {item.content1}</Text>
      </TouchableOpacity>
      <TouchableOpacity   >
          <Text style={{
          backgroundColor: "#e3f1f1",
          padding: 15,
          fontSize: 18,
          fontStyle: "italic",
        }}> {item.content2}</Text>
      </TouchableOpacity>
      <TouchableOpacity   >
          <Text style={{
          backgroundColor: "#e3f1f1",
          padding: 15,
          fontSize: 18,
          fontStyle: "italic",
        }}> {item.content3}</Text>
      </TouchableOpacity>
      </View>
    );
  }
  render() {
    
    return (
      <Container>
      <View style={{  flexDirection: 'column', 
    height: '100%',}}>
    <Header
                title={'PROTON'}
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
      <View style={{ flex: 1,
   paddingTop: 22,
   height: '90%', }}>
        
        <Content padder style={{ backgroundColor: "white" }}>
          <Accordion
            dataArray={dataArray}
            animation={true}
            expanded={true}
            renderHeader={this._renderHeader}
            renderContent={this._renderContent}
          />
        </Content>
        </View>
        </ScrollView>
        </View>
      </Container>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  
  console.log('state:' + JSON.stringify(state));
  return {UserId: state.UserData_red.UserId}
}

const mapDispatchToProps = dispatch => (bindActionCreators({
  UserData
}, dispatch));

export default connect(mapStateToProps, mapDispatchToProps)(ShopkeeperBrandList  );