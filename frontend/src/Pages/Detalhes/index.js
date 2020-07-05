import React from 'react';
import { Text, View, Button } from 'react-native';

function DetailsScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Página de detalhes</Text>
        <Button
          title="Pagina de detalhes"
          onPress={() => navigation.navigate('Details')}
        />
      </View>
    );
  }
  