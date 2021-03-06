import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

import AwesomeAlert from 'react-native-awesome-alerts';

import smiley from '../../../assets/1-smiley.png';
import neutral from '../../../assets/2-neutral-face.png';
import slightly from '../../../assets/3-slightly-frowning-face.png';

export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = { showAlert: false };
    };

    showAlert = () => {
        this.setState({
            showAlert: true
        });
    };

    hideAlert = () => {
        this.setState({
            showAlert: false
        });
    };

    render() {
        const {showAlert} = this.state;

        return (
            <View style={styles.container}>

                <Text>Como você esta se sentindo?</Text>
                <TouchableOpacity onPress={() => {
                    this.showAlert();
                }}>
                    <View style={styles.button}>
                        <Text style={styles.text}>Responder</Text>
                    </View>
                </TouchableOpacity>

                <AwesomeAlert
                    style={styles.fundo}
                    show={showAlert}
                    showProgress={false}
                    // title="AwesomeAlert"
                    // message="I have a message for you!"
                    closeOnTouchOutside={true}
                    closeOnHardwareBackPress={false}
                    showCancelButton={true}
                    showConfirmButton={true}
                    cancelText="No, cancel"
                    confirmText=
                    <View>
                        <img className="smile first" src={smiley} alt=""/>
                        <img className="smile" src={neutral} alt=""/>
                        <img className="smile" src={slightly} alt=""/>
                    </View>
                    confirmButtonColor="#DD6B55"
                    onCancelPressed={() => {
                        this.hideAlert();
                    }}
                    onConfirmPressed={() => {
                        this.hideAlert();
                    }}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    button: {
        margin: 10,
        paddingHorizontal: 10,
        paddingVertical: 7,
        borderRadius: 5,
        backgroundColor: "#AEDEF4",
    },
    text: {
        color: '#fff',
        fontSize: 15
    },
    fundo: {
        marginLeft: "389px",
        marginRight: "0px",
        marginTop: "253px"
    }
})