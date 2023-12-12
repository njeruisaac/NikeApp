import { StatusBar } from 'expo-status-bar';
import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import products from "./src/data/products";
import Productscreen from "./src/screens/Productscreen";
import ProductDetailsScreen from "./src/screens/ProductDetailsScreen";
import ShoppingCart from "./src/screens/ShoppingCart";
export default function App() {
  return (
    <View style={styles.container}>
      {/*<Productscreen/>*/}
      {/*<ProductDetailsScreen/>*/}
      <ShoppingCart/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
