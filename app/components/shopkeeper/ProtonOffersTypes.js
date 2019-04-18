
import React, {Component} from 'react';
import {
    StyleSheet,
    ScrollView,
    Text,
    Alert,
    TextInput,
    AsyncStorage,
    View,
    Image,
    ActivityIndicator,
    TouchableOpacity,Picker
} from 'react-native';
import {UserData} from '../../redux/actions/UserData_action';
import Header from '../../common/header';
import {bindActionCreators} from 'redux';
import commonStyles from '../../common/commonStyle';
import {connect} from 'react-redux';

class ProtonOffersTypes extends Component {


    render() {
   
        return (
            <View style={styles.container}>
             <Header
                    title={'PROTON OFFERS'}
                    back={() => {
                    this
                      .props
                      .navigation
                      .goBack(null)
                  }}
                    />
          <View style={commonStyles.VWcontainer}>
<TouchableOpacity style={styles.mainView} onPress= {()=> this.props.navigation.navigate('CashWiseOffersShopkeeper')}>
<View >

<Text >Cash offers</Text>
            
            </View>

            </TouchableOpacity>

            <TouchableOpacity style={styles.mainView}
            onPress= {()=> this.props.navigation.navigate('DealWiseOffersShopkeeper')}>
            <View >
            <Text >Deal offers</Text>
            </View>
            </TouchableOpacity>
            
                      </View>
                      </View>
          
        );
      }

}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: '#4db6ac'
    },
    mainView : {
        flex:1,
        alignItems :'center', 
        justifyContent:'center',
        alignItems:'center',
        borderColor:'#ddd',
        borderWidth:1,  
        margin:10,
        borderRadius:2,
        shadowColor:'#000',
        shadowOpacity:0.5,
        shadowRadius:5,
        elevation:5,
        borderColor:'#ddd',
        flexDirection:'column'
      }



});
const mapStateToProps = (state, ownProps) => {
    // console.log('state:' + JSON.stringify(state));
    return {}
}

const mapDispatchToProps = dispatch => (bindActionCreators({
    UserData
}, dispatch));

export default connect(mapStateToProps, mapDispatchToProps)(ProtonOffersTypes);