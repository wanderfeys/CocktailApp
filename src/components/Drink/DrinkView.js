import React from "react"
import { Image, Text, View,TouchableOpacity } from "react-native"
import { styles } from "./DrinkStyle"

const DrinkView= ({ strDrinkThumb, idDrink, strDrink }) => {

  return (
    <TouchableOpacity >
      <View style={styles.drinks}>
        <Image
          style={styles.imgStyle}
          source={{uri: strDrinkThumb }}
        />
        <Text style={styles.drinkName}>{strDrink}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default DrinkView;
