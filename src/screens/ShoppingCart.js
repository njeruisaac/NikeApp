import {FlatList, Pressable, StyleSheet, Text, View} from "react-native";
import cart from "../data/cart";
import CartListItem from "../components/CartListItem";


const ShoppingCartTotals = () => (
    <View style={styles.totalsContainer}>
        <View style={styles.row}>
            <Text style={styles.text}> SubTotal</Text>
            <Text style={styles.text}> $410.00</Text>
        </View>
        <View style={styles.row}>
            <Text style={styles.text}> Deliver</Text>
            <Text style={styles.text}> $10.00</Text>
        </View>
        <View style={styles.row}>
            <Text style={styles.textBold}> Total</Text>
            <Text style={styles.textBold}> $420.00</Text>
        </View>
    </View>
)
const ShoppingCart = () =>{
  return (
      <>
      <FlatList
          data={cart}
          renderItem={({item})=> <CartListItem cartItem={item}/> }
          ListFooterComponent={ShoppingCartTotals}
      />
    <Pressable style={styles.button}>
        <Text style={styles.buttonText}>CheckOut</Text>
    </Pressable>
      </>
  )
};
const styles= StyleSheet.create({
    totalsContainer:{
        margin: 20,
        paddingTop: 10,
        borderTopWidth: 1,
        borderColor: 'gainsboro',

    },
    row:{
        justifyContent:'space-between',
        flexDirection:'row',
        marginVertical: 2,
    },
    text:{
        fontSize: 16,
        color: 'gray',

    },
    textBold:{
        fontSize: 16,
        fontWeight: '500',

    },
    button:{
        position: 'absolute',
        backgroundColor: 'black',
        bottom: 30,
        width: '90%',
        alignSelf: 'center',
        padding: 20,
        borderRadius: 100,
        alignItems: 'center',
    },
    buttonText:{
        color: 'white',
        fontWeight: '500',
        fontSize: 16,
    },
});

export default ShoppingCart;