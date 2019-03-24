
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
import {bindActionCreators} from 'redux';
import commonStyles from '../../common/commonStyle';
import {connect} from 'react-redux';

class ProtonOffersTypes extends Component {


    render() {
   
        return (
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
          
        );
      }

}

const styles = StyleSheet.create({

    mainView : {
        flex:1,
        alignItems :'center',
        justifyContent: 'center'
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