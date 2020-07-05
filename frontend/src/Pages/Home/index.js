import React from 'react';
import { StyleSheet, Text, View, Button, Linking } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function Home() {


    const styles = StyleSheet.create({
        quetion: {
            "width": "100%",
            "top": "5%",
            "fontSize": "18px",
            "textAlign": "justify"
        },
        btn: {
            color: "white",
            // width: 42%;
            height: "77px !important",
            marginTop: "-1px !important",
            backgroundColor: "white !importante",
            top: "10px",
            height: "41px",
            color: "white !important",
            fontSize: "18px"
        }
    });

  function getQuiz() {

      // Popular o quiz com um json
      return (
          <View>
              <Text style={styles.quetion}>
                  Com que frequência devemos lavar as mãos?
              </Text>
              <Button className="btnQuiz" value="">1. Sempre que tocamos em algo</Button>
              <Button className="btnQuiz" value="">2. Uma vez por dia</Button>
              <Button className="btnQuiz" value="">3. Uma vez por mês</Button>
              <Button className="btnQuiz" value="">4. Nunca devemos lavar as mãos</Button>
          </View>
      );
  }

  var quiz = getQuiz();
  return (
      <View>
          <Text className="name">Olá Tiago</Text>
          <Text className="config"
                onPress={() => Linking.openURL('./config')}
              >Configuração</Text>
          <Text className="alerta"
                onPress={() => Linking.openURL('./alerta')}
              >Alertas</Text>
          <Text className="fieldSet"
                // onPress={() => Linking.openURL('./alerta')}
              >{quiz}</Text>
      </View>
  );

    // return (
    //     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    //         <Text>Home Screen</Text>
    //         <Button className="nome"
    //                 title="Go to Details"
    //                 onPress={() => navigation.navigate('Details')}
    //         />
    //     </View>
    // );
}
