import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Button, Linking, SectionList } from 'react-native';
import AwesomeAlert from 'react-native-awesome-alerts';

import smiley from '../../../assets/1-smiley.png';
import neutral from '../../../assets/2-neutral-face.png';
import slightly from '../../../assets/3-slightly-frowning-face.png';

// import React from 'react';
// import { StyleSheet, Text, View, Button, Linking, SectionList } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
//import SyncStorage from 'sync-storage';
//import Alert from '../Alert';

// export default function Home_2() {
//     function getQuiz_2() {
//
//
//         const styless = StyleSheet.create({
//             container: {
//                 flex: 1,
//                 paddingTop: 22
//             },
//             sectionHeader: {
//                 paddingTop: 2,
//                 paddingLeft: 10,
//                 paddingRight: 10,
//                 paddingBottom: 2,
//                 fontSize: 14,
//                 fontWeight: 'bold',
//                 backgroundColor: 'rgba(247,247,247,1.0)',
//             },
//             item: {
//                 padding: 10,
//                 fontSize: 18,
//                 height: 44,
//             },
//         })
//
//
//         return (
//             <View>
//                 <SectionList
//                     sections={[
//                         {title: 'Com que frequência devemos lavar as mãos?',
//                             data: [
//                                 '1. Sempre que tocamos em algo',
//                                 '2. Uma vez por dia',
//                                 '3. Uma vez por mês',
//                                 '4. Nunca devemos lavar as mãos'
//                             ]},
//                     ]}
//                     renderItem={({items}) => <Text style={styless.item}>{items}</Text>}
//                     renderSectionHeader={({section}) => <Text style={styless.sectionHeader}>{section.title}</Text>}
//                     keyExtractor={(items, index) => index}
//                 />
//             </View>
//         );
//
//
//
//     }
//     function getQuiz() {
//         return (
//             {Alert}
//         );
//         // Popular o quiz com um json
//         return (
//             <View>
//                 {/*<Text>*/}
//                     {/*Com que frequência devemos lavar as mãos?*/}
//                 {/*</Text>*/}
//
//                 {/*<Button className="btnQuiz" value="">1. Sempre que tocamos em algo</Button>*/}
//
//                 {/*<Button className="btnQuiz" value="">2. Uma vez por dia</Button>*/}
//
//                 {/*<Button className="btnQuiz" value="">3. Uma vez por mês</Button>*/}
//
//                 {/*<Button className="btnQuiz" value="">4. Nunca devemos lavar as mãos</Button>*/}
//             </View>
//         );
//     }
//
//     function alerta() {
//
//     }
//
//     var quiz = getQuiz();
//
//     var name = '';
//
//     //name = SyncStorage.get('teste');
//     if(name == '') {
//         name = 'Tiago';
//         //SyncStorage.set('teste', 'Tiago');
//     }
//
//
//     return (
//
//         <View onload={alerta}>
//             <Text className="name">Olá {name}</Text>
//             <Text className="config"
//                   onPress={() => Linking.openURL('./config')}
//             >Configuração</Text>
//             <Text className="alerta"
//                   onPress={() => Linking.openURL('./alerta')}
//             >Alertas</Text>
//             <View className="fieldSet"
//                 // onPress={() => Linking.openURL('./alerta')}
//             >{quiz}</View>
//         </View>
//     );
//
// }

// export default class Home_teste extends React.Component{
//
//     render() {
//
//         const styles = StyleSheet.create({
//             container: {
//                 flex: 1,
//                 margin: 20,
//                 // flexDirection: 'row',
//                 flexDirection: 'column',
//                 justifyContent: 'center',
//                 alignContent: 'center',
//                 alignItems: 'center',
//             },
//             text: {
//                 color: "#ffffff",
//             },
//             quetion: {
//                 "width": "100%",
//                 "top": "5%",
//                 "fontSize": "18px",
//                 "textAlign": "justify"
//             },
//             btnQuiz: {
//                 color: "white",
//                 // width: 42%;
//                 height: "77px !important",
//                 marginTop: "-1px !important",
//                 backgroundColor: "white !importante",
//                 top: "10px",
//                 height: "41px",
//                 color: "white !important",
//                 fontSize: "18px"
//             },
//             name: {
//                 flex: 1,
//                 // alignItems: 'stretch',
//                 // alignItems: "center",
//                 // textAlign: "center", //enum('auto', 'left', 'right', 'center', 'justify'),
//                 // position: "absolute !important",
//                 width: "257px",
//                 height: "10px",
//
//                 backgroundColor: "#7B1B60",
//                 // boxshadow: "inset 0px 4px 4px rgba(0, 0, 0, 0.25)",
//                 shadowColor: "rgba(0, 0, 0, 0.25)",
//                 shadowOffset: {
//                     width: 0,
//                     height: 4,
//                 },
//                 shadowOpacity: 0.32,
//                 shadowRadius: 5.46,
//                 elevation: 9,
//
//                 borderradius: "6",
//
//                 fontfamily: "Times New Roman",
//                 // fontstyle: "normal",
//                 // fontweight: "normal",
//                 fontSize: "18px",
//                 lineHeight: "21px",
//                 // display: "flex",
//
//                 innerText: "#FFF9F9",
//
//                 border: "1px solid #FBF2F2",
//                 borderBottomColor: "#FBF2F2",
//                 borderBottomWidth: StyleSheet.hairlineWidth,
//             },
//             config: {
//                 flex: 1,
//                 flexDirection: 'row',
//                 flexDirection: 'column',
//                 justifyContent: 'center',
//                 alignItems: 'stretch',
//
//                 /*position: absolute !important;*/
//                 width: "257px !important",
//                 height: "62px !important",
//                 margin: "47% 0% 0 42px",
//
//                 background: "#7B1B60",
//                 boxShadow: "inset 0px 4px 4px rgba(0, 0, 0, 0.25)",
//                 borderRadius: "6px",
//
//                 fontFamily: "Roboto",
//                 fontStyle: "normal",
//                 fontWeight: "normal",
//                 fontSize: "18px",
//                 /*line-height: 16px,*/
//                 display: "flex",
//                 alignItems: "center",
//                 /*text-align: "center",*/
//
//                 color: "#F8F0F0",
//                 /*padding-left: 25%*/
//
//             }
//         });
//
//         // var name = 'Olá Tiago';
//         // return (
//         //
//         //     {/*<View style={styles.container}>*/}
//         //     <View >
//         //         {/*<View style={styles.name}>*/}
//         //         <View className="name">
//         //             <Text styles={styles.name}>
//         //                 <Text styles={styles.text}>{name}</Text>
//         //             </Text>
//         //
//         //             <Text className="alerta"
//         //                   onPress={() => Linking.openURL('./alerta')}
//         //             >Alertas</Text>
//         //
//         //         </View>
//         //
//         //         <View >
//         //             <Text className="config"
//         //                   onPress={() => Linking.openURL('./config')}
//         //             >Configuração</Text>
//         //         </View>
//         //
//         //         <View >
//         //             <Text className="fieldSet"
//         //                 // onPress={() => Linking.openURL('./alerta')}
//         //             ></Text>
//         //         </View>
//         //     </View>
//         // );
//
//
//     }

// }



export default class Home extends React.Component {

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


                <View>
                    <Text className="name">Olá Tiago</Text>
                    <Text className="config"
                          onPress={() => Linking.openURL('./config')}
                    >Configuração</Text>
                    <Text className="alerta"
                          onPress={() => Linking.openURL('./alerta')}
                    >Alertas</Text>
                    <View className="fieldSet"
                        // onPress={() => Linking.openURL('./alerta')}
                    >

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
                            showConfirmButton={true}
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
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: '#fff',
    },
    button: {
        margin: 10,
        paddingHorizontal: 10,
        paddingVertical: 7,
        borderRadius: 5,
        backgroundColor: "#2e708f",
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
