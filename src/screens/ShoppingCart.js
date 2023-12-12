import {FlatList, StyleSheet, Text, View} from "react-native";
import cart from "../data/cart";
import CartListItem from "../components/CartListItem";

const ShoppingCart = () =>{
  return (
      <FlatList
          data={cart}
          renderItem={({item})=> <CartListItem cartItem={item}/> }
          ListFooterComponent={()=>(
              <View style={styles.totalsContainer}>
                <View style={styles.row}>
                    <Text> SubTotal</Text>
                    <Text> $410.00</Text>
                </View>
              </View>
          )}
      />
  )
};
const styles= StyleSheet.create({
    totalsContainer:{

    },
});

export default ShoppingCart;