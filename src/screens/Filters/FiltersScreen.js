import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { ScrollView, Text, TouchableNativeFeedback, View, ActivityIndicator } from "react-native";
import FilterView from "../../components/Filter/FilterView";
import { styles } from "./FiltersStyle";
import {setCheckedFilters} from "../../redux/FiltersReducer";

const FiltersScreen = ({ navigation, checkedFilters, setCheckedFilters, filters}) => {

  const [isChecked, setChecked] = useState([]);

  useEffect(() => {
    setChecked(checkedFilters);
  }, [checkedFilters])

  function filterHandler  ()  {
      setCheckedFilters(isChecked)
      navigation.goBack()

    }



  return (
    <View style={styles.filters}>
      <ScrollView >
        {filters.map((filter) => (
          <FilterView
            key={filter}
            filter={filter}
            checked={isChecked}
            setChecked={setChecked}
          />
        ))}
      </ScrollView>
      <TouchableNativeFeedback onPress={filterHandler}>
        <View style={styles.button}>
            <Text style={styles.buttonText}>APPLY</Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};

const mapStateToProps = (state) => ({
  filters: state.FilterReducer.filters,
  checkedFilters: state.FilterReducer.checkedFilters,
});

export default connect(mapStateToProps, { setCheckedFilters })(FiltersScreen);
