import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import {useState} from 'react';


export default function App() {

  const [lembrete, setLembrete] = useState('')
  const capturarLembrete = (lembreteDigitado) =>{
    setLembrete(lembreteDigitado)
  
  }

  const adicionarLembrete = () => {
    console.log(lembrete)
  }

  //single source of truth


  return (
    <View style={styles.container}>
      <View>
        <TextInput
          placeholder='Lembrar...'
          style={styles.lembreteTextInput}
          //onChangeText={capturarLembrete}
          onChange={(e)=> capturarLembrete(e.target.value)}
          value={lembrete}
        />
        <Button
          title="Adicionar"
          onPress={adicionarLembrete}
        />
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    padding: 40
  },
  lembreteTextInput:{
    borderBottomColor: '#CCC', 
    borderBottomWidth: 1, 
    marginBottom: 4, 
    padding: 12}
});
