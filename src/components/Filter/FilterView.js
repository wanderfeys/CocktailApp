import React from "react";
import { View,TouchableNativeFeedback, Text  } from "react-native";
import { styles } from "./FilterStyle";
import { Icon } from "react-native-elements";


const FilterView = ({ filter, setChecked, checked }) => {


  function isCheckHandler () {
    if (checked.includes(filter))
      setChecked(checked.filter((item) => item !== filter))
    else setChecked((state) => [...state, filter])
  }

  return (
    <TouchableNativeFeedback onPress={isCheckHandler}>
      <View style={styles.filterContainer}>
        <Text style={styles.filterText}> {filter} </Text>
        {checked.includes(filter) && (
          <Icon style={styles.isCheck}
                type="material"
                name="done"
            />
        )}
      </View>
    </TouchableNativeFeedback>
  );
};

export default FilterView;
