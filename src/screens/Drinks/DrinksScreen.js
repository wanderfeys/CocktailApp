import React, { useEffect, useState,useLayoutEffect } from "react"
import {ActivityIndicator,SectionList,Text,TouchableNativeFeedback,View,Button} from "react-native"
import { Icon } from "react-native-elements"
import DrinkView from "../../components/Drink/DrinkView"
import { checked_drinks } from "../../redux/DrinksReducer"
import { filters_load } from "../../redux/FiltersReducer"
import { styles } from "./DrinksStyles"
import { connect } from "react-redux"

const DrinksScreen = ({ navigation, filters_load, drinks, checked_drinks }) => {
  const [loading, setLoading] = useState(false)
  const [isEnd, setIsEnd] = useState(false)

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
       <TouchableNativeFeedback onPress={filter_press}>
         <Icon
           name="filter"
           type="material-community"
           style={styles.filterIcon}
         />
       </TouchableNativeFeedback>
     ),
    })
  },[navigation]);

  useEffect(() => {
    filters_load()
  },
  [filters_load])


  function filter_press ()  {
    navigation.navigate("FiltersScreen")
  }


  return (
    <View>
      <SectionList
        sections={drinks}
        keyExtractor={(item) => item.idDrink}
        renderItem={({ item }) =>  <DrinkView {...item} />}
        renderSectionHeader={({ section: { filter } }) =>(<Text style={styles.drinksHeader}>{filter}</Text>)}
        onEndReached={() => {
          setLoading(true)
          checked_drinks().then((data) => {
            setLoading(false)
            setIsEnd(data)
          })
        }}
        renderSectionFooter={() => {
          if (loading==true)
            return (
              <View style={styles.loader}>
                <ActivityIndicator size="large" color="black" />
              </View>
            );
          if (isEnd==true)
            return (
              <View style={styles.end}>
                  <Text style={styles.text_end}>The list of booze is over, scroll up</Text>
              </View>
            )

        }}
        stickySectionHeadersEnabled
      />
    </View>
  )
}

const mapStateToProps = (state) => ({
  drinks: state.DrinkReducer.drinks,
})

export default connect(mapStateToProps, { filters_load, checked_drinks })(
  DrinksScreen
)
