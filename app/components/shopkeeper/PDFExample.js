
import { StyleSheet, Dimensions, BackHandler,View } from 'react-native';
import React, { Component } from 'react';
import {NavigationActions} from 'react-navigation';
import Header from '../../common/header';

import Pdf from 'react-native-pdf';
 
export default class PDFExample extends Component {
    
  constructor(props) {
    super(props);

    console.log('inside order history');
    // this.params = this.props.navigation.state.params;
    

    this.state = {
        pdfURL : this.props.navigation.state.params.pdfURL,  
    } 
   
  }
  


    render() {
        // const source = {uri:'http://samples.leanpub.com/thereactnativebook-sample.pdf',cache:true};
        const source = {uri:this.state.pdfURL,cache:true};
        
        //const source = require('./test.pdf');  // ios only
        //const source = {uri:'bundle-assets://test.pdf'};
 
        //const source = {uri:'file:///sdcard/test.pdf'};
        //const source = {uri:"data:application/pdf;base64,..."};
 
        return (
            <View style={styles.parentcontainer}>
             <Header
                title={'Purchase Order'}
                back={() => {
                this
                  .props
                  .navigation
                  .goBack(null)
              }}/>
               <View style={styles.container}>
                <Pdf
                    source={source}
                    onLoadComplete={(numberOfPages,filePath)=>{
                        console.log(`number of pages: ${numberOfPages}`);
                    }}
                    onPageChanged={(page,numberOfPages)=>{
                        console.log(`current page: ${page}`);
                    }}
                    onError={(error)=>{
                        console.log(error);
                    }}
                    style={styles.pdf}/>
            </View>
            </View>
        )
  }
}
 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 25,
    },
    parentcontainer: { 
        flexDirection: 'column', 
        height: '100%',  
      },
    pdf: {
        flex:1,
        width:Dimensions.get('window').width,
    }
});