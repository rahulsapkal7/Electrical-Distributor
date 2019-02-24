import React, { Component } from "react";
import {View,TouchableOpacity} from "react-native";

// const Card = (props) =>{
    class Card extends Component {
        
          constructor(props) {
            super(props);
            this.state = {
             
        
          };
          }
          render() {
    return (
        <TouchableOpacity style={styles.containerStyle} >
        {props.children}
        </TouchableOpacity>
    );
          }
};

const styles = {

    containerStyle: {
        borderWidth:1,
        borderRadius:2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor:'#000', 
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 5,
        marginLeft: 5,
        backgroundColor:'skyblue',
        flex: 1,        
        marginRight: 5, 
        marginTop: 10,
        flexDirection:'column',
        height: '80%',
    justifyContent: 'center', 
    alignItems: 'center',
    }
}

export default Card;