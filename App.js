import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Saludo } from './app/components/Saludo';
import { ListaProductos } from './app/components/ListaProductos';
import { PerfilUsuario } from './app/components/Usuario';

export default function App() {
  return (
    <View style={styles.container}>
     <PerfilUsuario/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
